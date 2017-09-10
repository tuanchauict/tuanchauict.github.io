/**
 * Created by tuanchauict on 9/7/17.
 */

function Firebase() {
    var me = this;
    var database;
    var mOrderList;
    var mOrderListDetail;
    var mCurrentOrderListId;

    this.init = function (onDataChangedCallback) {
        var config = {
            apiKey: "AIzaSyDUHEsElweVtebLYGJS7TJu0svlqpXDKlI",
            authDomain: "gotitfood.firebaseapp.com",
            databaseURL: "https://gotitfood.firebaseio.com",
            projectId: "gotitfood",
            storageBucket: "gotitfood.appspot.com",
            messagingSenderId: "668817774606"
        };
        firebase.initializeApp(config);
        database = firebase.database();
        mOrderList = database.ref().child('orders');
        mOrderListDetail = database.ref().child('orderDetail');

        mOrderList.on('value', function (snapshot) {
            var list = snapshot.val();
            if (list) {
                console.log(list);
                if (onDataChangedCallback) {
                    onDataChangedCallback(list);
                }
            }

        });
        return me;
    };

    this.newOrderList = function (name) {
        var id = mOrderList.push().key;
        mOrderList.child(id).set({
            id: id,
            name: name,
            createdDate: new Date().toISOString(),
            removable: true
        });

        mOrderListDetail.child(id).child('_non_removable').set({
            removable: false
        });

        return id;
    };

    this.removeOrderList = function (id) {
        mOrderList.child(id).remove();
        mOrderListDetail.child(id).remove();
    };

    this.cloneOrderList = function (orderList, newName) {
        var id = mOrderList.push().key;
        mOrderList.child(id).set({
            id: id,
            name: newName,
            createdDate: new Date().toISOString(),
            removable: true
        });

        mOrderListDetail.child(orderList.id).once('value').then(function (snapshot) {
            var detail = snapshot.val();
            console.log("detail", detail);
            //TODO
        });
    };

    this.renameOrderList = function (orderList, newName) {
        console.log("rename", orderList, newName);
        orderList.name = newName;
        mOrderList.child(orderList.id).update(orderList);
    };

    this.addOrderItem = function (orderListId, itemObject) {
        if (!itemObject.hasOwnProperty("id")) {
            itemObject['id'] = mOrderList.child(orderListId).push().key;
            itemObject['listId'] = orderListId;
            itemObject['createdDate'] = new Date().toISOString();
            itemObject['modifiedDate'] = new Date().toISOString();
            itemObject['removable'] = true;
        } else {
            itemObject['modifiedDate'] = new Date().toISOString();
        }

        mOrderListDetail.child(orderListId).child(itemObject.id).set(itemObject);
    };

    this.removeOrderItem = function (orderListId, itemId) {
        mOrderListDetail.child(orderListId).child(itemId).remove();
    };

    this.listenToOrderListChange = function (orderListId, onChangedCallback) {
        if (orderListId === mCurrentOrderListId)
            return;
        if (mCurrentOrderListId)
            mOrderListDetail.child(mCurrentOrderListId).off('value');
        if (orderListId)
            mOrderListDetail.child(orderListId).on('value', function (snapshot) {
                var list = snapshot.val();
                if (onChangedCallback) {
                    onChangedCallback(list);
                }
            });
        mCurrentOrderListId = orderListId;
    }


}

