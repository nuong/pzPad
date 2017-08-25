'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
    'js/common/controller',
    'js/directives/lnsAbout'
], function (app) {
    app.controller('AboutPage', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
        $scope.rightContent = [];
        $scope.mainContent = [
            { 'name': '<div lns-about></div>' }
        ];

    }]);
})