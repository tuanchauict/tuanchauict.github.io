function listenToFirebase(e){e&&fb.setOnStockChangedListener(e,"default",function(e){console.log("stock changed",e),APP.stock.codes=e,mbsRest.reload()})}function updateValue(e,t){return e&&e>0?e-t:0}var APP=new Vue({components:{localTable:localTable},el:"#app",data:{owner:localStorage.getItem("owner"),stock:{codes:[],stocks:[]}},computed:{mobile:detectMobile},methods:{stockGetChangeType:detectStockValueChangeType,stockGetChangeValue:getStockChangeValue,onStocksChanged:function(e){console.log("update",e),console.log(this.stock.stocks);for(var t=[],o=this.stock.stocks,a=0;a<o.length;a++)t.push(o[a].id);this.stock.codes=t,console.log(this.stock.codes),fb.write(this.owner,"default",this.stock.codes)},onPasswordKeyUp:function(e){if(13===event.keyCode){var t=e.target.value;e.target.value="",console.log(t),fb.getOwner(t,function(e){console.log(e),e&&(localStorage.setItem("owner",e),APP.owner=e,listenToFirebase(e))})}},onStockInputKeyUp:function(e){if(13===event.keyCode){var t=e.target.value;e.target.value="";for(var o=t.split(/\s*,\s*/),a=APP.stock.codes,s,l=0;l<o.length;l++)s=o[l].trim().toUpperCase(),!_ListStockInfo.hasOwnProperty(s)||s in a?console.log("Invalid:",s):a.push(s);fb.write(APP.owner,"default",a)}},doLogout:function(){this.owner=null,this.stock.codes=[],this.stock.stocks=[],localStorage.removeItem("owner"),console.log(this.owner)}}}),fb=new Firebase;fb.init(),listenToFirebase(APP.owner),setInterval(function(){for(var e=APP.stock.stocks,t,o,a,s=0;s<e.length;s++)for(o=e[s],t=o.live,t.match.priceUpdate=updateValue(t.match.priceUpdate,.5),t.match.volumeUpdate=updateValue(t.match.volumeUpdate,.5),a=0;3>a;a++)t.buy[a].priceUpdate=updateValue(t.buy[a].priceUpdate,.5),t.buy[a].volumeUpdate=updateValue(t.buy[a].volumeUpdate,.5),t.sell[a].priceUpdate=updateValue(t.sell[a].priceUpdate,.5),t.sell[a].volumeUpdate=updateValue(t.sell[a].volumeUpdate,.5)},200);