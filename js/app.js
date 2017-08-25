'use strict';
define(['angular',
    'ngRoute',
    'oc.lazyLoad',
    'jquery',
    'bootstrap',
    'ngTouch',
    'ngAnimate',
    'ui.bootstrap',
    'summernote',
    'angular.summernote',
    'jquery.iframe.transport',
	'jquery.fileupload',
    'angular-file-upload',
    'js/common/directive',
    'js/common/service',
    'js/common/controller',
    // 'js/directives/lnsBanner',
    // 'js/directives/lnsMenuTop',
    // 'js/directives/lnsFooter'
], function(angular){

    var app = angular.module('lnsApp',
        ['ngRoute', 'ngTouch', 'oc.lazyLoad', 'ui.bootstrap', 'summernote', 'angularFileUpload', 'ngAnimate',
            'lnsApp.directive','lnsApp.service','lnsApp.controllers'
        ]);

    return app;
});