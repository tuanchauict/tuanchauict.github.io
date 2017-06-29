
var app = new Vue({
    el: '#app',
    data: function () {
        var md = new MobileDetect(window.navigator.userAgent);
        var stockIds = localStorage.getItem('stockIds');

        var stocks = [];
        for (var i = 0; i < 5; i++) {
            stocks.push({
                id: '00' + i,
                name: 'Hoang Anh Gia Lai'
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
        }
    }
});
