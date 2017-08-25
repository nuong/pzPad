'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/directives/lnsAdmin',
    'js/directives/lnsAddNewEvent',
    'js/directives/lnsUsersAdmin',
    'js/directives/lnsListEventsAdmin'
], function (app) {
    app.controller('AdminPage', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
        $scope.rightContent = [];
        $scope.mainContent = [
            { 'name': '<div lns-admin></div>' }
        ];

    }]);
})