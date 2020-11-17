$(document).ready(function() {
  // --- our code goes here ---
  let maxLength = 140;
  $("#tweet-text").keyup(function(key) {
    let len = $(this).val().length;
    if (len <= maxLength) {
    if (key === 'Backspace'){
    $("output").text(maxLength-len+1);
    } else {
      $("output").text(maxLength-len);
      $("output").css('color', old);
    }} else {
      $("output").text(maxLength-len);
      $("output").css('color','red')
    }

  });
  
});
