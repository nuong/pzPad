'use strict';
define(['js/common/directive',
], function(app) {
	app.directive('pzEditorToolbar',  ['$window', "$rootScope",
    function ($window, $rootScope) {
        return {
            restrict: 'AE',
            templateUrl: 'views/editor-toolbar.html',
            scope :{
                styles :'=',
                onSelectStype : "&",
                onAddLink : "&"
            },
            link: function(scope, element, attrs) {
                var annotationsBar = [
                   "backgroundColor", "color", "fontFamily", "fontSize", "fontStyle",
                   "fontWeight", "textDecoration", "verticalAlign", "header", "list", "textAlign","indent"
                ]
                scope.fontSizes = [10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32, 34, 36];

                var defaultStyleMap = {
                    fontWeightBold : "bold",
                    fontStyleItalic : "italic",
                    textDecorationUnderline : "underline",
                    textDecorationStrike : "line-through",
                    textAlignLeft : "left",
                    textAlignCenter : "center",
                    textAlignRight: "right",
                    textAlignJusity : "justify",
                    listDecimal : "decimal",
                    listUnordered : "unordered",
                    indent : 'indent',
                    outdent : 'outdent'
                }
                scope.toggleStyle = function(annotation, styleProp) {
                    var value = defaultStyleMap[styleProp];
                    if (!scope.styles[annotation]) {
                        scope.setStyle(annotation, value);
                    } else {
                        scope.setStyle(annotation, "");
                    }
                }
                scope.toggleStyleMultiple = function(annotation, styleProp) {
                    var value = defaultStyleMap[styleProp];
                    if (scope.styles[annotation] &&
                        scope.styles[annotation].value == value) {
                        scope.setStyle(annotation, "");
                    } else {
                        scope.setStyle(annotation, value);
                    }
                }
                scope.setStyle = function(annotation, value) {
                    var newStyle = {name : annotation, value : value};
                    scope.onSelectStype({'newStyle' : newStyle});
                }
                scope.checkStyle = function(annotation, styleProp) {
                     var value = defaultStyleMap[styleProp];
                     return scope.styles[annotation] && (scope.styles[annotation].value == value);
                }
                scope.setLink = function() {
                    scope.onAddLink({link : {url:'http://fontawesome.io/icon/link/', text:'Link for test'}});
                }
                var onSyncStyle = scope.$on('syncStyle', function(event) {
                    scope.$applyAsync();
                })
            }
        };

    }])
});