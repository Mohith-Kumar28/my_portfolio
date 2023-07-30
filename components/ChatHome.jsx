import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

const ChatHome = () => {
  const sampleQuestion=[
    'question1',
    'question2',
    'question3',
    'question4',
    'question5',
  ]
  return (
    <div className='bg-black  flex flex-col justify-center align-middle p-6'
    >
<h1 className='font-bold text-3xl'>
Hi i am<span className='text-pri-purple'> Mohith</span>, Chat  with<br/> my trained <span className='text-pri-purple'>AI assistant </span>
</h1>
<div className='border border-pri-gray my-6'>
  <div className='border border-pri-gray p-2 font-b
  '>
These questions just for reference, so feel free to ask any custom question!
</div>

<div className='p-6 text-pri-gray grid grid-cols-1 sm:grid-cols-2 gap-1'>
  {sampleQuestion.map((que)=>( <div key={que} className=''># {que}</div>
  ))}
  
</div>


</div>
<div className='flex bg-white relative'>
<input type="text" placeholder='Start typing...' className='w-full bg-transparent py-3 px-5 text-pri-black placeholder:text-pri-black placeholder:font-bold' />
<PaperAirplaneIcon className='w-6 -rotate-45 cursor-pointer text-pri-black absolute z-10 top-2 right-3'/>
</div>
    </div>
  )
}

export default ChatHome