var APP = new Vue({
    el: '#app',
    data: {
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
            code = uCodes[i];
            if(_ListStockInfo.hasOwnProperty(code) && !(code in codes)){
                codes.push(code);
            } else {
                console.log('Invalid:', code);
            }
        }

        fb.write('anh', 'default', codes);
    }
};