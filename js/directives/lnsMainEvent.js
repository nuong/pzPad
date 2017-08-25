'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsMainEvent',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/main-event.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})