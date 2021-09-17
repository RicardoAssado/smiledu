
/* === Animated.css - Wow.js === */
new WOW().init();

/* === More plugins === */
$(document).ready(function(){
	/* === Icon Hamburger === */
	$('.hamburger-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu-collapse').slideToggle();
	});

	/* === Accordion - Form Cotiza === */
	$('.list-navbar .nav-item:last-of-type a').click(function(e) {
		e.preventDefault();

		var $this = $(this);

		if ($this.next().hasClass('show')) {
			$this.next().removeClass('show');
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find('.list-navbar .form-cotiza').removeClass('show');
			$this.parent().parent().find('.list-navbar .form-cotiza').slideUp(350);
			$this.next().toggleClass('show');
			$this.next().slideToggle(350);
		}
	});

	/* === Form Cotiza - Show and Hide === */
	$("#cotiza-codigo").click(function(){
	   $("#cotiza-codigo").hide(350);
	   $("#cotiza-box").show(350);
	});

	/* === Slider === */
	$(".slider").owlCarousel({
		autoplay: true,
    	autoplayTimeout: 6000,
		dots: false,
		items: 1,
		loop: true,
		nav: true,
		navText: ['<span class="icon-arrow-left"></span>','<span class="icon-arrow-right"></span>'],
		animateOut: 'fadeOut',
       	animateIn: 'fadeIn',
		smartSpeed: 8000,

		responsive:{
			0:{
				nav: false
			},
			768:{
				nav: false
			}
        }
	});

	/* === Slider-Brands === */
	$(".slider-brands").owlCarousel({
		autoplay: true,
    	autoplayTimeout: 5000,
		dots: true,
		loop: true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items: 1
			},
			425:{
				items: 2
			},
			576:{
				items: 3
			},
			768:{
				items: 5
			}
        }
	});

	/* === Slider-ServicesIndex === */
	$(".slider-services").owlCarousel({
		autoplay: true,
    	autoplayTimeout: 5000,
		dots: true,
		loop: true,
		navText: ['<span class="icon-arrow-left"></span>','<span class="icon-arrow-right"></span>'],
		smartSpeed: 1000,
		responsive:{
			0:{
				items: 1,
				nav: true
			},
			425:{
				items: 2,
				nav: true
			},
			768:{
				items: 3,
				nav: true
			}
        }
	});

	/* === Accordion - FAQ === */
	$('.panel-heading').click(function(e) {
		e.preventDefault();

		var $this = $(this);

		if ($this.next().hasClass('show')) {
			$this.next().removeClass('show');
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find('.collapse').removeClass('show');
			$this.parent().parent().find('.collapse').slideUp(350);
			$this.next().toggleClass('show');
			$this.next().slideToggle(350);
		}
	});

	/* === Link active - FAQ === */
	$('.panel-heading').on('click', function(){
	    $('.panel-heading.active').removeClass('active');
	    $(this).addClass('active');
	});

});
