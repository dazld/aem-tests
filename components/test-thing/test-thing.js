/* global properties, use, granite*/

use(function() {

    var myLabel = properties.get('foo');

    return {
        foo: myLabel,
        hasLabel: !!myLabel
    };
});

