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
    computed: {},
    methods: {
        hasOrderList: function () {
            return this.allOrderList !== null && this.allOrderList.length > 0;
        },
        selectOrderList: function (orderList) {
            this.currentOrderListId = orderList.id;
            console.log(orderList);
            FB.listenToOrderListChange(this.currentOrderListId, function (items) {
                console.log(items);
                currentOrderList = items;
            });
        },
        removeOrderList: function (orderList) {
            if (orderList.removable)
                FB.removeOrderList(orderList.id);
        },
        addNewOrderList: function (name) {
            FB.newOrderList(name);
            this.newOrderDialog.name = "";
        },
        removeOrderItem: function (orderListId, itemId) {
            FB.removeOrderItem(orderListId, itemId);
        },
        openDialog: function (ref) {
            this.$refs[ref].open();
        },
        closeDialog: function (ref) {
            this.$refs[ref].close();
        }
    }
});

var firstInit = true;

var FB = new Firebase().init(function (allOrderList) {
    var arr = [];
    var item;
    for (var k in allOrderList) {
        item = allOrderList[k];
        if (item.removable) {
            arr.push(item);
        }
    }
    APP.allOrderList = arr.sort(function (a, b) {
        return a.createdDate > b.createdDate ? -1 : a.createdDate < b.createdDate ? 1 : 0;
    });

    if (firstInit && arr) {
        APP.selectOrderList(arr[0]);
        firstInit = false;
    }
});