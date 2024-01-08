import React from 'react'
import Tweets from './Tweets'


function Tweetlist({ name, tweets , setTweet }) {
  return (
    <div className="tweetlist">
      {tweets.map((item) => (
        <Tweets key={item.id} setTweet={setTweet} name={name} tweet={item} tweets={tweets} />
      ))}
    </div>
  );
}



export default Tweetlist