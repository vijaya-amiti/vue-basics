console.log('inside vue');



Vue.component('filtering', {
    template: '#filtering-template',
    props: {
        filter: Object
    },
    methods: {
        isActiveFilterSelected() {
            return (this.filter.field == 'isActive');
        },
        changeFilterField(event) {
            this.$emit('change-filter-field', event.target.value);
        }
    },
    watch: {
        'filter.query' : function() {
            this.$emit('change-filter-query', this.filter.query);
        }
    }
});



Vue.component('team-member', {
    template: '#team-member-template',
    props: {
        person: Object,
        filter: Object,
        statusFilter: Boolean
    },
    data() {
        return {
            currency: '$'
        }
    },
    computed: {
        activeClass() {
            return this.person.isActive ? 'active' : 'inactive';
        },
        balanceClass() {
            let balanceLevel = 'success';
            let increasing = false;
            let balance = this.person.balance / 1000;
            if (Math.round(balance) ===  Math.ceil(balance)) {
                increasing = 'increasing';
            }
            if (this.person.balance < 2000) {
                balanceLevel = 'error';
            } else if (this.person.balance < 3000) {
                balanceLevel = 'warning';
            }
            return [balanceLevel, increasing];
        },
        balance() {
            return this.currency + this.person.balance.toFixed(2);
        },
        dateRegistered() {
            let registered = new Date(this.person.registered);
            return registered.toLocaleString('en-US');
        },
        status() {
            return (this.person.isActive) ? 'Active' : 'Inactive';
        },
        filterRow() {
            let visible = true;
            let field = this.filter.field;
            let query = this.filter.query;
            if (field) {
                if(this.filter.field === 'isActive') {
                    visible = (typeof query === 'boolean') ? (query === this.person.isActive) : true;
                } else  {
                    // for differentiating number data types
                    query = String(query);
                    field = this.person[field];

                    if (typeof field === 'number') {
                        // it is a number
                        query = query.replace(this.currency, '');
                        try {
                            visible = eval(field + query);
                        } catch(e) {
                            // Since we don't want anything to be shown we can leave the catch empty
                        }
                    } else  {
                        // it is not a  number
                        field = field.toString().toLowerCase();
                        visible = field.includes(query.toLowerCase());
                    }
                }
            }
            return visible;
        }
    }
});





const app = new Vue({
    el: '#app',
    data: {
        people: [
            {
              "index": 0,
              "guid": "8fb06813-9c1c-4beb-b727-2331b6491e05",
              "isActive": false,
              "balance": 2573.03,
              "name": "Sharon Gray",
              "email": "sharongray@bizmatic.com",
              "registered": "2016-02-17T07:17:43"
            },
            {
              "index": 1,
              "guid": "b4414caf-333d-4010-a578-8d22f577a2bd",
              "isActive": false,
              "balance": 3055.53,
              "name": "Cynthia Mack",
              "email": "cynthiamack@bizmatic.com",
              "registered": "2015-06-10T03:23:51"
            },
            {
              "index": 2,
              "guid": "733ca7bb-623c-4f56-ba68-3cc1626f15cb",
              "isActive": false,
              "balance": 1270.54,
              "name": "Flossie Macdonald",
              "email": "flossiemacdonald@bizmatic.com",
              "registered": "2014-05-15T03:47:41"
            },
            {
              "index": 3,
              "guid": "0165feeb-45ed-4ee1-bd8f-c0d73915111f",
              "isActive": false,
              "balance": 2668.32,
              "name": "James Buchanan",
              "email": "jamesbuchanan@bizmatic.com",
              "registered": "2019-03-17T02:04:16"
            },
            {
              "index": 4,
              "guid": "e37ccf28-84c2-4854-acf3-f03529be3f70",
              "isActive": true,
              "balance": 1160.27,
              "name": "Randi Smith",
              "email": "randismith@bizmatic.com",
              "registered": "2015-11-27T03:29:09"
            },
            {
              "index": 5,
              "guid": "74d4abcb-8ef8-4de3-86dd-6a2d00786f81",
              "isActive": false,
              "balance": 1582.46,
              "name": "Marla Snow",
              "email": "marlasnow@bizmatic.com",
              "registered": "2014-06-26T10:18:20"
            },
            {
              "index": 6,
              "guid": "1798ceb5-306e-4bed-b13a-de2d91d40966",
              "isActive": false,
              "balance": 2913.83,
              "name": "Richmond Hill",
              "email": "richmondhill@bizmatic.com",
              "registered": "2019-03-09T02:21:11"
            },
            {
              "index": 7,
              "guid": "d6c89960-cfc9-46fe-ac19-1a9997f13536",
              "isActive": false,
              "balance": 3774.69,
              "name": "Flores Mcgowan",
              "email": "floresmcgowan@bizmatic.com",
              "registered": "2014-10-10T01:37:55"
            },
            {
              "index": 8,
              "guid": "399c036a-ae5d-453a-ade5-c693eefe725e",
              "isActive": true,
              "balance": 1989.73,
              "name": "John Huber",
              "email": "johnhuber@bizmatic.com",
              "registered": "2018-09-10T06:45:12"
            },
            {
              "index": 9,
              "guid": "823ed004-9a75-4562-933d-88227129db85",
              "isActive": false,
              "balance": 2341.93,
              "name": "Summers Johns",
              "email": "summersjohns@bizmatic.com",
              "registered": "2014-10-15T07:40:09"
            }
          ],
          currency: '$',
          filter: {
              field: '',
              query: ''
          }
    },
    methods: {        
        // Filtering
        changeFilters(field) {
            this.filter.query = '';
            this.filter.field = field;
        },
        changeQuery(query) {
            this.filter.query = query;
        }
    }
});