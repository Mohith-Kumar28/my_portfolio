import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div className='p-6'>
        <h2 className='font-bold text-2xl mb-8'>
<span className='text-pri-purple'> /</span>Intro
</h2>

<div className='flex flex-col-reverse md:flex md:flex-row'>
    <div className='md:w-2/3'>
    <p className='text-pri-gray py-8 md:pr-16'>
    Hello, i’m Elias!

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
    </p></div>
<div className=' w-full md:w-1/3'>
    <Image alt='profilepic' width={700} height={700} src={'/assets/about/aboutMePic.png'}/>
    </div>
</div>
    </div>
  )
}

export default Intro