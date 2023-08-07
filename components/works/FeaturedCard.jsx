import Image from 'next/image'
import React from 'react'
import { LinkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const FeaturedCard = ({project}) => {
  return (

<div className=" md:w-full mx-auto  h-fit  rounded-xl  bg-gray-950 overflow-hidden border border-gray-800">
  <div className="md:flex-row flex flex-col w-full ">
   <div className='flex justify-center flex-col mx-6 mt-3 md:mt-0'>
    <span className='flex gap-2'>
    <span className='bg-gray-800 rounded-full w-4 h-4'></span>
    <span className='bg-gray-800 rounded-full w-4 h-4'></span>
    <span className='bg-gray-800 rounded-full w-4 h-4'></span>
    </span>
    </div>
    <div className='flex w-full'>
    <Link target='__blank' className='bg-gray-900 hover:outline text-pri-purple rounded-lg   px-4 m-3 py-2 md:w-full flex-grow' href={project.live_link}> <div className=" justify-between gap-x-3 flex">
      <span className='w-20 truncate md:w-full'>{project.live_link}</span>
   {project.live_icon&& <span className=' w-6'> <Image  alt='icon' width={100} height={100} src={project.live_icon}/></span>}
    </div></Link>
    {project.presentation_link&&
    <Link target='_blank' className='w-8 md:w-10 my-auto mr-3' href={project.presentation_link}>
    <Image className=' ' alt='icon' width={100} height={100} src={'/assets/icons/pptIcon.png'}/>
    </Link>
}
    {project.github_link&&
    <Link target='_blank' className='w-8 md:w-12 my-auto mr-3' href={project.github_link}>
    <Image className=' ' alt='icon' width={100} height={100} src={'/assets/icons/githubIcon.svg'}/>
    </Link>
}
</div>
  </div>


  <div className=' '>
    <div className=' md:flex  '>
<Image placeholder='blur' blurDataURL={project.img} alt='project' className='object-cover w-full md:w-1/3' width={800} height={800} src={project.img}/>

{/* <Link className="flex w-full justify-center align-middle bg-pri-purple" href={project.live_link}>

  <span className='flex underline flex-col font-bold text-lg justify-center'>
  VISIT -&gt; </span>

</Link> */}

<div className='flex flex-col bg-gray-900'>

<div className='p-3'><h3 className='font-bold text-lg '>
    
{project.name} 
</h3>
<p className='text-pri-gray leading-5'>
{project.description}

</p>
{/* <div className='flex justify-between mt-4'></div>
<button className='border border-pri-purple px-3 py-1 flex'>
    LIVE
    <LinkIcon className='w-4 ml-2 mt-1'/>
</button> */}
</div>


<div className='border-t-4 justify-end mt-auto border-dotted border-gray-700 flex flex-wrap px-3 py-2 gap-x-3'>
    {project.skills.map((p)=>{
        return <span key={p}><span className='text-pri-purple'> #</span>{p}</span>
    })}

</div>
</div>
    </div>
</div>
</div>
  
  )
}

export default FeaturedCard