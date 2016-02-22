$(document).ready(function() {

//About page
//when user clicks the article links or book links, open full URL in new tab

//Artifacts + Design Page (image behavior)

$('img').click(blowUp); // when user clicks on images, blow them up by toggling between classes

function blowUp() { 
	$(this).toggleClass('large');// when a user clicks an image blow up
}

//Process Page

$('#showMore').click(showMoreStuff); //when user clicks on project section (between the divs)

function showMoreStuff () {
	event.preventDefault();
	$('img').addClass('large'); //blowup the images
	$('#show-on-click').slideDown(); //push other sections down, reveal hidden text
	$('#showLess').slideDown(); //push the show less link down, too
	$('#showLess').show(); //show the show less link
	$('#showMore').hide(); //hide the show more link

}

$('#showLess').click(showLessStuff); //when user clicks show less, collapse stuff

function showLessStuff () {
	event.preventDefault();
	$('img').removeClass('large');
	$('#show-on-click').slideUp(); //collapse section up
	$('#showLess').slideUp(); //collapse link up
	$('#showLess').hide(); //hide show less link
	$('#showMore').show(); //show 'show more' link
}



//Contact page
//when a user clicks one of the titles
//turn that box green with a check mark
//display thank you text underneath
});
