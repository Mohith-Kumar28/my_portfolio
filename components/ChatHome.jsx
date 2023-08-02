import React, { useEffect, useRef, useState } from 'react'
import { PaperAirplaneIcon,BackspaceIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import ChatList from './ChatList';

const ChatHome = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
if(userInput!==''){
  setUserInput('');
    // Make an API request to the chat API
    setLoading(true)
    const response = await axios.post(
      `https://fastapigpt-production.up.railway.app/chat/`,
      {
        question:userInput
    }
    );
 
setLoading(false)
    // Update the chat history with the user input and response
    setChatHistory((prevHistory) => [
      ...prevHistory,
   {question:userInput,
      answer:response.data.response
  }
    ]);

    console.log([ ...chatHistory,
      {question:userInput,
         answer:response.data.response
     }])

    // Clear the user input field
   
  }
  };


  const sampleQuestion=[
    'Can you tell me about yourself?',
    'Can you walk me through your problem-solving process?',
   'Describe a project you worked on that you are particularly proud of.',
   'How do you approach collaboration and working in a team environment?',
   'What are your strengths and weaknesses as a professional?',
   'How do you stay updated with the latest industry trends and technologies?',
   'Tell me about a time when you had to deal with conflicting priorities and how you managed them.',
   
  ]


  const clearStates=()=>{
    setUserInput('')
    setLoading(false)
    setChatHistory([])

  }


  return (
    <div className={` relative  flex flex-col w-full h-screen  ${chatHistory[0]?'justify-end ':'justify-center  p-6 align-middle'} `}
    >
<div className=' mx-auto'>
      {chatHistory.length==0&&(<>
<h1 className='font-bold text-3xl'>
Hi i am<span className='text-pri-purple'> Mohith</span>, Ask my<br/> my  <span className='text-pri-purple'>AI assistant </span> about me
</h1>
<div className='border border-pri-gray my-6'>
  <div className='border border-pri-gray p-2 font-b
  '>
These questions are just for reference, feel free to ask any custom question!
</div>

<div className='p-6 text-pri-gray grid grid-cols-1 sm:grid-cols-2 gap-1'>
  {sampleQuestion.map((que)=>( <div key={que} className=''># {que}</div>
  ))}
  
</div>

  </div>
  </>)}
  {chatHistory[0]&&

<ChatList chatHistory={chatHistory}/>
}



<div className={`${chatHistory[0]?'bg-pri-black w-full p-5 absolute left-0 bottom-0 px-5':''}`}>

<div className={`flex   relative `}>
 {chatHistory[0]&& <div onClick={()=>{clearStates()}} title='Clear Chat' className='border hover:bg-pri-white p-2 bg-pri-black text-pri-white hover:text-pri-black border-pri-white cursor-pointer'>
    <BackspaceIcon  className=' w-8   '/>
  </div>}
  <form className='w-full' onSubmit={(e)=>{handleSubmit(e)}} action="">
<input disabled={loading} value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder={loading?'loading...':'Start typing...'} className={` ${chatHistory[0]?'bg-transparent border border-pri-white text-pri-white placeholder:text-pri-white ':'bg-white text-pri-black placeholder:text-pri-black'} pr-16   w-full   py-3 flex-grow px-5  placeholder:font-bold`} />
<button className={`${chatHistory[0]?'text-pri-white':'text-pri-black'} rounded-full hover:bg-gray-300 hover:text-pri-black p-2  cursor-pointer  absolute z-10 top-1 right-2`} type='submit'>
<PaperAirplaneIcon className='w-6 ' />
</button>
</form>
</div>
</div>
</div>
    </div>
  )
}

export default ChatHome