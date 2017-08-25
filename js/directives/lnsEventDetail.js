'use strict';
define(['js/common/directive',
    'js/directives/lnsRegEvent'
], function (app) {
    app.directive('lnsEventDetail',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/event-detail.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})