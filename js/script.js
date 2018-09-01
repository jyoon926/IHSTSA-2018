 $(document).ready(function(){

	//Parallax On Big Displays
	if ( $(window).width() > 739) {
		//var $navBar = $('.navBar');
		var $win = $(window);
		/*
		//Fixed Navigation Bar
		$win.on('scroll', function() {
			var top = $win.scrollTop();
			$navBar.css('top', '' + top + 'px');
			console.log(top);
		});
		

		//Parallax circles
		var $circle1 = $('.circle1');
		var $circle2 = $('.circle2');
		var $circle3 = $('.circle3');
		var $circle4 = $('.circle4');
		var $circle5 = $('.circle5');

		$win.on('scroll', function() {
			var top1 = $win.scrollTop()/3;
			var top2 = $win.scrollTop()/2.5;
			var top3 = $win.scrollTop()/1.5;
			var top4 = $win.scrollTop()/2;
			var top5 = $win.scrollTop()/6;
			$circle1.css('transform', 'translateY(' + top1.toFixed(1) + 'px)');
			$circle2.css('transform', 'translateY(' + top2.toFixed(1) + 'px)');
			$circle3.css('transform', 'translateY(' + top3.toFixed(1) + 'px)');
			$circle4.css('transform', 'translateY(' + top4.toFixed(1) + 'px)');
			$circle5.css('transform', 'translateY(' + top5.toFixed(1) + 'px)');
		});*/

	}

	//Smooth Scrolling Between Links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			},1000, function(){
				window.location.hash = hash;
			});
		}
	});

	/*Change header height on scroll
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
	   	$(".header").css("height", "80px");
			$(".a").css("margin", "15px 27px");
		}
		else {
	   	$(".header").css("height", "120px");
			$(".a").css("margin", "37px 27px");
		}
	});*/


});
