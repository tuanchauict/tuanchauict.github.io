var httpConfig={headers:{"Access-Control-Allow-Headers":"origin, content-type, accept, x-requested-with"}},checkVersion=function(e,t,a){var o=function(t,a){switch(t){case DataLoaderState.index:e.filter.indexMaps=a,e.loader.text="Loading content...";break;case DataLoaderState.content:e.loader.text="Extracting data...";break;case DataLoaderState.finish:getWordDefinition(1,function(){console.log("con heo"),e.$apply(function(){e.loader.active=!1})})}};t.get("/collocation/data/version.json",httpConfig).success(function(e,a,n,r){dbVersion=e.dbVersion,e.version>version,!checkDataAAvailable()||e.dbVersion>readDBVersion()?reloadHttpData(t,o):loadIndexFromStorage(o)}).error(function(e,t,a,n){checkDataAAvailable()&&loadIndexFromStorage(o)})};