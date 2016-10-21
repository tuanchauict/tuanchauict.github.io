/**
 * Created by tuanchauict on 10/20/16.
 */

var app = angular.module('MergeApp', []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.input = {
        oldString: '',
        newString: '',
        result: ''
    };

    var data = {
        oldMap: {
            key: [],
            map: {}
        },
        newMap: {
            key: [],
            map: {}
        },
        mergeArray: [],
        sharedKey: {}
    };

    $scope.data = data;

    $scope.onOldChanged = function () {
        data.oldMap = stringToMap($scope.input.oldString);
        data.sharedKey = generateSharedKeys(data.oldMap, data.newMap);
        data.mergeArray = merge(data);
        $scope.input.result = toXml(data.mergeArray);
    };

    $scope.onNewChanged = function () {
        data.newMap = stringToMap($scope.input.newString);
        data.sharedKey = generateSharedKeys(data.oldMap, data.newMap);
        data.mergeArray = merge(data);
        $scope.input.result = toXml(data.mergeArray);
    };

    $scope.selectValue = function (row, value) {
        if (row.value == value) {
            row.value = undefined;
        } else
            row.value = value;
        data.mergeArray = merge(data);
        $scope.input.result = toXml(data.mergeArray);
    };

    $scope.saveFile = function () {
        saveFile($scope.result);
    };

    $scope.extractKey = function (string) {
        return parseKey(string);
    };

    $scope.extractValue = function (string) {
        return parseValue(string);
    };

    $scope.countUnSelectedShared = function(){
        if(data.sharedKey.array == undefined)
            return '';
        var count = 0;
        var arr = data.sharedKey.array;
        for(var i = 0; i < arr.length; i++){
            if(arr[i].value != undefined)
                count++;
        }
        return count;
    }
}]);
