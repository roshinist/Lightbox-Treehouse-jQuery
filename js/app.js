//Problem: Clicking on image goes to dead-end
//Solution: Create  overlay with the large image, called 'Lightbox'

//jQuery Variables
var $overlay = $("<div id= 'overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to Overlay, and overlay to body
$overlay.append($image);
$overlay.append($caption);
$('body').append($overlay);

//Handle onlick() on img
$('#imageGallery a').click(function (event) {
  event.preventDefault();
  var imgLink = $(this).attr("href");
  //console.log(imgLink);
  $image.attr('src', imgLink);
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  $overlay.show();
});

$overlay.click(function () {
  $(this).hide();
});











