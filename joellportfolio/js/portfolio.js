$(document).ready(function() {

//About page
//when user clicks the article links or book links, open full URL in new tab

//Artifacts Page

$('img').click(blowUp); // when user clicks on images, blow them up by toggling between classes

function blowUp() { 

    /* 
        The behavior I noticed in this function is that I can click on an image once, and then
        the image becomes large.  If I keep clicking on the image, it stays large.

        This is happening mostly because the images have a class of .thumbnails and you are calling 
        the .thumbnail class here (plural vs. singular).

        Also, the intents of the .toggleClass you have and the if statement are basically the same.
        You only need one or the other, but not both - .toggleClass is easiest.

        Also (last one!), since you have multiple images with that .thumbnails class on it, you should
        be using $(this) as your selector (just as you are doing in your if statement) to add/remove/toggle.

        I know that was a lot - please let me know if you have any questions about this ^^ 
     */

	$('.thumbnail').toggleClass('large');// when a user clicks an image, toggle the display of the image based on class

	if ($('.thumbnail').hasClass('large')){ //if the image has the large class, remove it
        $(this).removeClass('large'); 
    } else {
        $(this).addClass('large'); //if the image does not have the large class add it
      }
}


/*
    Love the pseudocode here.  Would love to see this fleshed out into JS code
*/

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
