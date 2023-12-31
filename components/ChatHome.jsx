import React, { useEffect, useRef, useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { BackspaceIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import ChatList from './ChatList';

import ReCAPTCHA from 'react-google-recaptcha';
import Loading from './anim/Loading';



const ChatHome = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [lastMessageTime, setLastMessageTime] = useState(0);

  const recaptchaRef = useRef(null);
  const inputReference = useRef(null);


  const [loadingText, setLoadingText] = useState("Loading.......")



//   useEffect(() => {
//     const prevTxt=loadingText
//   const interval=setInterval(() => {
// // if(loadingText.length>=10){
// //   console.log('hi')
// //   setLoadingText('Loading')
// // }else{
//   console.log(loadingText)
//       setLoadingText(loadingText+'..//') 
      
// // } 

// }, 1000);
// return ()=>{clearInterval(interval)}
//   }, [])



  // Load message count and last message time from local storage on component mount
  useEffect(() => {
    inputReference.current.focus();
  
    const storedMessageCount = localStorage.getItem('messageCount');
    const storedLastMessageTime = localStorage.getItem('lastMessageTime');
    if (storedMessageCount) {
      setMessageCount(parseInt(storedMessageCount));
    }
    if (storedLastMessageTime) {
      setLastMessageTime(parseInt(storedLastMessageTime));
    }
  }, []);

  // Save message count and last message time to local storage on component update
  // useEffect(() => {
  //   // if(messageCount!=0&&lastMessageTime!=0){
  //   // localStorage.setItem('messageCount', messageCount);
  //   // localStorage.setItem('lastMessageTime', lastMessageTime);
  //   // }
  //   console.log('messageCount', localStorage.getItem('messageCount'))
  //   console.log('lastMessageTime', lastMessageTime)
  // }, [messageCount, lastMessageTime]);




  const handleSubmit = async (e) => {
    e.preventDefault();
  

    // recaptch verification
    const recaptchaResponse = await recaptchaRef.current.executeAsync();
    if (!recaptchaResponse) {
      alert('Please verify that you are not a robot.');
      return;
    }

if(userInput!==''){

// Check if the maximum number of messages per minute (20) is reached
const currentTime = Date.now();
if( currentTime - lastMessageTime >= 60000){
  setMessageCount(0);
  localStorage.setItem('messageCount',  0);
  setLastMessageTime(currentTime);
  localStorage.setItem('lastMessageTime', currentTime);
}
// console.log(currentTime - lastMessageTime)
if (messageCount >= 10 && currentTime - lastMessageTime <= 60000) {
  

  alert('You have reached the maximum number of messages per minute. wait for one minute to send more questions');
  return;
}


  setUserInput('');
    // Make an API request to the chat API
    setLoading(true)
    let response
    try {
      
   
     response = await axios.post(
      `https://fastapigpt-production.up.railway.app/chat/`,
      {
        question:userInput
    }
    );
  } catch (error) {
    setLoading(false)
    console.log(error)
     return
  }
 
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

   


    // Update the message count and last message time
    setMessageCount((prevCount) => prevCount + 1);
    

    localStorage.setItem('messageCount',  messageCount + 1);

  }
  };


  const sampleQuestion=[
    'Can you tell me about yourself?',
    "What projects have you worked on?",
    "Give your contact details.",
    "How is this chat bot working?",
    'Describe a project you worked on that you are particularly proud of.',
    'Can you walk me through your problem-solving process?',
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
    <div className={`text-pri-white relative   flex flex-col w-full min-h-screen   ${chatHistory[0]?'justify-end ':'justify-center   p-6 align-middle'} `}
    >
<div className='w-full  mx-auto'>
      {chatHistory.length==0&&(<>
<h1 className='font-bold text-3xl '>
Hi i am<span className='text-pri-purple shadow-2xl shadow-pri-purple/50'> Mohith</span>, Ask my<br/> my  <span className='text-pri-purple'>AI assistant </span> about me
</h1>
</>)}



<div className={`${chatHistory[0]?'bg-pri-black w-full p-5 absolute left-0 bottom-0 px-5':'my-9'}`}>

<div className={`flex   relative `}>
 {chatHistory[0]&& <div onClick={()=>{clearStates()}} title='Clear Chat' className='border  bg-pri-white p-2 hover:bg-pri-black hover:text-pri-white text-pri-black border-pri-white cursor-pointer'>
    <BackspaceIcon  className=' w-10   '/>
  </div>}
  <form className='w-full' onSubmit={(e)=>{handleSubmit(e)}} action="">
<input ref={inputReference} disabled={loading} value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder={loading?loadingText:'Start asking about me...'} className={` ${chatHistory[0]?'bg-transparent border border-pri-white text-pri-white placeholder:text-pri-white ':'bg-white text-pri-black placeholder:text-pri-black focus:py-3 focus:border-4 focus:border-pri-purple'} pr-16   w-full   py-4 flex-grow px-5 font-bold text-pri-black placeholder:font-bold`} />
<button className={`${chatHistory[0]?'text-pri-white':'text-pri-black'} rounded-full hover:bg-gray-300 hover:text-pri-black p-2  cursor-pointer  absolute z-10 top-1 right-2`} type='submit'>
<PaperAirplaneIcon className='w-8 ' />
</button>
  {/* Add reCAPTCHA v3 here */}
  <div className='hidden'>
  <ReCAPTCHA   ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} size="invisible" />
  </div>
</form>
</div>
</div>


 {chatHistory.length==0&&(<>

<div className='border border-pri-gray my-6'>
  <div className='border  border-pri-gray p-2 font-b
  '>
These questions are just for reference, feel free to ask any custom question!
</div>

<div className='p-6 text-pri-gray grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6'>
  {sampleQuestion.map((que)=>( <div className='cursor-pointer hover:text-pri-white hover:font-bold' onClick={()=>{!loading&&(setUserInput(que), inputReference.current.focus())}} key={que} ># {que}</div>
  ))}
  
</div>

  </div>
  </>)}
  {chatHistory[0]&&

<ChatList chatHistory={chatHistory}/>
}





</div>
    </div>
  )
}

export default ChatHome