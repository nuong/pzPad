'use strict';
define([
   //'js/pages/HomePage'
], function() {
    var entRoute = (function () {
        return{
            config:function(app){

                app.config(function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider,
                                     $provide, $httpProvider, $ocLazyLoadProvider) {
                    app.controller = $controllerProvider.register;
                    app.directive  = $compileProvider.directive;
                    app.filter     = $filterProvider.register;
                    app.factory    = $provide.factory;
                    app.service    = $provide.service;
                    $locationProvider.html5Mode(true);
                    $httpProvider.useApplyAsync(true);
                    $ocLazyLoadProvider.config({
                        jsLoader: requirejs,
                       // debug:true
                    });
                    $routeProvider.when('/', {templateUrl: 'views/pz-editor.html',
                        controller : "HomePage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                   'js/pages/HomePage'
                                );
                            }]
                        }
                        });
                    $routeProvider.when('/events', {templateUrl: 'views/full-page.html',
                        controller : "EventsPage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                    'js/pages/EventsPage'
                                );
                            }]
                        }
                    });
                    $routeProvider.when('/newevents', {templateUrl: 'views/full-page.html',
                        controller : "NewEventPage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                    'js/pages/NewEventPage'
                                );
                            }]
                        }
                    });
                    $routeProvider.when('/eventdetail/:eventId', {templateUrl: 'views/full-page.html',
                        controller : "EventDetailPage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                    'js/pages/EventDetailPage'
                                );
                            }]
                        }
                    });
                    $routeProvider.when('/admin', {
                        templateUrl: 'views/full-page.html',
                        controller: "AdminPage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                    'js/pages/AdminPage'
                                );
                            }]
                        }
                    });
                    $routeProvider.when('/contact', {
                        templateUrl: 'views/full-page.html',
                        controller: "ContactPage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                    'js/pages/ContactPage'
                                );
                            }]
                        }
                    });
                    $routeProvider.when('/about', {
                        templateUrl: 'views/full-page.html',
                        controller: "AboutPage",
                        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                                // you can lazy load files for an existing module
                                return $ocLazyLoad.load(
                                    'js/pages/AboutPage'
                                );
                            }]
                        }
                    });
                    $routeProvider.otherwise({redirectTo: '/'});

                });

                return app;
            }
        }
    })();

    return  entRoute;
});

