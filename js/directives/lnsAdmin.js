'use strict';
define(['js/common/directive'], function (app) {
    app.directive('lnsAdmin', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            templateUrl: 'views/admin/admin.html',
            link: function ($scope, elem, attr) {
                $scope.oneAtATime = true;
                $scope.status = {
                    isFirstOpen: true,
                    isFirstDisabled: false
                };
                $scope.curBox = "";
                $scope.changeBox = function(targetBox) {
                    $scope.curBox = targetBox;
                }
            }
        }
    }]);
})