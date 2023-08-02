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
    Hello, I'm Mohith!
     A passionate and self-taught front-end developer located in Hyderabad, India. With a strong flair for creativity and web development, I excel at crafting responsive and user-friendly websites from scratch.<br/><br/> Over the past year, I have been dedicated to transforming my knowledge into captivating web experiences, assisting numerous clients in establishing their online presence. Always eager to stay up-to-date with the latest technologies and frameworks, I am committed to delivering innovative solutions for the digital world.
    </p></div>
<div className=' w-full md:w-1/3'>
    <Image alt='profilepic' width={700} height={700} src={'/assets/about/aboutMePic.png'}/>
    </div>
</div>
    </div>
  )
}

export default Intro