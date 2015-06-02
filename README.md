# PoC for AEM JS unit tests 


- `npm install`
- `gulp`

Tests are following pattern of `{component-name}.test.js` and live in the same folder as the component.

Gulp grabs all tests with this pattern, and pipes it through mocha.

`use` is mocked in the node support file, and we require the AEM js file with side effects of it invoking the global use, which we can then call later as part of the test suite.

## todo

- mock AEM globals
- handle dependencies correctly (fun, as not commonJSish, so have to resolve those somehow).
- insert spies into JCR property getters to see which props are being touched by the model
