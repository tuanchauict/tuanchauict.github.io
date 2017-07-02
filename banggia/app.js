var APP = new Vue({
    el: '#app',
    data: {
        owner: localStorage.getItem('owner'),
        stock: {
            codes: [],
            stocks: []
        }
    },
    computed: {
        mobile: detectMobile
    },
    methods: {
        onSortUpdate: function (event) {
            // console.log("update", event);
            // console.log(this.stock.stocks);
            // var el = tbodySortable.closest(event.item);
            // console.log(el);
        },
        onRemoveItemClicked: function(index){
            // tbodySortable.destroy();
            var stocks = this.stock.stocks;
            // // this.stock.stocks = [];
            stocks.splice(index, 1);
            // // this.stock.stocks = stocks;
            // var el = editableList.closest(evt.item); // get dragged item
            // el && el.parentNode.removeChild(el);

        },
        stockGetChangeType: detectStockValueChangeType,
        stockGetChangeValue: getStockChangeValue,
        onPasswordKeyUp: function (e) {
            if(event.keyCode === 13){
                var s = e.target.value;
                e.target.value = '';
                console.log(s);
                fb.getOwner(s, function(owner) {
                    console.log(owner);
                    if(!owner){
                        return;
                    }
                    localStorage.setItem('owner', owner);
                    APP.owner = owner;

                    listenToFirebase(owner);
                });
            }
        },
        onStockInputKeyUp: function(e){
            if(event.keyCode === 13){
                var s = e.target.value;
                e.target.value = '';
                var uCodes = s.split(',');
                var codes = APP.stock.codes;
                var code;
                for(var i = 0; i < uCodes.length; i++){
                    code = uCodes[i].toUpperCase();
                    if(_ListStockInfo.hasOwnProperty(code) && !(code in codes)){
                        codes.push(code);
                    } else {
                        console.log('Invalid:', code);
                    }
                }

                fb.write(APP.owner, 'default', codes);
            }
        }
    }
});

var fb = new Firebase();
fb.init();

function listenToFirebase(owner){
    if(!owner)
        return;
    fb.setOnStockChangedListener(owner, 'default', function (codes) {
        console.log("stock changed", codes);
        APP.stock.codes = codes;

        mbsRest.reload();
    });
}

listenToFirebase(APP.owner);