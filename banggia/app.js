Vue.use(VueWebsocket, "ws://banggia.mbs.com.vn/sjsrlt/286/2n82rmql/websocket");


var app = new Vue({
    el: '#app',
    data: function () {

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
                    },
                    buy: [
                        {
                            price: 9,
                            volume: 1000
                        },
                        {
                            price: 9,
                            volume: 1000
                        },
                        {
                            price: 9,
                            volume: 1000
                        }
                    ],
                    sell: [
                        {
                            price: 9,
                            volume: 1000
                        },
                        {
                            price: 9,
                            volume: 1000
                        },
                        {
                            price: 9,
                            volume: 1000
                        }
                    ],
                    stats: {
                        totalVolume: 90000,
                        high: 9,
                        low: 8,
                        average: 8.5
                    },
                    foreign: {
                        buyVolume: 144,
                        buyRoom: 4,
                        sellAmount: 0,
                        sellRoom: 1
                    }
                }

            })
        }

        return {
            stockCodes: 'HAG',
            stocks: stocks
        }
    },
    computed: {
        mobile: function () {
            console.log(this.stockCodes);
            var md = new MobileDetect(window.navigator.userAgent);
            return (md.os() === 'iOS' && md.mobile() !== 'iPad') || (md.os() === 'AndroidOS');
        }
    },
    methods: {
        onSortUpdate: function (event) {
            console.log("update", event);
            console.log(this.$data.stocks);
        },
        detectChangeClass: function (item, value) {
            var p = item.live.match.price;
            if (typeof value !== 'undefined') {
                p = value;
            }
            if(value === '' || value < 0)
                return '';

            if (value === 'ATC' || value === 'ATO') {
                return 'atoatc';
            }

            var r = item.price0.reference;
            if (p > r) {
                return p == item.price0.ceil ? 'c' : 'i';
            } else if (p == r) {
                return 'e';
            } else {
                return p == item.price0.floor ? 'f' : 'd';
            }
        },
        getChangeValue: function (item) {
            return item.live.match.price - item.price0.reference;
        }
    },
    socket: {
        events: {
            changed: function (msg) {
                console.log(msg);
            },
            connect: function () {
                console.log("connect");
            },
            disconnect: function () {
                console.log("disconnect");
            },
            error: function (e) {
                console.log(e);
            }
        }
    }
});

app.stocks[0].id = 'MBB';