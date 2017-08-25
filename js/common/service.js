
define(['angular'
], function(angular){

    var lnsAppService = angular.module('lnsApp.service',
        []);
    lnsAppService.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        lnsAppService.controller = $controllerProvider.register;
        lnsAppService.directive  = $compileProvider.directive;
        lnsAppService.filter     = $filterProvider.register;
        lnsAppService.factory    = $provide.factory;
        lnsAppService.service    = $provide.service;

    });
    return lnsAppService;
});