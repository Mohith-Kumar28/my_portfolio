import Image from 'next/image'
import React from 'react'
import { LinkIcon } from '@heroicons/react/24/solid'

const MiniProjectCard = ({project}) => {
  return (
    <div className='w-full md:w-[47%] h-fit border border-pri-gray bg-gray-900'>
{/* <Image width={300} height={300} src={project.img}/> */}
<div className='border-y flex flex-wrap px-3 py-1 border-pri-gray gap-x-3'>
    {project.skills.map((p)=>{
        return <span><span className='text-pri-purple'> #</span>{p}</span>
    })}
</div>

<div className='p-3'><h3 className='font-bold text-lg '>
    
{project.name} 
</h3>
<p className='text-pri-gray leading-5'>
{project.description}

</p>
<div className='flex justify-between mt-4'></div>
<button className='border border-pri-purple px-3 py-1 flex'>
    LIVE
    <LinkIcon className='w-4 ml-2 mt-1'/>
</button>
</div>

    </div>
  )
}

export default MiniProjectCard