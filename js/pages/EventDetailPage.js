'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/directives/lnsEventDetail',
    'js/directives/lnsBlockRight',
    'js/controllers/eventDetailCtrl'
], function(app){
    app.controller('EventDetailPage',['$scope', '$http','$sce',function($scope, $http, $sce) {

        $scope.mainContent = [
            {'name': '<div lns-event-detail></div>'}
        ];
        $scope.rightContent = [
            {'name' : '<div lns-block-right> </div>'}
        ];
    }]);
})