/**
 * Created by tuanchau on 6/28/17.
 */
var Store = {
    stockIds: 'stockIds'
};

var Url = {
    proxy: 'http://herokuperoxy-1-us.herokuapp.com/proxy/?url=',
    mbsXHR: {
        full: 'http://quote24pro.mbs.com.vn/Handler/LoadFull.ashx?Sequence=0&TradingCenter=&listCode={{code}}&{}',
        change: 'http://quote24pro.mbs.com.vn/Handler/Mixed/LoadChange.ashx?Sequence=333350&TradingCenter=&ListCode={{code}}&{}&_=' + new Date().getTime(),

        toUrl: function(url, codes){
            return Url.proxy + url.replace('{{code}}', codes.join(','));
        }
    },
    mbsWebsocket: [
        'ws://banggia.mbs.com.vn/sjsrlt/153/5tw64kyi/websocket'
    ],
    vndWebsocket: [
        'wss://price-hn05.vndirect.com.vn/realtime/855/vlihtmgq/websocket'
    ]
};

function get(url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.addEventListener('load', function(res){
        callback(res.target.responseText);
    });
    req.send();
}
