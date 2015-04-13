/**
 * Created by tuanchauict on 4/8/15.
 */

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if (!window.indexedDB) {
	window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

var DataLoaderState = {
	index: 1,
	content: 2,
	finish: 10
};

var request = window.indexedDB.open("CollocationDB", dbVersion);

request.onerror = function(event){
	console.log(event);
	alert("Database error: " + event.target.errorCode);
};

var db;

request.onsuccess = function(event){
	//console.log(event);
	db = event.target.result;

};

request.onupgradeneeded = function(event) {
	db = event.target.result;
	console.log("on upgrade database");

	// Create an objectStore for this database
	var objectStore = db.createObjectStore("words", { keyPath: "id" });
	//objectStore.createIndex("word", "word", {unique: true})
	objectStore.createIndex("id", "id", {unique: true});
	console.log(objectStore);

};

var reloadHttpData = function ($http, callback) {
	$http.get('/collocation/data/index.json')
		.success(function (data, status, headers, config) {
			var indexMaps = createMapsFromIndex(data);

			saveIndexes(indexMaps);

			callback(DataLoaderState.index, indexMaps);

			$http.get('/collocation/data/content.json')
				.success(function (data, status, headers, config) {
					callback(DataLoaderState.content);
					var wordsObjectStorage = getWordsObjectStorage("readwrite");
					console.log(wordsObjectStorage);
					wordsObjectStorage.oncomplete = function(event){
						console.log("transaction push data complete");
					};
					console.log(data);
					for(var i = 0; i < data.length; i++){
						wordsObjectStorage.add(data[i]);
					}
					
					callback(DataLoaderState.finish);

					localStorage.setItem("dbVersion", dbVersion);
				})
				.error(function (data, status, headers, config) {
				});
		})
		.error(function (data, status, headers, config) {
			console.log(data);
			callback("data")
		});


};

var saveIndexes = function(indexMaps){
	localStorage.setItem("indexMaps", JSON.stringify(indexMaps));
};

var createMapsFromIndex = function(indexes){
	var map1 = {};
	var map2 = {};
	var map3 = {};
	for(var i = 0, l = indexes.length; i < l; i++){
		var w = indexes[i];
		var k1 = w.key.substr(0, 1);
		var k2 = w.key.substr(0, 2);
		var k3 = w.key.substr(0, 3);
		if(k1 in map1){
			map1[k1].push(i);
		}
		else{
			map1[k1] = [i];
		}

		if(k2.length == 2 && k2 in map2){
			map2[k2].push(i);
		}
		else{
			map2[k2] = [i]
		}

		if(k3.length == 3 && k3 in map3){
			map3[k3].push(i);
		}
		else{
			map3[k3] = [i]
		}
	}
	return {
		indexes: indexes,
		map1: map1,
		map2: map2,
		map3: map3
	}
};

var getWordsObjectStorage = function(type){
	if(db){
		return db.transaction("words", type).objectStore("words");
	}
	return null;
};

var loadIndexFromStorage = function (callback) {
	var indexMapsString = localStorage.getItem("indexMaps");
	if(indexMapsString){
		var indexMaps = JSON.parse(indexMapsString);
		callback(DataLoaderState.index, indexMaps);
	}
};

var getWordDefinition = function (wordId, callback) {
	//TODO load word definition from storage
	var objectStorage = getWordsObjectStorage();
	// console.log(objectStorage);
	var request = objectStorage.get(wordId);
	request.onerror = function(event){
		// console.error(event);
	};
	request.onsuccess = function(event){
		// console.log("request word: ", event);
		if(callback){
			callback(event.target.result);
		}
	}
};

var checkDataAAvailable = function(){
	if(localStorage.getItem("dbVersion")){
		return true;
	}
	else{
		return false;
	}
};

var readDBVersion = function(){
	var version = localStorage.getItem("dbVersion");
	if(version){
		return parseInt(version);
	}
	else{
		return 0;
	}
};