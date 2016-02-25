$(document).ready(function() {

//About page
//when user clicks the article links or book links, open full URL in new tab

//Artifacts + Design Page (image behavior)

$('img').click(blowUp); // when user clicks on images, blow them up by toggling between classes

function blowUp() {
	$(this).toggleClass('large');// when a user clicks an image blow up and zoom out cursor
	var className = $(this).attr('class') 
	if (className = "thumbnails") {
		$(this).css("cursor", "zoom-in");
	} else {
		$(this).css("cursor", "zoom-out");
	}
}

//Process Page

$('.showmore').click(showMoreStuff); //when user clicks on project section (between the divs)

function showMoreStuff () {
	$(this).find('.showmore_image').addClass('large');
	$(this).hide();
	$($(this).next()).show();
	$($(this).next().next()).show();
}

$('.showless').click(showLessStuff); //when user clicks show less, collapse stuff

function showLessStuff () {
	$('img').removeClass('large');
	$(this).hide();
	$($(this).prev()).hide();
	$($(this).prev().prev()).show();
}



//Contact page
//when a user clicks one of the titles
//turn that box green with a check mark
//display thank you text underneath
});
