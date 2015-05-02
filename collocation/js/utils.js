/**
 * Created by tuanchauict on 4/7/15.
 */

var httpConfig = {
	headers: {
		"Access-Control-Allow-Headers":"origin, content-type, accept, x-requested-with"
	}
};

var checkVersion = function($scope, $http, $timeout){
	var loadDataCallback = function(loadingState, data){
		switch (loadingState){
			case DataLoaderState.index:
				$scope.filter.indexMaps = data;
				$scope.loader.text = "Loading content...";

				break;
			case DataLoaderState.content:
				$scope.loader.text = "Extracting data...";
				break;
			case DataLoaderState.finish:
				getWordDefinition(1, function(){
					$scope.$apply(function(){
						$scope.loader.active = false;
					});
				});
				break;

		}
	};

	$http.jsonp("https://simon-ielts.herokuapp.com/data/collocation/version?callback=JSON_CALLBACK", httpConfig)
	.success(function(data, status, headers, config){
		// console.log(data);
		dbVersion = data.dbVersion;
		if(data.version > version){
			//TODO notify refresh
		}
		if(!checkDataAAvailable() || data.dbVersion > readDBVersion()){
			reloadHttpData($http, loadDataCallback);
		}
		else {
			loadIndexFromStorage(loadDataCallback);
		}
	}).error(function(data, status, headers, config){
		if(checkDataAAvailable()) {
			loadIndexFromStorage(loadDataCallback);
		}
	});
};

