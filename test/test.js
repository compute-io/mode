'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mode = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-mode', function tests() {

	it( 'should export a function', function test() {
		expect( mode ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
				'5',
				5,
				true,
				undefined,
				null,
				NaN,
				function(){},
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				mode( value );
			};
		}
	});


	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				mode( [1,2,3], value );
			};
		}
	});

	it( 'should compute the mode', function test() {
		var data;

		data = [ 2, 4, 5, 3, 8, 2 ];
		assert.deepEqual( mode( data ), [ 2 ] );

		data = [ 2, 4, 5, 3, 8, 4, 2 ];
		assert.deepEqual( mode( data ), [ 2, 4 ] );

		data = [ 2, 2, 4 ];
		assert.deepEqual( mode( data ), [ 2 ] );
	});

	it( 'should compute the mode using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		actual = mode( data, getValue );
		expected = [ 2 ];

		assert.deepEqual( actual, expected );

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':4},
			{'x':2}
		];

		actual = mode( data, getValue );
		expected = [ 2, 4 ];

		assert.deepEqual( actual, expected );

		data = [
			{'x':2},
			{'x':2},
			{'x':4}
		];

		actual = mode( data, getValue );
		expected = [ 2 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( mode( [] ) );
	});

});
