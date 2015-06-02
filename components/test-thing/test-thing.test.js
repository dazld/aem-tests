

require('./test-thing.js');
var assert = require('assert');

describe('when invoking component model',function(){

    it('returns expected info', function(){
        assert.deepEqual(runTest(), {
            'foo':'bar'
        }); 
    });
});


