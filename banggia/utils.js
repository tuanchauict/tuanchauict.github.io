/**
 * Created by tuanchau on 6/28/17.
 */
var Store = {
    stockIds: 'stockIds'
};

var Url = {
    proxy: 'http://herokuperoxy-1-us.herokuapp.com/proxy/?url=',
    mbsHttp: {
        full: 'http://quote24pro.mbs.com.vn/Handler/LoadFull.ashx?Sequence=0&TradingCenter=&listCode={{code}}&{}',
        change: 'http://quote24pro.mbs.com.vn/Handler/Mixed/LoadChange.ashx?Sequence=333350&TradingCenter=&ListCode={{code}}&{}&_=' + new Date().getTime(),

        toUrl: function(url, codes){
            return Url.proxy + encodeURIComponent(url.replace('{{code}}', codes.join(',')));
        }
    },
    mbsWebsocket: [
        'ws://banggia.mbs.com.vn/sjsrlt/153/5tw64kyi/websocket'
    ],
    vndWebsocket: [
        'wss://price-hn05.vndirect.com.vn/realtime/855/vlihtmgq/websocket'
    ],
    fpt: {
        httpHSX: 'http://priceboard.fpts.com.vn/hsx/data.ashx?s=quote&l=All',
        httpHNX: 'http://priceboard.fpts.com.vn/hnx/data.ashx?s=quote&l=HNXIndex',
        httpUPC: 'http://priceboard.fpts.com.vn/hnx/data.ashx?s=quote&l=HNXUpcomIndex',
        wsHSX  : 'ws://priceboard.fpts.com.vn/hsx/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken={{connectionToken}}&connectionData=%5B%7B%22name%22%3A%22hubhsx2%22%7D%5D&tid=5',
        wsHSX2 : 'ws://priceboard.fpts.com.vn/hsx/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken={{connectionToken}}&connectionData=%5B%7B%22name%22%3A%22hubhsx2%22%7D%5D&tid=8',
        httpStartWs1: 'http://priceboard.fpts.com.vn/hnx/signalr/start?transport=webSockets&clientProtocol=1.5&connectionToken={{connectionToken}}&connectionData=%5B%7B%22name%22%3A%22hubhnx2%22%7D%5D&_={{timestamp}}',
        httpStartWs2: 'http://priceboard.fpts.com.vn/hsx/signalr/start?transport=webSockets&clientProtocol=1.5&connectionToken={{connectionToken}}&connectionData=%5B%7B%22name%22%3A%22hubhsx2%22%7D%5D&_={{timestamp}}'

    }
};

function get(url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.addEventListener('load', function(res){
        callback(res.target.responseText);
    });
    req.send();
}

function parseNumber(text){
    if(text === undefined || text.length === 0)
        return '';
    if(text === 'ATC' || text === 'ATO')
        return text;
    text = text.replace(',', '');
    var num = parseFloat(text);
    return isNaN(num) ? '' : num;
}

function round(number, to){
    return Math.round(number * to) / to;
}

function nomaliseAmount(number){
    if(number === ''){
        return ''
    }
    var low = number % 100;
    number = Math.floor(number / 100);
    var r = '' + low;
    while(number > 0){
        low = number % 1000;
        number = Math.floor(number / 1000);
        r = low + ',' + r;
    }
    return r;
}

function updateStock(oldStocks, newStocks){
    return newStocks;
}