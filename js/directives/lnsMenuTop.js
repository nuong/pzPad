'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsMenuTop',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/menu-top.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})