Mode
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the mode of an array.


## Installation

``` bash
$ npm install compute-mode
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var mode = require( 'compute-mode' );
```


## Examples

``` javascript
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*10 );
}

console.log( mode( data )  );
// Returns [...]
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

This method will return a sorted `array`.


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-mode.svg
[npm-url]: https://npmjs.org/package/compute-mode

[travis-image]: http://img.shields.io/travis/compute-io/mode/master.svg
[travis-url]: https://travis-ci.org/compute-io/mode

[coveralls-image]: https://img.shields.io/coveralls/compute-io/mode/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/mode?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/mode.svg
[dependencies-url]: https://david-dm.org/compute-io/mode

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/mode.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/mode

[github-issues-image]: http://img.shields.io/github/issues/compute-io/mode.svg
[github-issues-url]: https://github.com/compute-io/mode/issues
