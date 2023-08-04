import Image from 'next/image'
import React from 'react'

const FunFacts = () => {
    const facts=[
        'I like Trakpad than Mouse',
        // 'I am an Introvert',
        'I like watching youtube with 2x speed',
        'I can speak three languages fluently: English, Hindi, and Telugu',
        'My favourite super hero is Iron Man',
        'I dont have any siblings',
        'I am a night owl',
        'I am a die-hard fan of sci-fi movies',
        'I learn everything from youtube',
        'I prefer project based learning',
    ]
  return (
    <div className='p-6 '>
        <h2 className='font-bold text-2xl mb-8'>
<span className='text-pri-purple'> /</span>Fun-Facts about me
</h2>

<div className='flex flex-col-reverse md:flex md:flex-row'>
    <div className='md:w-3/4'>
  <div className='flex flex-wrap justify-center md:justify-start gap-3 pr-10'>
    {facts.map((f,i)=>(
        <span className='border border-pri-gray px-2 py-1' key={i}>{f}</span>
    ))}
  </div>
    
    </div>
<div className=' mr-auto w-2/3 mb-10 md:w-1/4 md:-mt-16'>
    <Image className='' alt='profilepic' width={1000} height={1000} src={'/assets/about/funFactsPic.png'}/>
    </div>
</div>
    </div>
  )
}

export default FunFacts