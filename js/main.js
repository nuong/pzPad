require.config({
    baseUrl: ".",

    paths: {
        // Aliases and paths of modules
        'angular': 'lib/angular/angular',
        ngRoute:"lib/angular/angular-route",
        'jquery' : 'lib/jquery/jquery-2.1.0.min',
        'oc.lazyLoad' : 'lib/ocLazyLoad/ocLazyLoad.min',
        ngTouch:"lib/angular/angular-touch.min",
        ngAnimate:"lib/angular/angular-animate.min",
        bootstrap: "lib/bootstrap/js/bootstrap.min",
        summernote: 'lib/angular-summernote/summernote',
        "jquery.ui": "lib/jquery/jquery-ui.min",
        "jquery.ui.widget": "lib/blueimp/fileupload/jquery.ui.widget",
        "angular.summernote": 'lib/angular-summernote/angular-summernote',
        "jquery.iframe.transport": "lib/blueimp/fileupload/jquery.iframe-transport",
        "jquery.fileupload": "lib/blueimp/fileupload/jquery.fileupload",
        'angular-file-upload':"lib/angular-fileupload/angular-file-upload.min",
        "ui.bootstrap":"lib/bootstrap/js/ui-bootstrap-tpls-0.13.0.min",
        'lnsApp.directive' : 'js/common/directive',
        'lnsApp.service' : 'js/common/service',
        'lnsApp.controllers' : 'js/common/controller',
    },

    shim: {
        //Modules and their dependent modules
        angular: {
            exports: "angular"
        },
        ngRoute:["angular"],
        'jquery':'jquery',
        'oc.lazyLoad' : ['angular', 'jquery'],
        bootstrap : ['jquery'],
        ngTouch:["angular"],
        ngAnimate: ["angular"],
        'angular-file-upload': ["angular"],
        "ui.bootstrap": ["angular", 'bootstrap', 'ngTouch', 'ngAnimate'],
        summernote: ['jquery', "angular", 'bootstrap'],
        "jquery.ui": ["jquery"],
        "jquery.ui.widget": ["jquery.ui"],
        "angular.summernote": ['ui.bootstrap', 'summernote'],
        "jquery.iframe.transport": ["jquery"],
        "jquery.fileupload": { exports: "$.fn.fileupload", deps: ["jquery.iframe.transport", "jquery.ui"] },
        'lnsApp.directive' : ['js/common/directive'],
        'lnsApp.service' : ['js/common/service'],
        'lnsApp.controllers' : ['angular','lnsApp.directive','lnsApp.service']
    }
});