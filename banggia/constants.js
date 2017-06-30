/**
 * Created by tuanchau on 6/28/17.
 */
var Store = {
    stockIds: 'stockIds'
};

var url = {
    proxy: 'http://herokuperoxy-1-us.herokuapp.com/proxy/?url=',
    mbsXHR: {
        full: 'http://quote24pro.mbs.com.vn/Handler/LoadFull.ashx?Sequence=0&TradingCenter=&listCode=CVT,HAG,HNG,MBB,MBS,STB,VIT&{}'
    },
    mbsWebsocket: [
        'ws://banggia.mbs.com.vn/sjsrlt/153/5tw64kyi/websocket'
    ],
    vndWebsocket: [
        'wss://price-hn05.vndirect.com.vn/realtime/855/vlihtmgq/websocket'
    ]
}