var APP = new Vue({
    components:{
        localTable:localTable
    },
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
        stockGetChangeType: detectStockValueChangeType,
        stockGetChangeValue: getStockChangeValue,
        onStocksChanged: function (event) {
            console.log("update", event);
            console.log(this.stock.stocks);
            var codes = [];
            var stocks = this.stock.stocks;
            for(var i = 0; i < stocks.length; i++){
                codes.push(stocks[i].id);
            }
            this.stock.codes = codes;
            console.log(this.stock.codes);
            fb.write(this.owner, 'default', this.stock.codes);
        },
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
                var uCodes = s.split(/\s*,\s*/);
                var codes = APP.stock.codes;
                var code;
                for(var i = 0; i < uCodes.length; i++){
                    code = uCodes[i].trim().toUpperCase();
                    if(_ListStockInfo.hasOwnProperty(code) && !(code in codes)){
                        codes.push(code);
                    } else {
                        console.log('Invalid:', code);
                    }
                }

                fb.write(APP.owner, 'default', codes);
            }
        },
        doLogout: function(){
            this.owner = null;
            this.stock.codes = [];
            this.stock.stocks = [];
            localStorage.removeItem('owner');
            console.log(this.owner);
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


function updateValue(v, delta) {
    if(v && v > 0){
        return v - delta;
    } else
        return 0;
}
//
setInterval(function() {
    var stocks = APP.stock.stocks;
    var live;
    var stock;
    var j;
    for(var i = 0; i < stocks.length; i++){
        stock = stocks[i];
        live = stock.live;
        live.match.priceUpdate = updateValue(live.match.priceUpdate, 0.5);
        live.match.volumeUpdate = updateValue(live.match.volumeUpdate, 0.5);

        for(j = 0; j < 3; j++){
            live.buy[j].priceUpdate = updateValue(live.buy[j].priceUpdate, 0.5);
            live.buy[j].volumeUpdate = updateValue(live.buy[j].volumeUpdate, 0.5);
            live.sell[j].priceUpdate = updateValue(live.sell[j].priceUpdate, 0.5);
            live.sell[j].volumeUpdate = updateValue(live.sell[j].volumeUpdate, 0.5);
        }
    }
}, 200);