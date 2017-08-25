'use strict';
define([
    //Dependencies (by requirejs) ex: paths service to inject
'js/common/controller'
], function(app){
    app.controller('topEventCtrl',['$scope', '$http',function($scope, $http) {
        $scope.title = "Top Event";
        $scope.myInterval = 3000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }
    }]);
})