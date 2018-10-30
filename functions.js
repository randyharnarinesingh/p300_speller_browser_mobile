$(document).ready(function() {
								
	function resize_slider() {
										
		var width=$(window).width();
		var scroll_width = 17;
		width += scroll_width;
		// note that jquery window.width() and css media query-width are not equal due to scroll bar width
		// therefore css breakpoints and js breakpoints do not line up at the same width...fixed below using scroll bar width
		
		var new_hw = width/2;
		
		if(width>(500+scroll_width) && width <=(1000+scroll_width)) {
			$(".slider").css("width",500);
			$(".slider").css("margin-left","auto");
			$(".slider").css("margin-right","auto");
		} else if(width>(1000+scroll_width)) {
			$(".slider").css("height",new_hw);
			$(".slider").css("width",new_hw);
			$(".slider").css("margin-left","auto");
			$(".slider").css("margin-right","auto");
		} else {
			$(".slider").css("margin-left","0");
			$(".slider").css("margin-right","0");
			$(".slider").css("width","auto");
		}

	}
				
	resize_slider(); 
	// ensure slider is correctly sized on window open
	
	$(window).resize(resize_slider); 
	// call function to resize slider on window resize event
				
	$(window).scroll(function(e) {
					
		var w_height = $(window).height();   // returns height of browser viewport
		var d_height = $(document).height(); // returns height of HTML document
		var diff_height = d_height - w_height;
		var height = $(window).scrollTop();
					
		// only execute code if document height is greater than window height to a certain extent
					
		if(height>51 && diff_height>750) { // locks navbar
			$("#top-logo").hide();
			$(".topname").addClass("one_em");
			$("#top-word-logo").addClass("fifty_px");
			$("#slogan").hide();
			$("#top-banner").addClass("navbar-fixed-top");
			$("#topbanner-bar").addClass("no-margin");
			$("#theCarousel").css("margin-top","51px");
		} else { // unlocks navbar
			$("#top-logo").show();
			$(".topname").removeClass("one_em");
			$("#top-word-logo").removeClass("fifty_px");
			$("#slogan").show();
			$("#top-banner").removeClass("navbar-fixed-top");
			$("#topbanner-bar").removeClass("no-margin");
			$("#theCarousel").css("margin-top","0");
		}
					
		var scroll_slack = d_height - w_height - height;
		// scroll_slack equals zero when page is scrolled to bottom					
					
		if(height>600 || scroll_slack==0) { // shows gotoTop button
			$("#goTop").slideDown();
		} else { // hides gotoTop button
			$("#goTop").slideUp();
		}
						
							
	});
				
	$("#about-blurb").hover(
		function() {
			$("#about-text").css("color","white");
		},
		function() {
			$("#about-text").css("color","black");
		}
	);
	
	$(".cakeview").hover(
		function() {
			if ($(this).hasClass("cake_orange")) {
				$(this).css("background-color","orange");
			} else {
				$(this).css("background-color","purple");
			}
			$(this).children("h2").css("color","white");
			$(this).children("h4").css("color","white");
			$(this).children("p").css("color","white");
			$(this).children("img").css("opacity","0.7");
			$(this).children("img").animate({
				borderTopLeftRadius: "0%", 
				borderTopRightRadius: "35%", 
				borderBottomLeftRadius: "35%", 
				borderBottomRightRadius: "35%",
			},250,"easeInQuad",function(){});
		},
		function() {
			$(this).css("background-color","inherit");
			$(this).children("h2").css("color","black");
			$(this).children("h4").css("color","black");
			$(this).children("p").css("color","black");
			$(this).children("img").css("opacity","1");
			$(this).children("img").animate({
				borderTopLeftRadius: "50%", 
				borderTopRightRadius: "50%", 
				borderBottomLeftRadius: "50%", 
				borderBottomRightRadius: "50%",
			},250,"easeInQuad",function(){});
		}
	);
	
	$("#start").click( 
		function() {
			
			number_of_trials = 5;
			
			var all_chars = [1,2,3,4,5,6,7,8,9];
			new_chars = shuffle(all_chars);
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars = shuffle(all_chars);
				new_chars = new_chars.concat(temp_chars);
			}
						
			c=new_chars.length;
			i=0;
			
			console.log("START");
			setTimeout(flash,2000);
			// 2 second pause before stimulus presentation starts
			
			var flash_time = 100;
			var ISI = 75;
			
			function flash() {
								
				if(i<c) {
					
					switch(new_chars[i]) {
						case 1:
							$("#A").css("color","red");
							break;
						case 2:
							$("#B").css("color","red");
							break;
						case 3:
							$("#C").css("color","red");
							break;
						case 4:
							$("#D").css("color","red");
							break;
						case 5:
							$("#E").css("color","red");
							break;
						case 6:
							$("#F").css("color","red");
							break;
						case 7:
							$("#G").css("color","red");
							break;
						case 8:
							$("#H").css("color","red");
							break;
						case 9:
							$("#I").css("color","red");
							break;
						default:
							
					}
					
					setTimeout(
						function() {
							$("td").css("color","white");
							// revert elements to gray default after flash
							setTimeout(flash,ISI);
						}
					,flash_time);
					
				}
			
				i++;
			
			}
			// recursive function to keep calling setTimeout until all characters have flashed
			
			function shuffle(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				return array;
			}
					
		}
				
	);
	
});