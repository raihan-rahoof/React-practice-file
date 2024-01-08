import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


function Create({textInput,setText,setTweet,tweet}) {

  

  const useInput = (e)=>{
      setText(e.target.value)
  }

  const tweetHandler = (e)=>{
    e.preventDefault()
    setTweet([...tweet,{message:textInput , id:uuidv4() }])
    setText("")
  }

  return (
    <form onSubmit={tweetHandler}>
      <textarea value={textInput} onChange={useInput} cols="50" rows="5"></textarea>
      <button>submit </button>
      
    </form>
  )
}

export default Create