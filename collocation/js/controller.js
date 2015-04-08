/**
 * Created by tuanchauict on 4/7/15.
 */
app.controller("CollocationController", ["$scope", "$http", function ($scope, $http) {
	checkVerson($scope, $http)

	$scope.verson = {
		current: version
	}

}]);
