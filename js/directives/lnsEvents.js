'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsEvents',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/events.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})