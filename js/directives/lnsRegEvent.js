'use strict';
define(['js/common/directive'], function (app) {
    app.directive('lnsRegEvent', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/register-event.html',
            link: function ($scope, elem, attr) {
               

            }
        }
    }]);
})