/**
 * Created by tuanchauict on 9/7/17.
 */
Vue.use(VueMaterial);


var APP = new Vue({
    el: "#app",
    data: {
        allOrderList: {
            array: [],
            map: {}
        },
        currentOrderList: {
            items: {
                array: [],
                map: {}
            },
            id: "",
            selectedItemId: ""
        },
        newOrderListDialog: {
            name: ""
        },
        renameOrderListDialog: {
            item: null,
            oldName: "",
            newName: ""
        },
        newOrderItemDialog: {
            name: "",
            amount: 1,
            brand: "",
            note: ""
        },
        editOrderContent: {
            item: null,
            name: "",
            amount: 1,
            brand: "",
            note: ""
        }
    },
    computed: {
        hasOrderList: function () {
            return this.allOrderList.array !== null && this.allOrderList.array.length > 0;
        },
        currentOrderList: function () {
            var orderId = this.currentOrderList.id;
            if (orderId && this.allOrderList.map) {
                return this.allOrderList.map[orderId];
            }
            return null;
        },
        currentOrderListName: function () {
            var orderId = this.currentOrderList.id;
            if (orderId && this.allOrderList.map) {
                return this.allOrderList.map[orderId].name;
            }
            return "";
        }
    },
    methods: {
        selectOrderList: function (orderListId) {
            var me = this;
            var currentOrderList = me.currentOrderList;
            currentOrderList.id = orderListId;
            console.log("selectOrderList: ", orderListId);
            FB.listenToOrderListChange(orderListId, function (items) {
                console.log("items", items);
                var arr = [];
                var item;
                for (var k in items) {
                    if (!items.hasOwnProperty(k))
                        continue;
                    item = items[k];
                    if (item.removable) {
                        arr.push(item);
                    }
                }
                console.log(arr);
                me.currentOrderList.items.array = arr.sort(function (a, b) {
                    return a.createdDate > b.createdDate ? -1 : a.createdDate < b.createdDate ? 1 : 0;
                });
                me.currentOrderList.items.map = items;
                console.log(currentOrderList);
            });
        },
        removeOrderList: function (orderList) {
            if (orderList.removable)
                FB.removeOrderList(orderList.id);
        },
        cloneOrderList: function (orderList, newName) {
            if (orderList.removable) {
                FB.cloneOrderList(orderList, newName);
            }
        },
        renameOrderList: function (orderList, newName) {
            if (orderList.removable) {
                FB.renameOrderList(orderList, newName);
            }
        },
        addNewOrderList: function (name) {
            FB.newOrderList(name);
            this.newOrderDialog.name = "";
        },
        removeOrderItem: function (orderListId, itemId) {
            FB.removeOrderItem(orderListId, itemId);
            //TODO change currentOrder
        },
        addOrderItem: function () {
            var info = this.newOrderItemDialog;
            FB.addOrderItem(this.currentOrderList.id, {
                name: info.name,
                brand: info.brand,
                amount: info.amount,
                note: info.note,
                check: false
            });
            info.name = "";
            info.brand = "";
            info.note = "";
            info.amount = 1;
        },
        selectOrderItem: function (id) {
            var currentOrderList = this.currentOrderList;
            var selectedItem = currentOrderList.items.map[id];
            currentOrderList.selectedItemId = id;
            this.editOrderContent = {
                name: selectedItem.name,
                amount: selectedItem.amount,
                brand: selectedItem.brand,
                note: selectedItem.note
            }
        },
        cancelEditOrderItem: function (item) {
            var editOrderContent = this.editOrderContent;
            item.name = editOrderContent.name;
            item.amount = editOrderContent.amount;
            item.brand = editOrderContent.brand;
            item.note = editOrderContent.note;
            this.currentOrderList.selectedItemId = "";
        },
        saveEditOrderItem: function (item) {
            FB.addOrderItem(item.listId, item);
            this.currentOrderList.selectedItemId = "";
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
    APP.allOrderList.array = arr.sort(function (a, b) {
        return a.createdDate > b.createdDate ? -1 : a.createdDate < b.createdDate ? 1 : 0;
    });

    APP.allOrderList.map = allOrderList;

    if (firstInit && arr) {
        APP.selectOrderList(arr[0].id);
        firstInit = false;
    }
});