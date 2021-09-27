$(document).ready(function() {
  let counter = 140;
$('#tweet-text').on('input', function(event) {
  // console.log($('#tweet-text').val());
  $('.counter').html(counter - 1);
  counter--;
  if (counter < 0 ) {
    $('.counter').css('color', 'red');
  }
});
 
});