

var fnBody;

global.use = function(){
    var args = [].slice.call(arguments);
    var deps = [];
    var hasDeps = args[0] instanceof Array;
    var callback = hasDeps ? args[1] : args[0];

    fnBody = callback;

}



global.runTest = function(){
    return fnBody(); 

    
}

