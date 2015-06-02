/* global: global, thing */
'use strict';

var fnBody;


/* mocks for AEM globals */


global.use = function() {
    var args = [].slice.call(arguments);
    var deps = [];
    var hasDeps = args[0] instanceof Array;
    var callback = hasDeps ? args[1] : args[0];

    fnBody = callback;

};

global.properties = function() {

    var dict = {};

    var facade = {
        get: function(key){
            return dict[key];
        },
        set: function(key, value) {
            dict[key] = value;
        },
        mapSet: function(props){
            props.forEach(function(prop) {
                this.set(prop.key, prop.value);
            }, facade);
        },
        clear: function() {
            dict = {};
        }
    };

    return facade;
}();

global.runTest = function runTest() {
    return fnBody();
};


