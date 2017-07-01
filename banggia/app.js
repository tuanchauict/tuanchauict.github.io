Vue.use(VueWebsocket, "ws://banggia.mbs.com.vn/sjsrlt/286/2n82rmql/websocket");


var app = new Vue({
    el: '#app',
    data: function () {

        var stockIds = localStorage.getItem('stockIds');

        return {
            stockCodes: ['HAG'],
            stocks: []
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
                return p >= item.price0.ceil ? 'c' : 'i';
            } else if (p == r) {
                return 'e';
            } else {
                return p <= item.price0.floor ? 'f' : 'd';
            }
        },
        getChangeValue: function (item) {
            var diff = item.live.match.price - item.price0.reference;
            if(diff === 0)
                return '';
            var increase = diff > 0;
            var percent = Math.abs(diff) / item.price0.reference * 100;
            return (increase ? '+' : '') + round(diff, 100) + (increase ? '▲' : '▼') + round(percent, 100) + '%';
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