$(document).ready(function(){
 	if (window.innerWidth > 880){
 		$(window).scroll(function(){
			var barra = $(window).scrollTop();
			var posicion = barra * 0.30;
			$('body').css({
				'background-position': '0 -' + posicion + 'px'
			});
		});
 	}
});