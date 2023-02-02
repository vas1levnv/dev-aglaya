$(document).ready(function() {
	$('.header-btn').on('click', function() {
		$('.header-btn').toggleClass('active')
		$('.header-list__wrapper').toggleClass('active')
		$('body').toggleClass('lock')
	})
})