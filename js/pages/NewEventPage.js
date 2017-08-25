'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/controllers/topEventCtrl',
    'js/controllers/newEventCtrl',
    'js/directives/lnsNewEvent',
    'js/directives/lnsBlockRight'
], function(app){
    app.controller('NewEventPage',['$scope', '$http','$sce',function($scope, $http, $sce) {

        $scope.mainContent = [
            {'name': '<div lns-new-event></div>'}
        ];
        $scope.rightContent = [
            {'name' : '<div lns-block-right> </div>'}
        ];
    }]);
})