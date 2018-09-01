 $(document).ready(function(){

	//Parallax On Big Displays
	if ( $(window).width() > 739) {
		//var $navBar = $('.navBar');
		var $win = $(window);

		//Parallax circles
		var $circles = $('.circles');
		var $circle1 = $('.circle1');
		var $circle2 = $('.circle2');

		$win.on('scroll', function() {
			var top1 = $win.scrollTop()/800;
			var top2 = ($win.scrollTop() - 150);
			var top3 = $win.scrollTop() + 50;		
			var top4 = $win.scrollTop() - 20;		
			$circles.css('opacity', (top1 * -1) + 1);
			$circles.css('margin-bottom', (top2.toFixed(1) * -1) + 'px');
			$circle1.css('margin-left', (top3.toFixed(1) * -1) + 'px');
			$circle2.css('margin-left', (top4.toFixed(1)) + 'px');
		});

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

	//Change header height on scroll
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
	   	$(".header").css("background", "#070014");
		}
		else {
	   	$(".header").css("background", "rgba(0,0,0,0)");
		}
	});

  //******Hiding Header******
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = 100;
  // on scroll, let the interval function know the user has scrolled
  $(window).scroll(function(event){
    didScroll = true;
  });
  // run hasScrolled() and reset didScroll status
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 0);
  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
  }


});
