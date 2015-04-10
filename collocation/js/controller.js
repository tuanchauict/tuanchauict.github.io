/**
 * Created by tuanchauict on 4/7/15.
 */
app.controller("CollocationController", ["$scope", "$http", function ($scope, $http) {
	checkVersion($scope, $http)

	$scope.verson = {
		current: version
	}



	$scope.filter = {
		queryText: '',
		indexMaps: {
			indexes: [],
			map1: {},
			map2: {},
			map3: {}
		},
		onKeyUp: function(event){
			//console.log(event);
		},
		onItemClick: function(item){
			console.log(item);
		}
	}

	$scope.words = {

	}

}]);
