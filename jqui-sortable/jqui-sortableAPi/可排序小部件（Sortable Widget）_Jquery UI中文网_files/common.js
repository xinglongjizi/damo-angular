$(document).ready(function(){
	var origin_top= $("#ad").offset().top;

	$(window).scroll(function(event){
		var top = $("#ad").offset().top - $(window).scrollTop();
		if(top < 69){
			$("#ad").addClass('fixed');
		}
		if($("#ad").offset().top < origin_top){

			$("#ad").removeClass('fixed');
		}
	});
});

