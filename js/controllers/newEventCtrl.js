'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller'
], function(app){
    app.controller('newEventCtrl',['$scope', '$http',function($scope, $http) {
        $scope.listEvents = [1,2,3,4,5,6,7,8,9,10];
    }]);
})