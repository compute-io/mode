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


``` javascript
var mode = require( 'compute-mode' );
```

#### mode( arr[, accessor] )

Returns the mode of the values in the input `array`.

``` javascript
var data = [ 3, 2, 5, 2, 5 ];

var m = mode( data );
// returns [2, 5]
```

The function returns a sorted `array` holding all modes in increasing order.

For non-numeric `arrays`, provide an accessor `function` for accessing `numeric` values.

``` javascript
var arr = [
	{'x':3},
	{'x':2},
	{'x':5},
	{'x':2},
	{'x':5}
];

function getValue( d ) {
	return d.x;
}

var m = mode( arr, getValue );
// returns [2,5]
```


__Note__: if provided an empty `array`, the function returns `null`.


## Examples

``` javascript
var mode = require( 'compute-mode' );

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


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


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
