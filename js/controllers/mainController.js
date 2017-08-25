'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject

], function(app){
    app.controller('mainController',['$scope', '$http',function($scope, $http) {
        $scope.title = "Love&Shine";
    }]);
})