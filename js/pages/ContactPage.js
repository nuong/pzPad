'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/directives/lnsContact',
], function (app) {
    app.controller('ContactPage', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
        $scope.rightContent = [];
        $scope.mainContent = [
            { 'name': '<div lns-contact></div>' }
        ];

    }]);
})