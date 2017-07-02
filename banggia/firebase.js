/**
 * Created by tuanchau on 7/1/17.
 */



function Firebase() {
    var me = this;
    var database;

    this.init = function () {
        var config = {
            apiKey: "AIzaSyAm0oJus4CWGcPDmTKJN4ruhhUvdb9Z83E",
            authDomain: "stockview-58338.firebaseapp.com",
            databaseURL: "https://stockview-58338.firebaseio.com",
            projectId: "stockview-58338",
            storageBucket: "stockview-58338.appspot.com",
            messagingSenderId: "713539837501"
        };
        firebase.initializeApp(config);
        database = firebase.database();
    };

    this.write = function (owner, group, stocks) {
        var o = {};
        for (var i = 0; i < stocks.length; i++) {
            o[i] = stocks[i];
        }
        database.ref().child('stocks').child(owner).child(group).set(o);
    };

    this.setOnStockChangedListener = function (owner, group, callback) {
        database.ref('stocks/' + owner + "/" + group)
            .on('value', function (snapshot) {
                var o = snapshot.val();
                if (o)
                    callback(o);
            });
    };

    this.getOwner = function(passcode, callback) {
        database.ref('users/' + passcode).once('value').then(function(snapshot){
            var owner = snapshot.val();
            callback(owner);
        });
    }
}


