$(document).ready(function () {
  let maxlength = 140;

  // empty textarea, error message, counter reset and color set to black on focus
  $("#tweet-text").on("focus", function () {
    $(this).val("");
    $("#form-error").empty().css("border", "none");
    $("output.counter").css("color", "inherit");
    $("output.counter").html(maxlength);
  });

  // textarea input counter
  $("#tweet-text").on("input", function () {
    let currentLength = $(this).val().replace(/\s/g, "").length;
    $("output.counter").html(maxlength - currentLength);

    if (maxlength - currentLength < 0) {
      $("output.counter").css("color", "red");
    } else {
      $("output.counter").css("color", "inherit");
    }
  });
});
