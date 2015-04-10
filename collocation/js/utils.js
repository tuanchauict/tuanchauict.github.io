/**
 * Created by tuanchauict on 4/7/15.
 */

var checkVersion = function($scope, $http){
	var loadDataCallback = function(loadingState, data){
		switch (loadingState){
			case DataLoaderState.index:
				$scope.filter.indexMaps = data;
				break;
			case DataLoaderState.content:
				break;
			case DataLoaderState.finish:
				break;

		}
	}
	$http.get("/collocation/data/version.json")
	.success(function(data, status, headers, config){
		console.log(data);
		dbVersion = data.dbVersion;
		if(data.version > version){
			//TODO notify refresh
		}
		if(!checkDataAAvailable() || data.dbVersion > readDBVersion()){
			reloadHttpData($http, loadDataCallback);
		}
		else {
			loadIndexFromStorage(loadDataCallback)
		}
	}).error(function(data, status, headers, config){

	});
};

