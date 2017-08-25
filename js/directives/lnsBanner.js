'use strict';
define(['js/common/directive'], function(app) {
    app.directive('lnsBanner',['$timeout', function($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/partials/banner-top.html',
            link : function($scope, elem, attr) {

            }
        }
    }]);
})