'use strict';
define(['angular'
], function(angular){

    var lnsAppDirective = angular.module('lnsApp.directive',
        []);
    lnsAppDirective.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        lnsAppDirective.controller = $controllerProvider.register;
        lnsAppDirective.directive  = $compileProvider.directive;
        lnsAppDirective.filter     = $filterProvider.register;
        lnsAppDirective.factory    = $provide.factory;
        lnsAppDirective.service    = $provide.service;

    });
    lnsAppDirective.directive('bindCompiledHtml', bindCompiledHtml);
    function bindCompiledHtml($compile) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs) {
                var html = $scope.$eval($attrs.bindCompiledHtml),
                    toCompile = angular.element(html);
                $element.append($compile(toCompile)($scope));
            }
        };
    }
    lnsAppDirective.directive('lnsUpload', ['$http', 'FileUploader', function ($http, FileUploader) {
        return {
            scope: {
                lnsAttachment: '=lnsAttachment',
            },
            templateUrl: 'views/partials/upload.html',
            replace: true,
            controller: function($scope) {
                var scope = $scope;
                scope.dataUrl = "api/UpLoadFile";
                var optUpload = {
                    url: scope.dataUrl,
                    isHTML5: true,
                    autoUpload: true,
                    method: 'POST',
                    onAfterAddingFile: function (item) {

                    },
                    onCompleteItem: function (item, response, status, headers) {
                        if (response != null) {
                            scope.lnsAttachment = JSON.parse(response).Images[0];
                        }
                    }
                }
                var imageFilter = {
                    name: 'imageFilter',
                    fn: function (item, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|jpg|png|jpeg|bmp|gif|JPG|PNG|JPEG|BMP|GIF'.indexOf(type) !== -1;
                    }
                }
                scope.uploader = new FileUploader(optUpload);
                //scope.uploader.filters.push(imageFilter);
                scope.uploader.onCompleteAll = function () {
                    scope.uploader.clearQueue();
                };
                scope.removeAtt = function () {
                    scope.lnsAttachment = {};
                }
            },
            link: function (scope, element, attrs) {
               
            }
        };
    }]);
    return lnsAppDirective;
});