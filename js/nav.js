var $nav_button = $('<div class="nav-button"><a><img src=images/nav_icon.png></a></div>');
var nav_hidden = true

//append the hamburger nav button
$(".main-header h1").append($nav_button);

//hide .nav-bar, show .nav-bar;

 $nav_button.on("click", function() {
 	$(".nav-bar").toggle('fast');
 	if (nav_hidden == true) {
 		nav_hidden = false;
 	} else {
 		nav_hidden = true;
 	}
 	return false;
 });


$(window).resize(function(){
	if ($(window).width() >= 768){	
		$(".nav-bar").show();
	}	
});

$(window).resize(function(){
	if ($(window).width() >= 1024){	
		$(".nav-bar").css('display', 'inline-block');
	}	
});

$(window).resize(function(){
	if ($(window).width() < 1024) {	
		$(".nav-bar").css('display', 'block');
	}
});

$(window).resize(function(){
	if (($(window).width() < 768) && (nav_hidden)) {	
		$(".nav-bar").css('display', 'none');
	}
});









