'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function');

// MODE //

/**
* FUNCTION: mode( arr[, accessor] )
*	Computes the mode of an array.
*
* @param {Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Null|Array} mode
*/
function mode( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'mode()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}

	if ( arguments.length > 1 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'mode()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}

	var len = arr.length,
		count = {},
		max = 0,
		vals = [],
		val;

	if ( !len ) {
		return null;
	}

	for ( var i = 0; i < len; i++ ) {
		val = clbk ? clbk( arr[ i ], i ) : arr[i] ;
		if ( !count[ val ] ) {
			count[ val ] = 0;
		}
		count[ val ] += 1;
		if ( count[ val ] === max ) {
			vals.push( val );
		} else if ( count[ val ] > max ) {
			max = count[ val ];
			vals = [ val ];
		}
	}
	return vals.sort( function sort( a, b ) {
		return a - b;
	});
} // end FUNCTION mode()


// EXPORTS //

module.exports = mode;
