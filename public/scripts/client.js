/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ];


  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tw of tweets) {
      let $newTweet = createTweetElement(tw);
      $('#tweets-container').prepend($newTweet);
      
    }
  }

  const createTweetElement = function(tweet) {

    const $tweet = $(
    `<article class="tweet">
    <header class="tweet-header">
    <img class="tweet-img" src="${tweet.user.avatars}"> 
    <figcaption>${tweet.user.name}</figcaption>
    <p class="handle">${tweet.user.handle}</p>
    </header>
    <p class="tweet-body">${tweet.content.text}</p>
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
  
 

  //renderTweets(data);

  $('form').submit((event) => {

    event.preventDefault();
    let len = $('#tweet-text').val().length;
    if (!len) {
      alert('Empty message')
    } else {

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $('form').serialize(),
    })
  }
      // .then(function() {
      //   loadTweets();
      // })
      loadTweets();

      
  });

 const loadTweets = function() {

    $.ajax({url: "/tweets",
            method:"GET",
            dataType: 'json',
            success:function(res) {
            console.log('ok')
            renderTweets(res);
          }
        })
  }
 
 loadTweets();



});