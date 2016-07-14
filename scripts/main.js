
// Require.js Configuration
require.config({
		baseUrl : 'scripts/modules',
		paths : {
				jquery : '../libs/jquery/jquery-min',
		},
		shim : {
			'bootstrap' : [ 'jquery' ]
		}
	});

	require([ 'jquery','col1'], function($,Col1) {

	Col1.init();

	
	
});
