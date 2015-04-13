window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,window.indexedDB||window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");var DataLoaderState={index:1,content:2,finish:10},request=window.indexedDB.open("CollocationDB",dbVersion);request.onerror=function(e){console.log(e),alert("Database error: "+e.target.errorCode)};var db;request.onsuccess=function(e){db=e.target.result},request.onupgradeneeded=function(e){db=e.target.result,console.log("on upgrade database");var t=db.createObjectStore("words",{keyPath:"id"});t.createIndex("id","id",{unique:!0}),console.log(t)};var reloadHttpData=function(e,t){e.get("/collocation/data/index.json").success(function(o,n,a,r){console.log("data",o);var d=createMapsFromIndex(o);saveIndexes(d),t(DataLoaderState.index,d),e.get("/collocation/data/content.json").success(function(e,o,n,a){t(DataLoaderState.content);var r=getWordsObjectStorage("readwrite");console.log(r),r.oncomplete=function(e){console.log("transaction push data complete")},console.log(e);for(var d=0;d<e.length;d++)r.add(e[d]);t(DataLoaderState.finish),localStorage.setItem("dbVersion",dbVersion)}).error(function(e,t,o,n){})}).error(function(e,o,n,a){console.log(e),t("data")})},saveIndexes=function(e){localStorage.setItem("indexMaps",JSON.stringify(e))},createMapsFromIndex=function(e){for(var t={},o={},n={},a=0,r=e.length;r>a;a++){var d=e[a],s=d.key.substr(0,1),i=d.key.substr(0,2),c=d.key.substr(0,3);s in t?t[s].push(a):t[s]=[a],2==i.length&&i in o?o[i].push(a):o[i]=[a],3==c.length&&c in n?n[c].push(a):n[c]=[a]}return{indexes:e,map1:t,map2:o,map3:n}},getWordsObjectStorage=function(e){return db?db.transaction("words",e).objectStore("words"):null},loadIndexFromStorage=function(e){var t=localStorage.getItem("indexMaps");if(t){var o=JSON.parse(t);e(DataLoaderState.index,o)}},getWordDefinition=function(e,t){var o=getWordsObjectStorage(),n=o.get(e);n.onerror=function(e){},n.onsuccess=function(e){t&&t(e.target.result)}},checkDataAAvailable=function(){return!1;return localStorage.getItem("dbVersion")?!0:!1},readDBVersion=function(){var e=localStorage.getItem("dbVersion");return e?parseInt(e):0};