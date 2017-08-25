'use strict';
define(['js/common/directive',
'js/directives/pzEditorToolbar',
'js/services/documentEditorService'
], function(app) {
	app.directive('pzDocumentEditor',  ['$window', "$rootScope",'documentEditorService',
    function ($window, $rootScope, documentEditorService) {
        return {
            restrict: 'AE',
            templateUrl: 'views/document-editor.html',
            link: function(scope, element, attrs) {
                var editor, object, text;
                scope.docUI = {docTitle : ''};
                scope.docParticipants = [];
                var uId = window.prompt("Please, set a name:","");
                if(!uId || uId.length ==0) {
                    return;
                }
                var user = {
                    id : uId
                }
                scope.selectionStyles = {};
                swellrt.onReady(function(service){
                    window.service = service;
                    service.addConnectionHandler(connectionHandler);
                    documentEditorService.getSession(service, user).then(function(profile) {
                         return service.open({id : 'pz-pad-2' });
                    }).then(function(r) {
                        scope.profilesManager = service.profilesManager;
                        setProfilesHandler();
                        object = r.controller;
                        var parts = [];
                        object.getParticipants().forEach(function(element) {
                            parts.push(service.profilesManager.getProfile(swellrt.Participant.of(element)));
                        }, this);
                        scope.docParticipants = parts;
                        // Create editor instance, reusable
                        editor = swellrt.Editor.createWithId("pzCanvasContainer", service);
                        configEditor();
                        editor.setSelectionHandler(selectionHandler);
                    }).catch(function(exception) {
                        console.log('Error' + exception);
                    })
                   
                });
                var syncStyle = function(editor, range) {
                    scope.selectionStyles = getSelectionStyles(editor, range);
                    scope.$applyAsync();
                    scope.$broadcast('syncStyle');
                }
                scope.newParticipant = {name : ''};
                scope.addParticipant = function() {
                    object.addParticipant(scope.newParticipant.name + '@email.com')
                    scope.newParticipant.name = '';
                }
                function configEditor(name) {
                    editor.clean();
                    if (!object.has("document")) {
                        text = swellrt.Text.create("Write here your document. This text is not stored yet!");
                        object.put('document', text);
                    } else {
                        text = object.get("document");
                    }
                   
                    scope.docUI.docTitle = object.get('title') || 'Untitled Document';
                    editor.set(text);
                    editor.edit(true);
                    scope.$applyAsync();
                }
                function selectionHandler(range, editor, selection) {
                    if (selection && selection.range) {
                        // update toolbar state
                        syncStyle(editor, selection.range);
                    }
                }
                 function connectionHandler(s, e) {
                    console.log(s);
                }
                function getSelectionStyles(editor, range) {
                    return editor.getAnnotation(['paragraph/','style/', 'link'], range);
                }
             
                function setProfilesHandler() {
                    var profilesHandler = {
                        onLoaded: (profileSession) =>{
                            // if (profileSession.profile.isCurrentSessionProfile()) {
                            //     return;
                            // }
                            var participantSession = {
                                session: profileSession,
                                profile: profileSession.profile
                            }
                           
                        },

                        onUpdated: function (profile) {
                           // console.log(profile);
                        },

                        onOffline: function (profileSession){
                            console.log('--go offline---');
                            console.log(profileSession);
                        },

                        onOnline: function (profileSession) {
                           console.log('--online---');
                           console.log(profileSession);
                        }

                    };
                    scope.profilesManager.addStatusHandler(profilesHandler);
                    scope.profilesManager.enableStatusEvents(true);
                }
               
                scope.updateDocTitle = function() {
                    object.put('title', scope.docUI.docTitle);
                }
                scope.editStyle = function(newStyle) {
                    var selection = editor.getSelection();
                    if (!selection || !selection.range)
                    return;

                    var range = selection.range;
                    // try to span operation range to the annotation
                    if (range.isCollapsed()) {
                    if (scope.selectionStyles[newStyle.name]) {
                        range = scope.selectionStyles[newStyle.name].range;
                    }
                    }

                    if (newStyle.value) {
                        editor.setAnnotation(newStyle.name, newStyle.value, range);
                    } else {
                        editor.clearAnnotation(newStyle.name, range);
                    }
                    // refresh annotations
                    syncStyle(editor, range);
                }
                scope.addLink = function(link) {
                    var selection = editor.getSelection();
                    if (!selection || !selection.range)
                    return;

                    var range = selection.range;
                    editor.setAnnotation('link',link.url, range);
                }
                
            
            }
        };

    }])
});