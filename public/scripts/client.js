/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {



  const renderTweets = function(tweets) {
  
    for (let tw of tweets) {
      let $newTweet = createTweetElement(tw);
      $('#tweets-container').prepend($newTweet);
      
    }
  }

  const createTweetElement = function(tweet) {

    let escaped = $("<div>").text(tweet.content.text);

    const $tweet = $(
    `<article class="tweet">
    <header class="tweet-header">
    <img class="tweet-img" src="${tweet.user.avatars}"> 
    <figcaption>${tweet.user.name}</figcaption>
    <p class="handle">${tweet.user.handle}</p>
    </header>
    <p class="tweet-body">${escaped.text()}</p>
    <footer>
      <i>${new Date(tweet.created_at).toLocaleDateString("en-US")}</i>
      <div>
      <i class="fa fa-flag"></i>
      <i class="fa fa-heart"></i>
      <i style="font-size:24px" class="fa">&#xf079;</i>
      </div>
      </article>`);

    return $tweet;
  }
  

  $('form').submit((event) => {

    event.preventDefault();

    let len = $('#tweet-text').val().length;

    if (!len) {
      $('#errorm1').slideDown().delay(2000).fadeOut('slow');
    } else if(len > 140) {
      $('#errorm2').slideDown().delay(2000).fadeOut('slow');
    } else {

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $('form').serialize(),
    })
    .then(() => {
      $('#tweet-text').val('');
      loadTweets();
    })
  }
       
  });

 const loadTweets = function() {

    $.ajax({url: "/tweets",
            method:"GET",
            dataType: 'json',
            success:function(res) {
            renderTweets(res);
          }
        })
  }
 
 loadTweets();

});