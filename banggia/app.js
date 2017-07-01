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
            console.log("update", event);
            console.log(this.$data.stocks);
        },
        stockGetChangeType: detectStockValueChangeType,
        stockGetChangeValue: getStockChangeValue
    }
});


var stockInput = document.getElementById('stockInput');
stockInput.onkeyup = function(event){
    console.log(event.keyCode);
    if(event.keyCode === 13){
        var s = stockInput.value;
        stockInput.value = '';
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
};

var passwordInput = document.getElementById('password');
passwordInput.onkeyup = function (event) {
   if(event.keyCode === 13){
       var s = passwordInput.value;
       passwordInput.value = '';
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
};

function doLogout(e){
    localStorage.removeItem('owner');
    APP.owner = null;
}

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