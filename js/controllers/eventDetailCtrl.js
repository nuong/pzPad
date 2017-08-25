'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller'
], function (app) {
    app.controller('eventDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.eventId = $routeParams.eventId;
        $scope.processing= false;
        var url = "api/Events/" + $scope.eventId;
        $scope.event = undefined;
        loadEvent();
        function loadEvent() {
            $http.get(url).success(function (data) {
                var rs = JSON.parse(data);
                $scope.event = rs.Events[0];
                
            }).error(function (error) {
               
            })
        }
        $scope.decodeText = function (data) {
            return $sce.trustAsHtml(data);
        };
        
    }]);
})