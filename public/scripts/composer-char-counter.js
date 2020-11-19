$(document).ready(function() {
  
  let maxLength = 140;

  $("#tweet-text").keyup(function() {

    let len = $(this).val().length;

    if (len <= maxLength) {
    
      $("output").text(maxLength-len).css('color', '#545149');
    } else {
      $("output").text(maxLength-len).css('color','red');
    }

  });
  
});