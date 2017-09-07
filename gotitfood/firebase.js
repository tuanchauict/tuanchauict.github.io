/**
 * Created by tuanchauict on 9/7/17.
 */

function Firebase() {
    var me = this;
    var database;
    var orderList;

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
        orderList = database.ref().child('orders');

        orderList.on('value', function (snapshot) {
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
        var id = orderList.push().key;
        orderList.child(id).set({
            id: id,
            name: name,
            createdDate: new Date().toISOString()
        });
    };

    this.removeOrderList = function (id) {
        orderList.child(id).remove();
    };

    this.addOrderItem = function (orderListId, itemObject) {
        if(!itemObject.hasOwnProperty("id")){
            itemObject['id'] = orderList.child(orderListId).push().key;
            itemObject['listId'] = orderListId;
            itemObject['createdDate']  = new Date().toISOString();
            itemObject['modifiedDate']  = new Date().toISOString();
        } else {
            itemObject['modifiedDate'] = new Date().toISOString();
        }

        orderList.child(itemObject.id).set(itemObject);
    };

    this.removeOrderItem = function (id) {
        orderList.child(id).remove();
    }
}

var fb = new Firebase().init();
fb.newOrderList("foo");