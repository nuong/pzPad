'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/services/newEventService'
], function(app){
    app.controller('addNewEventCtrl',['$scope', '$http','newEventService',function($scope, $http, newEventService) {
        $scope.service = newEventService;
        $scope.newRef = {};
        $scope.processing = false;
        $scope.eventBanner = {};
        $scope.options = {
            height: 200
        };
        $scope.showAddRef = false;
        $scope.clickAddRef = function () {
            $scope.showAddRef = true;
        };
        $scope.closeAddRef = function () {
            $scope.showAddRef = false;
            $scope.newRef = {};
        }
        $scope.addRef = function () {
            $scope.service.listRef.push($scope.newRef);
            $scope.newRef = {};
        }

        $scope.submitAddNew = function () {
            $scope.service.event.Banner = $scope.eventBanner.URL;
            if($scope.processing) return;
            $scope.processing = true;
            $scope.service.addNewEvent().then(function(data) {
                $scope.processing = false;
            }, function (error) {
                console.log(error);
                $scope.processing = false;
            });
        }

        $scope.changeStatus = function (status) {
            $scope.service.event.Status = status;
        }

        
    }]);
})