import React, { useEffect, useRef } from 'react'


function TextFormat(props) {
    const text = props;
    const newText = text.split('\n').map((str,i) => <p key={i}>{str}</p>);
    
    return newText;
  }

const ChatList = ({chatHistory}) => {
    const messagesEndRef = useRef(null)
    useEffect(() => {
        if(chatHistory[0]){
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          }, [chatHistory]);
  return (
    <div className=''>
        <div className="space-y-2 pb-32 pt-12  overflow-y-auto h-screen ">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`p-5  ${index%2==0&&'bg-sec-black'}`}
          >
            <p className='font-bold pb-4'>
          <span className='text-pri-purple font-bold'>/</span>{chat.question}<span className='text-pri-purple'>/</span></p>
          <span>
           {TextFormat(chat.answer)}
           </span>
          </div>
        ))}
        
<div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default ChatList