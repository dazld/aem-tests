/* global use */
use(function() {

    var data = {
        baz: 'foo'
    };

    var moreData = ['a','c'];
    moreData.forEach(function(key) {
        var val = properties.get(key);
        if (typeof val !== 'undefined') {
            data[key] = val;
        }
    });


    return data;
});
