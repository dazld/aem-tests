var assert = require('assert');
var fs = require('fs');
var findit = require('findit');
var path = require('path');

var projectRoot = path.resolve(__dirname, '..');

console.log(projectRoot);


var testFinder = findit(projectRoot + '/**/*.test.js');
testFinder.on('file', console.log.bind(console))


function noop(){}


global.use = function(){
    var args = [].slice.call(arguments);
    var deps = [];
    var callback = args[1];
    var hasDeps = args[0] instanceof Array;
    
    if (!hasDeps) {
        callback = args[0];
    } 
    
    console.log(deps, callback, args)
    
}

console.log(__dirname);




describe('reality ', function(){
  it('should be not broken', function(){
     var sum = 1+1;
     assert.equal(sum, 2,'things dont add up');
  
  });



});

