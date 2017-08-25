'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsTopEvent',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/top-event.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})