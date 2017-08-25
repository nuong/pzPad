'use strict';
define(['angular',
    'js/app',
    'js/appRoute',
    '../domReady'
],function(angular,app, appRoute, domReady) {

    domReady(function () {
        app = appRoute.config(app);
        angular.bootstrap(document, ['lnsApp' ]);
    });

    return app;
});