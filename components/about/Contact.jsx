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
<p className='text-pri-gray py-8 md:pr-16'>
I’m interested in Job, freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.  </p>

</div>
<div className=' '>
{/* <Image className='' alt='profilepic' width={1000} height={1000} src={'/assets/about/funFactsPic.png'}/> */}
<Link href={'mailto:mohithkumar808@gmail.com'}>
<div className='font-bold text-center border-2 border-pri-purple p-4'>
    MAIL ME
    <div className='text-pri-gray flex gap-2 justify-center'><EnvelopeIcon className='w-4'/>mohithkumar808@gmail.com</div>
</div></Link>
</div>
</div>
</div>
  )
}

export default Contact