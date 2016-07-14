

define(
		[ 'jquery' ],
		function($) {

			var module = {
			

					render : function() {
						var html ='<div class="headerCOntent col-md-12">\
										<center class="centerText">\
											<label>Learn More!</label>\
											<span>Check out our demos and quick guides to aour app</span>\
										</center>\
								   </div>\
								   <div class="col-md-12 imageWrap">\
								   		<div class="imgDiv">\
								   			<div class="centerBtnPlay"></div>\
								   		</div>\
								   </div>';
				
						return html;
						
					},

					init : function() {
	                   var x = this.render();
	                   return x;
	             
					}
			};

			return module;
		});
