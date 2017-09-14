/**
 * Created by tuanchauict on 9/7/17.
 */

function Firebase() {
    var me = this;
    var database;
    var mOrderList;
    var mOrderListDetail;
    var mAutoCompleteBrand;
    var mAutoCompleteItemName;
    var mCurrentOrderListId;

    this.init = function (onDataChangedCallback, onAutoCompleteResult) {
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
        mAutoCompleteBrand = database.ref().child('autoComplete').child('brand');
        mAutoCompleteItemName = database.ref().child('autoComplete').child('itemName');

        mOrderList.on('value', function (snapshot) {
            var list = snapshot.val();
            if (list) {
                console.log(list);
                if (onDataChangedCallback) {
                    onDataChangedCallback(list);
                }
            }

        });

        database.ref().child('autoComplete').once('value').then(function(snapshot){
            var autoComplete = snapshot.val();
            if(!autoComplete)
                return;
            var mapItem = autoComplete.itemName;
            var mapBrand = autoComplete.brand;
            var k;
            var arrItem = [];
            var arrBrand = [];
            for (k in mapItem){
                if (mapItem.hasOwnProperty(k))
                    arrItem.push(k);
            }
            for (k in mapBrand){
                if (mapBrand.hasOwnProperty(k))
                    arrBrand.push(k);
            }
            arrItem.sort();
            arrBrand.sort();
            console.log("autoCompleteItems", arrItem);
            console.log("autoCompleteBrands", arrBrand);
            onAutoCompleteResult(arrItem, arrBrand);
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
            var targetDetail = mOrderListDetail.child(id);
            var detail = snapshot.val();
            var map = {};
            console.log("detail", detail);
            //TODO
            for(var k in detail){
                if(!detail.hasOwnProperty(k))
                    return;
                var item = detail[k];
                if(item.removable){
                    item.id = targetDetail.push().key;
                    item.listId = id;
                    map[item.id] = item;
                } else {
                    map[k] = item;
                }
            }
            mOrderListDetail.child(id).set(map);
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
        mAutoCompleteItemName.child(itemObject.name).set(true);
        if(itemObject.brand)
            mAutoCompleteBrand.child(itemObject.brand).set(true);
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

