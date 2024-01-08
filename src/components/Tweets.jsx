import React from 'react'

function Tweets({name,tweet,setTweet,tweets}) {
  
  const deleteTweet = ()=>{
    setTweet(tweets.filter((t)=> t.id !==tweet.id))
  }

  return (
    <div className='tweet'>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  )
}

export default Tweets