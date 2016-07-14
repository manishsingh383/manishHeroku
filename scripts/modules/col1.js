

define(
		[ 'jquery','header','bottomVideoComponent','loginRegisterComponent' ],
		function($,Header,BottomComp,LoginRegisterComp) {

			var module = {
			
					el : $("#formDiv"),

					render : function() {
						var that= this;
						var  html ='<div class="mainWrap">\
										<div class="headWrap">'+Header.init()+'</div>\
										<div class="topRow">'+LoginRegisterComp.init()+'</div>\
										<div class="bottomRow">'+BottomComp.init();+'</div>\
									</div>';
				
						that.el.html(html);
						
					},

					attachEvents:function(){

							// $('.loginform input').blur(function(){

							// 	var username = $('#username').val();
							// 	var password = $('#password').val();

							// 	if( $(this).val() == '' ){
							// 		$('#'+$(this).attr('id')).addClass('dangerRed');
									
							// 	}else{
							// 		$('#'+$(this).attr('id')).addClass('normalBorder');
							// 	}

							// 	if(username != '' && password != ''){
							// 		$('#loginBtn').removeAttr('disabled');
							// 		$('#loginBtn').css('background','#97CCE7');

							// 	}else{

							// 		//$('#loginBtn').attr('disabled',true);
							// 	}

							// });

							$('body').on('click','#loginBtn',function(){								
								var username = $('#username').val();
								var password = $('#password').val();

								if( username == '' ){
									$('#username').addClass('dangerRed');
									$('.usernameSpan').html('x Required Field')
									
								}else{
									$('#username').addClass('normalBorder');
									$('.usernameSpan').html('')
								}

								if( password == '' ){
									$('#password').addClass('dangerRed');
									$('.passwordSpan').html('x Required Field')
									
								}else{
									$('#password').addClass('normalBorder');
									$('.passwordSpan').html('')
								}
							});

							$('body').on('click','#registerBtn',function(){
								
								var username = $('#username').val();
								var password = $('#password').val();
								var emailId = $('#emailId').val();
								var confPassword = $('#confPassword').val();
								var gender = $('#gender').val();
								
								if( emailId == '' ){
									$('#emailId').addClass('dangerRed');
									$('.emailSpan').html('x Required Field')
									
								}else{
									$('#emailId').addClass('normalBorder');
									$('.emailSpan').html('')
								}

								if( username == '' ){
									$('#username').addClass('dangerRed');
									$('.usernameSpan').html('x Required Field')
									
								}else{
									$('#username').addClass('normalBorder');
									$('.usernameSpan').html('')
								}

								if( password == '' ){
									$('#password').addClass('dangerRed');
									$('.passwordSpan').html('x Required Field')
									
								}else{
									$('#password').addClass('normalBorder');
									$('.passwordSpan').html('')
								}

								if( confPassword == '' ){
									$('#confPassword').addClass('dangerRed');
									$('.confPasswordSpan').html('x Required Field')
									
								}else{
									$('#confPassword').addClass('normalBorder');
									$('.confPasswordSpan').html('')
								}

								if( gender == '' ){
									$('#gender').addClass('dangerRed');
									$('.genderSpan').html('x Required Field')
									
								}else{
									$('#gender').addClass('normalBorder');
									$('.genderSpan').html('')
								}

								
							});




							$('.loginComp a').click(function(){
								$('.loginComp').hide();
								$('.registerCOmp').show();
								location.href.reload();
							});

							$('.centerBtnPlay').click(function(){
								$('#myModal').modal('show');

							});


					},

					init : function() {
	                    this.render();
	                    this.attachEvents();
					}
			};

			return module;
		});
