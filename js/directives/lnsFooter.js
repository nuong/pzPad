'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsFooter',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/footer-info.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})