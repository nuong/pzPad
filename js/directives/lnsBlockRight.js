'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsBlockRight',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/block-right.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})