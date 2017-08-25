'use strict';
define(['js/common/service'], function (mod) {
    mod.factory('documentEditorService', [ '$http', '$q',
        function ($http, $q) {
            return new DocumentEditorService($http, $q);
        } ]);

    function DocumentEditorService($http, $q) {
        var self = this;
        self.$q = $q;
    }
   
    DocumentEditorService.prototype.startNewSession = function(service, user) {
        var self = this;
        return this.session =  service.login({
                    id : user.id + "@email.com",
                    password : "54fb0f4f51c6fce76a89d275"
                }).then(function(u) {
                    return u;
                }).catch( e => {
                    return service.createUser({
                            id: user.id + "@email.com",
                            password: "54fb0f4f51c6fce76a89d275",
                            email: user.id + "@email.com"
                        }).then(function(u) {
                            //u.setName(user.id);
                            return u;
                        })
                });
           
    }
    DocumentEditorService.prototype.getSession = function(service, user) {
        var self = this;
        if(!self.session) {
            return self.startNewSession(service, user);
        }
        return self.session;
    }
    DocumentEditorService.prototype.openDocument = function(docId) {
        var self = this;
        return self.getSession().then(function(profile) {
                return self.service
        }).then(function(service) {
                return service.open({id : docId});
            });
    }


    

});
