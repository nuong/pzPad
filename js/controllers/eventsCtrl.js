'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller'
], function(app){
    app.controller('eventsCtrl',['$scope', '$http',function($scope, $http) {
        $scope.listEvents = [];
        $scope.limit = 20;
        $scope.offset = 0;
        $scope.url = "/api/Paging/Events/1/10";
        $scope.totalItems = 0;
        loadEvents();
        function loadEvents() {
            $http.get($scope.url).success(function (data) {
                var rs = JSON.parse(data);
                $scope.totalItems = parseInt(rs.ItemCount);
                $scope.listEvents = rs.Events;
            })
        };
    }]);
})