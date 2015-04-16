/**
 * Created by tuanchauict on 4/7/15.
 */
app.controller("CollocationController", ["$scope", "$http", "$timeout", function ($scope, $http, $timeout) {
	checkVersion($scope, $http, $timeout)

	$scope.version = {
		current: version
	};

	$scope.options = {
		firstOpen: true,

		isHideFirstInput: function(){
			console.log("hide =", !this.firstOpen || typeof $scope.filter.queryText == "string" && $scope.filter.queryText.length > 0);
			return !this.firstOpen || $scope.filter.queryText && $scope.filter.queryText.length > 0;
		},
		inputQueryFocus: 'inactive',
		onInputQueryFocus: function(focus){
			if(focus){
				this.inputQueryFocus = 'active';
			}
			else{
				this.inputQueryFocus = 'inactive';
			}
		}
	};

	$scope.loader = {
		active: !checkDataAAvailable(),
		text: "Loading indexes..."
	};


	$scope.filter = {
		queryText: '',
		
		indexMaps: {
			indexes: [],
			map1: {},
			map2: {},
			map3: {}
		},
		currentSuggestWord: [],
		currentSelectedIndex: 0,
		onKeyDown: function(event){
			// console.log(event.which);

			switch(event.which){
				case 13:
					event.preventDefault();
					if(this.currentSuggestWord.length > 0){
						if(this.currentSelectedIndex < 0){
							this.currentSelectedIndex = 0;
						}
						else if(this.currentSelectedIndex >= this.currentSuggestWord.length){
							this.currentSelectedIndex = this.currentSuggestWord.length - 1;
						}
						this.onItemClick(this.currentSuggestWord[this.currentSelectedIndex ]);
					}
					break;
				case 38:
					event.preventDefault();
					this.currentSelectedIndex -= 1;
					if(this.currentSelectedIndex < 0){
						this.currentSelectedIndex = 0;
					}
					break;
				case 40:
					event.preventDefault();
					this.currentSelectedIndex += 1;
					if(this.currentSelectedIndex >= this.currentSuggestWord.length){
						this.currentSelectedIndex = this.currentSuggestWord.length - 1;
					}
					break;
				default:
					this.currentSelectedIndex = 0;
			}
		},
		onKeyUp: function(event){
			window.location = '#' + this.queryText;
		},
		onItemClick: function(item){
			$scope.options.onInputQueryFocus(false);
			window.location = "#" + item.word;
			getWordDefinition(item.id, this.onGetWordDefinitionSuccess);
			// this.queryText = item.word;
		},
		onGetWordDefinitionSuccess: function(word){
			$scope.$apply(function () {
	            $scope.message = "Timeout called!";
	            $scope.words.currentWord = word;
	        });
		}
	};

	$scope.words = {
		currentWord: {
			id: -1,
			word: '',
			type: '',
			content: ''
		}
	};
	var hash = window.location.hash;
	if(hash){
		var text = hash.substr(1);
		var arr = text.split("?");
		text = arr[0];
		console.log(text);

		$scope.filter.queryText = decodeURIComponent(text);

	}
	console.log(window.location.hash);
}]);
