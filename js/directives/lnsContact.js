'use strict';
define(['js/common/directive'], function (app) {
    app.directive('lnsContact', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/contact.html',
            link: function ($scope, elem, attr) {

            }
        }
    }]);
})