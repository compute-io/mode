/**
*
*	COMPUTE: mode
*
*
*	DESCRIPTION:
*		- Computes the mode of an array.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: mode( arr )
	*	Computes the mode of an array.
	*
	* @param {Array} arr - array of values
	* @returns {Array} mode
	*/
	function mode( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'mode()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			count = {},
			max = 0,
			vals = [],
			val;

		for ( var i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( !count[ val ] ) {
				count[ val ] = 0;
			}
			count[ val ] += 1;
			if ( count[ val ] === max ) {
				vals.push( val );
			} else {
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

})();