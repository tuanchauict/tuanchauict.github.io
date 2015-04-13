/**
 * Created by tuanchauict on 4/7/15.
 */

var checkVersion = function($scope, $http, $timeout){
	var loadDataCallback = function(loadingState, data){
		switch (loadingState){
			case DataLoaderState.index:
				$scope.filter.indexMaps = data;
				$scope.loader.text = "Loading content..."
				break;
			case DataLoaderState.content:
				$scope.loader.text = "Extracting data..."
				break;
			case DataLoaderState.finish:
				// $timeout(function(){
				// 	$scope.$apply(function(){
				// 		$scope.loader.active = false
				// 	});

				// }, 3000);
				getWordDefinition(1, function(){
					console.log("con heo");
					$scope.$apply(function(){
						$scope.loader.active = false
					});
				});
				break;

		}
	}
	$http.get("/collocation/data/version.json")
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
			loadIndexFromStorage(loadDataCallback)
		}
	}).error(function(data, status, headers, config){

	});
};

