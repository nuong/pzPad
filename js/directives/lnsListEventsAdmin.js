'use strict';
define(['js/common/directive'], function (app) {
    app.directive('lnsListEventsAdmin', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/admin/events-admin.html',
            link: function ($scope, elem, attr) {


            }
        }
    }]);
})