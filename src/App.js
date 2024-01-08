import React,{useState} from 'react';
import Tweetlist from './components/Tweetlist';
import Create from './components/Create';


function App() {
   const [name,setName]=useState('Raihan')
   const [textInput , setText]=useState("")
  const [tweet , setTweet]=useState([])
   
    return(
     <div>
        
        <Create textInput={textInput}
        setText={setText}
        tweet={tweet}
        setTweet={setTweet}
        />
        <Tweetlist setTweet={setTweet} name = {name} tweets={tweet}/>
       
     </div>
    )
}


export default App