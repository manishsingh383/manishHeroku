

define(
		[ 'jquery' ],
		function($) {

			var module = {
		

					render : function() {
						var html ='<div class="transparentHeader">\
										<img src="../images/Tango!_rastr.png" />\
								   </div>';
				

						return html;
						
					},

					init : function() {
	                    var x  = this.render();
	                    return x;
					}
			};

			return module;
		});
