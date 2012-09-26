$(document).ready(function(){
	
	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}


	// price slider
	if ($("#slider-range").exists()){
		$("#slider-range").slider({
			orientation: "vertical",
			range: true,
			values: [ 1000, 3000 ],
			min:0,
			max:4000,
			slide: function( event, ui ) {
				$("#scale-diapason__to").val(ui.values[ 1 ] + " р.");
				$("#scale-diapason__from").val(ui.values[ 0 ] + " р.");
				$(".ui-slider-handle").eq(0).children().html(ui.values[ 0 ] + " р.");
				$(".ui-slider-handle").eq(1).children().html(ui.values[ 1 ] + " р.");
			}
		});
		$("#scale-diapason__to").val($( "#slider-range" ).slider( "values", 1 ) + " р.");
		$("#scale-diapason__from").val($( "#slider-range" ).slider( "values", 0 ) + " р.");
		$(".ui-slider-handle").eq(0).html("<span>"+ $( "#slider-range" ).slider( "values", 0 ) +" р.</span>");
		$(".ui-slider-handle").eq(1).html("<span>"+ $( "#slider-range" ).slider( "values", 1 ) +" р.</span>");
	};


	// tabs
	$('ul.tabs__nav').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('div.tabs').find('div.tabs__box').eq($(this).index()).fadeIn(150).siblings('div.tabs__box').hide();
		return false;
	});
	

	// change quantity
	$('.qty__more').click(function(){
		var count = parseInt($(this).prev('input').val());
		if (count < 1) {$(this).prev('input').val(1);} 
		else {$(this).prev('input').val(count+1);}
		return false;
	});
	
	$('.qty__less').click(function(){
		var count = parseInt($(this).next('input').val());
		if (count <= 1) {$(this).next('input').val(1);} 
		else {$(this).next('input').val(count-1);}
		return false;
	});


	//zoom
	if ($(".zoom").exists()){

		$(window).load(function() {
			var pic = $('.zoom img');
			pic.removeAttr("width"); 
			pic.removeAttr("height");
			$('.zoom').width(pic.width());
			$('.zoom').height(pic.height()).css('marginTop', function(index) {
				return Math.ceil((330 - pic.height())/2);
			});
		});

		var options = {
			alwaysOn:true,
			zoomWidth: 293,
			zoomHeight: 293,
			title:'false'
		}; 
		$('.zoom').jqzoom(options);
	};


	//news
 	$(".news__title").click(function(){
		if ($(this).parent().hasClass("active")){
			$(this).next(".news__inf").animate({ height: "38" });
			$(this).parent().removeClass("active");
		}
		else {
			$(this).next(".news__inf").animate({height:$(this).next().children(".news__inf-holder").height()+7});
			$(this).parent().addClass("active");
		}
        return false;
	});


});


