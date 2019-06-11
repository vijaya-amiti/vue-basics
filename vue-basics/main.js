
// Creating Vue instance and mounting to div with id = 'app'
// const app = new Vue().$mount('#app');


// This is same as above but el property indide the Vue() itself
const app = new Vue({
    el: '#app',
    // new data object that can access vue app space
    data: {
        people: [
            {
              "index": 0,
              "guid": "8509bb6e-ad43-458f-9b61-8e1eaeb5131b",
              "isActive": false,
              "balance": 2525.57,
              "name": "Britney Hansen",
              "email": "britneyhansen@mantrix.com",
              "registered": "2014-03-01T06:36:14"
            },
            {
              "index": 1,
              "guid": "d2684ebd-96fc-4b35-a480-bdf78c25f088",
              "isActive": false,
              "balance": 2162.47,
              "name": "Luella Williamson",
              "email": "luellawilliamson@mantrix.com",
              "registered": "2014-06-20T10:01:32"
            },
            {
              "index": 2,
              "guid": "4061f305-117c-44da-8072-fe48481b1f0c",
              "isActive": true,
              "balance": 3714.25,
              "name": "Jeannette Patton",
              "email": "jeannettepatton@mantrix.com",
              "registered": "2016-10-17T04:55:09"
            },
            {
              "index": 3,
              "guid": "174c0454-d799-4f51-ac83-cac6b39e39c6",
              "isActive": false,
              "balance": 2372.47,
              "name": "Enid Townsend",
              "email": "enidtownsend@mantrix.com",
              "registered": "2014-09-29T08:27:07"
            },
            {
              "index": 4,
              "guid": "c67333c2-9e48-4915-8aa6-99d8fe899799",
              "isActive": true,
              "balance": 1630.08,
              "name": "Mendoza Moran",
              "email": "mendozamoran@mantrix.com",
              "registered": "2014-09-29T05:23:12"
            },
            {
              "index": 5,
              "guid": "fd370e3e-d400-42f4-b42c-bef885dcb05e",
              "isActive": true,
              "balance": 2551.42,
              "name": "Ella Ryan",
              "email": "ellaryan@mantrix.com",
              "registered": "2015-05-14T05:26:23"
            },
            {
              "index": 6,
              "guid": "0d49567d-2dea-4c41-867b-aa07ee7918e1",
              "isActive": false,
              "balance": 1319.83,
              "name": "Whitley Jordan",
              "email": "whitleyjordan@mantrix.com",
              "registered": "2017-01-27T04:30:41"
            },
            {
              "index": 7,
              "guid": "ab7ee6b6-3fb8-497c-85ad-055530102caf",
              "isActive": false,
              "balance": 3394.97,
              "name": "Hawkins Reilly",
              "email": "hawkinsreilly@mantrix.com",
              "registered": "2018-05-02T12:51:53"
            },
            {
              "index": 8,
              "guid": "5516a797-7532-415c-b839-2987d9199c9c",
              "isActive": false,
              "balance": 3218.6,
              "name": "Rebecca Boyle",
              "email": "rebeccaboyle@mantrix.com",
              "registered": "2018-02-26T11:57:58"
            },
            {
              "index": 9,
              "guid": "bc184697-47f0-487c-a827-11c905e78db3",
              "isActive": false,
              "balance": 2470.19,
              "name": "Lynnette Parker",
              "email": "lynnetteparker@mantrix.com",
              "registered": "2015-05-28T08:10:26"
            }
          ],
          currency: '$',
          filter: {
              field: '',
              query: ''
          }








        // message: 'Hello Vue!',
        // isVisible: false,
        // selected: 'yes',
        // msg: '<h1>Hello Vue!!!</h1>',
        // imageSource1: "https://via.placeholder.com/150x250/24f3ff",
        // imageSource2: "https://via.placeholder.com/300x250/cdccfe",
        // price: 25,
        // shirtPrice: 25,
        // hatPrice: 10,
        // currency: '$',
        // salesTax: 23
    },
    computed: {
        // messageToLower() {
        //     return this.message.toLowerCase();
        // },
        // cost() {
        //     // Work out the price of the item including salesTax
        //     let itemCost = parseFloat(Math.round((this.salesTax / 100) * this.price) + this.price).toFixed(2);
        //     // add text before displaying currency and  amount
        //     let output = 'the item cost is ' + this.currency + itemCost;
        //     // Append to the output variable the price without the salesTax
        //     output += ' ( '+ this.currency +this.price + ' excluding the sales tax )';
        //     return output;
        // },
        // shirtCost() {
        //     return this.addCurrency(this.calculateSalesTax(this.shirtPrice));
        // },
        // hatCost() {
        //     return this.addCurrency(this.calculateSalesTax(this.hatPrice));
        // },
        
    },
    methods: {
        // calculateSalesTax(price) {
        //     // Calculating item price using sales tax 
        //     return parseFloat(Math.round((this.salesTax / 100) * price) + price).toFixed(2);
        // },
        // addCurrency(price) {
        //     return this.currency + price;
        // },
        // isActive(person) {
        //     return person.isActive;
        // },
        isActiveFilterSelected() {
            return (this.filter.field == 'isActive');
        },

        // Classess
        activeClass(person) {
            return person.isActive ? 'active' : 'inactive';
        },
        balanceClass(person) {
            let balanceLevel = 'success';
            let increasing = false;
            let balance = person.balance / 1000;
            if (Math.round(balance) ===  Math.ceil(balance)) {
                increasing = 'increasing';
            }
            if (person.balance < 2000) {
                balanceLevel = 'error';
            } else if (person.balance < 3000) {
                balanceLevel = 'warning';
            }
            return [balanceLevel, increasing];
        },

        // Formatting
        format(person, key) {
            let field = person[key];
            let ouput = field.toString().trim();

            switch(key) {
                case 'balance':
                        output = this.currency + field.toFixed(2);
                        break;
                case 'registered':
                case 'deactivated':
                        let registered = new Date(field);
                        output = registered.toLocaleString('en-US');
                        break;
                case 'isActive':
                        output = field ? 'Active' : 'Inactive';
                        break;
            }

            return output;
        },
        
        // Filtering
        changeFilters(event) {
            this.filter.query = '';
            this.filter.field = event.target.value;
        },
        filterRow(person) {
            let visible = true;
            let field = this.filter.field;
            let query = this.filter.query;
            if (field) {
                if(this.isActiveFilterSelected()) {
                    visible = (typeof query === 'boolean') ? (query === person.isActive) : true;
                } else  {
                    // for differentiating number data types
                    query = String(query);
                    field = person[field];

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

                    // General rvisible
                    // let query = this.filterQuery.toLowerCase();
                    // let field = person[this.filterField].toString().toLowerCase();
                    // visible = field.includes(query);
                }
            }
            return visible;
        }
    }
});













// we can also create only the vue instance and later we can mount it to div
// but this delays things to be done
// const app = new Vue();
// {
//     // some block of code
// }
// app.$mount('#app');

// app.message = 'Goodbye!!!'; 