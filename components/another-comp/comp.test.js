/* global describe, runTest, it, beforeEach, properties */
var assert = require('assert');
var path = require('path');
var modelPath = path.resolve(__dirname, './comp');

describe('when invoking another component', function () {
    beforeEach(function(){
        delete require.cache[modelPath];
        require(modelPath);
        properties.clear();
    });

    it('should return expected stuff', function () {

        assert.deepEqual(runTest(), {
            baz: 'foo'
        });
    });

    it('should return extended properties if they are available', function () {
        properties.mapSet({
            a: 'b',
            c: 'd'
        });
        var result = runTest();
        assert.deepEqual(result, {
            a: 'b',
            c: 'd',
            baz: 'foo'
        });

    });
});
