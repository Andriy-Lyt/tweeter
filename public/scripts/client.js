/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const renderTweets = function(tweets) {
    // loops through tweets
    for(let $tweet of tweets) {
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      $('#tweets-container').append(createTweetElement($tweet));
    }
  }

  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/tweets",
    })
    .done(function(data) {
      data.sort(function(a, b){
        return b.created_at - a.created_at;
      });
      renderTweets(data)
    });
  }

  loadTweets();

  //clean user input function
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  function createTweetElement(tweet) {
    let $tweet = $(`
      <article class="tweet">
        <header class="flex-row-sb">
          <div class="inl-blk">
            <i class="far fa-user"></i>
            <span>${tweet.user.name}</span>
          </div>
          <span>${tweet.user.handle}</span>
        </header>
  
        <p class="posted-tweet-text">${escape(tweet.content.text)} </p>
  
        <footer class="flex-row-sb flex-row-alend">

        <span class="need_to_be_rendered" datetime="2016-07-07T09:24:17Z">${timeago.format(tweet.created_at)}</span>

          <span>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
  
      </article>
      `);
      return $tweet;
  }

// Process New Tweet Form ---------
$("#addtweet-form").on("submit", function(event) {

  event.preventDefault();
  const $formData = $('textarea#tweet-text').val().replace(/\s/g,'');

  if ($formData == '') {
    $('#form-error').html("Please enter the Tweet text").css("border", "2px solid red");
  }
  else if($formData.length > 140) {
    $('#form-error').html("Max Tweet length is 140 characters").css("border", "2px solid red");
  }
  else{
    $('#form-error').empty().css("border", "none");
    const $formDataSer = $("#addtweet-form").serialize();
  
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $formDataSer,
    }).done(function() {
      $('#tweets-container').empty();
      loadTweets();
    });
  }
});

// scroll to tweets
$('#arrow').on('click', function() {
  $('html, body').animate({
    scrollTop: $("main.container").offset().top-40
  },300);
});

}); // closing doc.ready funct

