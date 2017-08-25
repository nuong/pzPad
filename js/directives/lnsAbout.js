'use strict';
define(['js/common/directive'], function (app) {
    app.directive('lnsAbout', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/about.html',
            link: function ($scope, elem, attr) {

            }
        }
    }]);
})