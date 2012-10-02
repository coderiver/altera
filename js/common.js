$(document).ready(function(){
$('.contact-form__link').click(function() {
	$('.contact-form__popup').toggle();
	return false;
});



});

$(document).mouseup(function(e){
    var container = $(".contact-form__popup");

    if (container.has(e.target).length === 0)
    {
        container.hide();
    }
});