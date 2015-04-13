/**
 * Created by tuanchauict on 4/7/15.
 */

var version = 2;
var dbVersion = 3;


var app = angular.module("CollocationApp", []);

app.config(['$httpProvider', function ($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);

app.filter('queryInput', function() {
	return function(indexMaps, queryText) {
		//console.log(queryText);
		var result = [];
		var usedMap = [];
		var arr = [];
		queryText = queryText.toLowerCase();
		if(queryText.length == 1){
			usedMap = indexMaps.map1;
			arr = usedMap[queryText];
		}
		else if(queryText.length == 2){
			usedMap = indexMaps.map2;
			arr = usedMap[queryText];
		}
		else if(queryText.length >= 3){
			usedMap = indexMaps.map3;
			arr = usedMap[queryText.substr(0, 3)];
		}
		else{
			//TODO show recent
			//bellow show the first
			usedMap = indexMaps.map1;
			arr = usedMap['a'];
		}

		if(arr){
			var length = arr.length;
			var indexes = indexMaps.indexes;

			for(var i = 0; i < length; i++){
				var index = arr[i];
				var item = indexes[index];
				if(item.key.indexOf(queryText) == 0){
					result.push(item);
					if(result.length > 50){
						break;
					}
				}
			}
		}

		//console.log(result);
		return result;
	};
});


app.filter('toTrusted', ['$sce', function ($sce) {
	return function (text) {
		return $sce.trustAsHtml(text);
	}
}]);
