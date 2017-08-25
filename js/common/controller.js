'use strict';
define(['angular'
], function(angular){

    var lnsAppControllers = angular.module('lnsApp.controllers',
        []);
    lnsAppControllers.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        lnsAppControllers.controller = $controllerProvider.register;
        lnsAppControllers.directive  = $compileProvider.directive;
        lnsAppControllers.filter     = $filterProvider.register;
        lnsAppControllers.factory    = $provide.factory;
        lnsAppControllers.service    = $provide.service;

    });
    lnsAppControllers.controller('menuTopCtrl',['$scope', '$http',function($scope, $http) {
        $scope.listEvents = [1,2,3,4,5,6,7,8,9,10];
    }]);
    return lnsAppControllers;
});