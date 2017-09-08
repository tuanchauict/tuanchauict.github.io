/**
 * Created by tuanchauict on 9/7/17.
 */
Vue.use(VueMaterial);



var APP = new Vue({
    el: "#app",
    data: {
        currentOrderListId: "",
        allOrderList: [],
        currentOrderList: [],
        currentSelectionOrderItemId: "",
        newOrderDialog: {
            name: ""
        }
    },
    computed: {

    },
    methods: {
        hasOrderList: function(){
            return this.allOrderList !== null && this.allOrderList.length > 0;
        },
        selectOrderList: function(orderList){
            this.currentOrderListId = orderList.id;
            console.log(orderList);
            FB.listenToOrderListChange(this.currentOrderListId, function(items){
                console.log(items);
                currentOrderList = items;
            });
        },
        removeOrderList: function(orderList){
            FB.removeOrderList(orderList.id);
        },
        addNewOrderList: function(name){
            FB.newOrderList(name);
            this.newOrderDialog.name = "";
        },
        openDialog: function(ref){
            this.$refs[ref].open();
        },
        closeDialog: function (ref) {
            this.$refs[ref].close();
        }
    }
});

var FB = new Firebase().init(function (allOrderList) {
    APP.allOrderList = allOrderList;
});