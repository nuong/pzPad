'use strict';
define(['js/common/service'],function(mod){
    mod.factory('newEventService',['$http',"$q", function($http, $q){
        return new NewEventService($http, $q);
    }]);

    function NewEventService($http,$q) {
        this.$http = $http;
        this.event = {};
        this.listRef = [];
        this.$q= $q;
    }
    NewEventService.prototype.newEvent = function(){
        var self = this;
        self.event = {
            ID : null,
            Title : Null,
            Description : Null,
            Address : Null,
            Referercer: Null,
            StartDate: null,
            EndDate: null,
            Images : Null,
            Banner : Null,
            Status : 0,
            Amount : null,
            FeeJoin : null,
            NUMBER : null
        }
        this.listRef = [];
    }
    NewEventService.prototype.addNewEvent = function() {
        var self =this;
        var url = "api/Events";
        self.event.Referercer = self.listRef;
        if(self.event.m_ID != null) {
            url="api/Events/fff";
        }

        var result = self.$http.post(url, self.event).then(function(response) {
            return response.data;
        });
        return result;
    }
})