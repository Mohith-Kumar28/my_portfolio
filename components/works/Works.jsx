import React from 'react'
import FeaturedCard from './FeaturedCard'
import MiniProjectCard from './MiniProjectCard'

const Works = () => {
    const projects=[
        {
            img:'/assets/works/foozy_app.png',
            name:'Foozy',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
            live_link:'',
            github_link:'',
            skills:['html','react','express','figma','tailwindCSS'],
            live_icon:''
        },
        {
            img:'/assets/works/foozy_app.png',
            name:'Foozy1',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
            live_link:'',
            github_link:'',
            skills:['html','react','express']
        },
    ]
  return (
    <div className='h-screen overflow-y-auto p-6 flex flex-col  bg-pri-black '>
      
      <div className='my-6'> <h2 className='font-bold text-2xl'>
<span className='text-pri-purple'> /</span>Featured Projects
</h2>

<div className=' flex flex-col  relative gap-6 mt-4'>
    {projects.map((project)=>(
    <FeaturedCard key={project.name} project={project}/>
    ))}
    
</div>
</div>


      <div className='my-20 '> <h2 className='font-bold text-2xl'>
<span className='text-pri-purple'> /</span>Mini Projects
</h2>
<div className='flex flex-wrap w-full gap-6 mt-4'>
    {projects.map((project)=>(
    <MiniProjectCard key={project.name} project={project}/>
    ))}
    
</div>
</div>
    </div>
  )
}

export default Works