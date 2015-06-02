/* global properties, describe, it, runTest, beforeEach */


var assert = require('assert');
var path = require('path');
var modelPath = path.resolve(__dirname, './test-thing');

describe('when invoking component model',function() {

    beforeEach(function() {
        delete require.cache[modelPath];
        require(modelPath);
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


