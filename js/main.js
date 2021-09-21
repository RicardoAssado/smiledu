
$(document).ready(function(){
	/* === Menu Active === */
	$('#menu').click(function(){
		$('.main .content').toggleClass('show');
	});

	/* === Accordion === */
	$(function () {
		$(".accordion-item .accordion-content").css("display", "none");

		$(".js-accordion").click(function () {
			$(".open").not(this).removeClass("open").next().slideUp(400);
			$(this).toggleClass("open").next().slideToggle(400);
		});
	});
});
