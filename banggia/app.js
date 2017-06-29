
var app = new Vue({
    el: '#app',
    data: function () {
        var md = new MobileDetect(window.navigator.userAgent);
        var stockIds = localStorage.getItem('stockIds');

        var stocks = [];
        for (var i = 0; i < 5; i++) {
            stocks.push({
                id: '00' + i,
                name: 'Hoang Anh Gia Lai',
                price0: {
                    ceil: 9,
                    floor: 8,
                    reference: 8.5
                },
                live: {
                    match: {
                        price: 9,
                        volume: 10000
                    }
                }

            })
        }

        return {
            mobile: (md.os() === 'iOS' && md.mobile() !== 'iPad') || (md.os() === 'AndroidOS'),
            stocks: stocks
        }
    },
    methods: {
        onSortUpdate: function (event) {
            console.log("update", event);
            console.log(this.$data.stocks);
        },

        detectChangeClass: function(item){
            if(item.live.price > item.price0.reference){
                return 'i';
            } else if(item.live.price == item.price0.reference){
                return 'e';
            } else {
                return 'd';
            }
        }
    }
});
