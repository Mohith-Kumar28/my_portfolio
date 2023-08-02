import Link from 'next/link'
import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const Contact = () => {
  return (
    <div id='contact' className='p-6 '>
    <h2 className='font-bold text-2xl mb-8'>
<span className='text-pri-purple'> /</span>Contact me
</h2>

<div className='flex flex-col-reverse md:flex md:flex-row'>
<div className=''>
<p className='text-pri-gray pb-8 md:pr-20'>
Feel free to reach out to me for job opportunities, freelance projects, or any other inquiries you may have. I'm excited to hear from you and explore potential collaborations. Let's connect and create something amazing together! </p>

</div>
<div className=' '>
{/* <Image className='' alt='profilepic' width={1000} height={1000} src={'/assets/about/funFactsPic.png'}/> */}
<Link href={'mailto:mohithkumar808@gmail.com'}>
<div className='group font-bold text-center border-2  border-pri-purple shadow-2xl shadow-pri-purple/50 hover:border-pri-purple hover:bg-transparent bg-pri-purple text-xl  hover:text-pri-white p-4'>
    MAIL ME
    <div className='group-hover:text-pri-gray text-base text-pri-black flex gap-2 justify-center'><EnvelopeIcon className='w-4'/>mohithkumar808@gmail.com</div>
</div></Link>
</div>
</div>
</div>
  )
}

export default Contact