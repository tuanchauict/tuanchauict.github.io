Vue.use(VueWebsocket,"ws://banggia.mbs.com.vn/sjsrlt/286/2n82rmql/websocket");var app=new Vue({el:"#app",data:function(){var e=localStorage.getItem("stockIds");return{stockCodes:["HAG"],stocks:[]}},computed:{mobile:function(){console.log(this.stockCodes);var e=new MobileDetect(window.navigator.userAgent);return"iOS"===e.os()&&"iPad"!==e.mobile()||"AndroidOS"===e.os()}},methods:{onSortUpdate:function(e){console.log("update",e),console.log(this.$data.stocks)},detectChangeClass:function(e,o){var n=e.live.match.price;if("undefined"!=typeof o&&(n=o),""===o||0>o)return"";if("ATC"===o||"ATO"===o)return"atoatc";var t=e.price0.reference;return n>t?n>=e.price0.ceil?"c":"i":n==t?"e":n<=e.price0.floor?"f":"d"},getChangeValue:function(e){var o=e.live.match.price-e.price0.reference;if(0===o)return"";var n=o>0,t=Math.abs(o)/e.price0.reference*100;return(n?"+":"")+round(o,100)+(n?"▲":"▼")+round(t,100)+"%"}},socket:{events:{changed:function(e){console.log(e)},connect:function(){console.log("connect")},disconnect:function(){console.log("disconnect")},error:function(e){console.log(e)}}}});app.stocks[0].id="MBB";