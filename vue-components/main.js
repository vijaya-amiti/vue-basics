
Vue.component('my-component', {
    template: `<div>hello</div>`
});

Vue.component('balance', {
    template: `<div>{{ formattedCost }}</div>`,
    props: {
        'cost': Number
    },
    data() {
        return {
            // cost: 1234,
            currency: '$'
        }
    },
    computed: {
        formattedCost() {
            return this.currency + this.cost.toFixed(2);
        }
    }
});

Vue.component('heading', {
    template: '<h1>{{ test }}</h1>',
    props: ['test']
});


Vue.component('modal-window', {
    template: `<div class="modal" v-show="visible">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <slot name="header"></slot>
                                <button type="button" class="close" data-dismis="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <slot></slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer"></slot>
                                <slot name="buttons">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save Changes</button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>`,
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {}
});


// when we have multiple instaces in one website and we want to include component inside that particular vue instances then we can declare in below format
// let Child = {
//     template: '<div>Hello</div>'
// }
// const app = new Vue({
//     el: '#app',
//     // App Components
//     components: {
//         'my-component': Child
//     }
    
// });