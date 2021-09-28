/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

  const renderTweets = function(tweets) {
    // loops through tweets
    for(let $tweet of tweets) {
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      $('#tweets-container').append(createTweetElement($tweet));
    }
  }

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
  
        <p class="posted-tweet-text">${tweet.content.text}</p>
  
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

  renderTweets(data);
    
  
  // Test / driver code (temporary) ------------
  // const $tweet = createTweetElement(tweetData);
  // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
}); // closing doc.ready funct

