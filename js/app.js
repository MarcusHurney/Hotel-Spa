function getHeight() {
  var height = $('section.promo, section.promo-video').height();
  $('#overlay').css({'height': height + 'px'});
}



$(function() {
  getHeight();
  $('#gallery a').on('click', function() {
    var image = $(this).find('img').attr('src');
    // in order to change the src route of #galleryModal's img tag
    // to include the "fullsize" folder instead of "thumbnail"
    // we use jQuery method split()
    var selectedImage = image.split('thumbnail');
    // selectedImage is an array containing the <a> tag's src value split into two values
    // the first value is before thumbnail and the second is after thumbnail
    // now we need to manipulate the src to dynamically load the correct photo
    var fullPath = selectedImage[0] + 'fullsize' + selectedImage[1];
    // give #galleryModal img tag the correct src value
    $('#galleryModal #imageContainer').attr('src', fullPath);
  });
});

// every time the client resizes the window,
// getHeight() will be invoked, changing the #overlay div's height
// to make it responsive
$(window).resize(function () {
  getHeight();
});




$(document).foundation();
