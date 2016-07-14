

define(
		[ 'jquery' ],
		function($) {

			var module = {
			
					render : function() {
						var html ='<div class="col-md-12 headerCOntent">\
										<center class="centerText">\
											<div class="row loginComp">\
												<label>State thy names and yu shall pass</label>\
												<span>Not a member yet? <a>Register</a> now-- its fun and easy!</span>\
											</div>\
											<div class="row registerCOmp">\
												<label>Join tango today</label>\
												<span>Its free and always will be</span>\
											</div>\
										</center>\
								  </div>\
								   <div class="col-md-12 login">\
										<div class="col-xs-7 loginform">\
											<div class="row registerCOmp"><input type="text" placeholder="Email Address" id="emailId"/><span class="emailSpan"></div>\
											<div class="row "><input type="text" placeholder="username" id="username"/><span class="usernameSpan"></span></div>\
											<div class="row "><input type="password" placeholder="password" id="password"/><span class="passwordSpan"></span></div>\
											<div class="row registerCOmp"><input type="password" placeholder="confirm password" id="confPassword"/><span class="confPasswordSpan"></div>\
											<div class="row registerCOmp">\
												<select id="gender">\
													<option value="">Select Sex</option>\
													<option value="male">male</option>\
													<option value="female">female</option>\
												</select><span class="genderSpan">\
											</div>\
											<div class="row registerCOmp registerBtnDiv">\
												<div class="regosterInfoText">By Clicking register, you agree to our terms and that you have read our Data Use policy, including our Cookies Use.</div>\
											</div>\
											<div class="row registerCOmp registerBtnDiv"><input type="button" id="registerBtn" value="register" onclick=""/></div>\
											<div class="row loginComp"><input type="checkbox"> Remember Me <input type="button" id="loginBtn" value="submit" onclick="submitCLickFunction()"/></div>\
										</div>\
										<div class="col-xs-5 social">\
											<div class="or">or</div>\
											<a href=""><img src="../images/fb.png" /></a>\
											<a href=""><img src="../images/tw.png" /></a>\
										</div>\
								   </div>';
				
						return html;
						
					},

					attachEvents:function(){
						
	
					},

					init : function() {
						this.attachEvents();
	                    var x  = this.render();
	                    return x;
					}
			};

			return module;
		});
