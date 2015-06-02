/* global properties, describe, it, runTest, beforeEach */

require('./test-thing.js');
var assert = require('assert');

describe('when invoking component model',function() {

    beforeEach(function(){
        properties.clear();
    });

    it('returns expected info', function() {

        properties.set('foo','bar');

        assert.deepEqual(runTest(), {
            'foo': 'bar',
            'hasLabel': true
        });
    });
    it('returns expected info', function() {

        properties.set('foo', undefined); // not really necessary

        assert.deepEqual(runTest(), {
            'foo': undefined,
            'hasLabel': false
        });
    });
});


