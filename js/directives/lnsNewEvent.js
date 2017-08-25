'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsNewEvent',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/new-event.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})