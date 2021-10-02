$(document).ready(function () {
  let maxlength = 140;

  // textarea input counter
  $("#tweet-text").on("input", function () {
    let currentLength = $(this).val().replace(/\s/g, "").length;
    $("output.counter").html(maxlength - currentLength);

    if (maxlength - currentLength < 0) {
      $("output.counter").css("color", "red");
      $("#form-error").html("Max Tweet length is 140 characters").css("border", "2px solid red");
    } else {
      $("output.counter").css("color", "inherit");
      $("#form-error").empty().css("border", "none");
    }
  });  

}); // closing document.ready()
