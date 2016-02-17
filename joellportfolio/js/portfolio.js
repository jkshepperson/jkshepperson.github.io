$(document).ready(function() {

//About page
//when user clicks the article links or book links, open full URL in new tab

//Artifacts Page

$('img').click(blowUp); // when user clicks on images, blow them up by toggling between classes

function blowUp() { 
	$('.thumbnail').toggleClass('large');// when a user clicks an image, toggle the display of the image based on class

	if ($('.thumbnail').hasClass('large')){ //if the image has the large class, remove it
        $(this).removeClass('large'); 
    } else {
        $(this).addClass('large'); //if the image does not have the large class add it
      }
}

//Design Page
//when user clicks on image from the design project
//expand the project section to fill the entire page
//show images in carousel view with arrows that will flip through the images
//change the background color to white
//also show an 'x' in the upper right hand corner of the expanded window
//when user clicks on the 'x' return to normal view of project

//Contact page
//create validation on the form fields
//on submit, create email and send to jkshepperson@gmail.com 
//on submit, remove the form and instead display large text 'Thank you!'
//only allow one submission per email address
});
