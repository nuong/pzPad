'use strict';
define(['js/common/directive'], function (app) {
    app.directive('lnsUsersAdmin', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/admin/user-admin.html',
            link: function ($scope, elem, attr) {


            }
        }
    }]);
})