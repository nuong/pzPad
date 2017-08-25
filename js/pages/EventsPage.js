'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/controllers/topEventCtrl',
    'js/controllers/eventsCtrl',
    'js/directives/lnsEvents',
    'js/directives/lnsBlockRight'
], function(app){
    app.controller('EventsPage',['$scope', '$http','$sce',function($scope, $http, $sce) {

        $scope.mainContent = [
            {'name': '<div lns-events></div>'}
        ];
        $scope.rightContent = [
            {'name' : '<div lns-block-right> </div>'}
        ];
    }]);
})