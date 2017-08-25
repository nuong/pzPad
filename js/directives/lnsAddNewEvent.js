'use strict';
define(['js/common/directive',
    'js/controllers/addNewEventCtrl'
], function (app) {
    app.directive('lnsAddNewEvent', ['$timeout', function ($timeout) {
        return {
            scope: {
            },
            restrict: 'A',
            controller:function($scope){
                $scope.newEvent = {
                    'description' : "description"
                };

            },
            templateUrl: 'views/admin/add-new-event.html',
            link: function ($scope, elem, attr) {
                $scope.today = function() {
                    $scope.dt = new Date();
                };
                $scope.today();

                $scope.clear = function () {
                    $scope.dt = null;
                };
                $scope.dateOptions = {
                    formatYear: 'yy',
                    startingDay: 1
                };
                $scope.openStartDate = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.openedStartDate = true;
                }; $scope.openEndDate = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.openedEndDate = true;
                };

                $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                $scope.format = $scope.formats[0];
            }
        }
    }]);
})