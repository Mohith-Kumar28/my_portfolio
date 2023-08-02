import React from 'react'
import FeaturedCard from './FeaturedCard'
import MiniProjectCard from './MiniProjectCard'

const Works = () => {
    const projects=[
        {
            img:'/assets/works/foozy_app.png',
            name:'Foozy',
            description:'Foozy is an innovative food pre-ordering platform that empowers local shops to easily register and manage online food orders and payments through its user-friendly interface. With Foozy, customers can conveniently place their orders in advance, providing a seamless and efficient food ordering experience for both shop owners and hungry customers.',
            live_link:'https://bit.ly/3D2AYsS',
            github_link:'',
            skills:['NextJS','TailwindCSS','ExpressJS','MongoDB',"Redux"],
            live_icon:'/assets/icons/playStoreIcon.svg'
        },
        {
            img:'/assets/works/foozy_app.png',
            name:'Foozy UI/UX',
            description:"Foozy's Figma UI/UX design boasts a clean, modern interface, prioritizing user-friendliness and visual appeal. With intuitive wireframes and smooth user flows, it optimizes the food pre-ordering process, ensuring a seamless journey from selection to secure payment.",
            live_link:'https://bit.ly/3JSF9eS',
            github_link:'',
            skills:['Figma','User Interface','User Experience'],
            live_icon:'/assets/icons/figmaIcon.png'
        },
        {
            img:'/assets/works/foozy_app.png',
            name:'WhatTo website',
            description:"Confused about what to watch on Youtube? Never get bored again, as you can watch any one from top videos recomended by others or share your favourite YouTube videos.",
            live_link:'https://bit.ly/3q8fojV',
            github_link:'https://github.com/Mohith-Kumar28/whatto',
            skills:['Django','Web Development'],
            live_icon:'/assets/icons/webIcon.png'
        },
    ]
    const miniProjects=[
        {
            img:'',
            name:'Globe Quest',
            description:'',
            live_link:'https://bit.ly/43U9DEz',
            github_link:'https://github.com/Mohith-Kumar28/mapup_assignment',
            skills:["NextJS","TailwindCSS","Google Maps","Redux"],
            live_icon:''
        },
        {
            img:'',
            name:'Portfolio website',
            description:'',
            live_link:'',
            github_link:'https://github.com/Mohith-Kumar28/my_portfolio',
            skills:["NextJS","TailwindCSS","Lamma-2","OpenAI"],
            live_icon:''
        },
        {
            img:'',
            name:'Portfolio UI/UX',
            description:'',
            live_link:'https://bit.ly/3OF24Nz',
            github_link:'',
            skills:['Figma','User Interface','User Experience'],
            live_icon:''
        },
        {
            img:'',
            name:'Oakley',
            description:'',
            live_link:'https://bit.ly/3XK4ld7',
            github_link:'https://github.com/Mohith-Kumar28/Realestate-project',
            skills:["NextJS","TailwindCSS"],
            live_icon:''
        },
        {
            img:'',
            name:'SpaceXplorer',
            description:'',
            live_link:'https://bit.ly/3Ohdvuv',
            github_link:'https://github.com/Mohith-Kumar28/spacex_visualization',
            skills:["NextJS","Redux"],
            live_icon:''
        },
        {
            img:'',
            name:'TouchSky',
            description:'',
            live_link:'https://bit.ly/43eZIZS',
            github_link:'https://github.com/Mohith-Kumar28/jobs_website',
            skills:["NextJS","TailwindCSS"],
            live_icon:''
        },
        {
            img:'',
            name:'Boujee',
            description:'',
            live_link:'https://bit.ly/3ri9zAT',
            github_link:'https://github.com/Mohith-Kumar28/data_website',
            skills:["NextJS","TailwindCSS"],
            live_icon:''
        },
        {
            img:'',
            name:'Mystic Beauty',
            description:'',
            live_link:'https://bit.ly/3QgYI4H',
            github_link:'https://github.com/Mohith-Kumar28/cosmetics_website',
            skills:["NextJS","TailwindCSS"],
            live_icon:''
        },
        {
            img:'',
            name:'Menu Design',
            description:'',
            live_link:'https://bit.ly/43iOLXh',
            github_link:'',
            skills:["Canva"],
            live_icon:''
        },
        {
            img:'',
            name:'UI/UX contribution',
            description:'',
            live_link:'https://bit.ly/46GZlKA',
            github_link:'',
            skills:["Figma"],
            live_icon:''
        },
        {
            img:'',
            name:'Trained AI Gpt API',
            description:'',
            live_link:'',
            github_link:'https://bit.ly/43Rh2V0',
            skills:["Python","Fast API","Lamma-2","OpenAI"],
            live_icon:''
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
    {miniProjects.map((project)=>(
    <MiniProjectCard key={project.name} project={project}/>
    ))}
    
</div>
</div>
    </div>
  )
}

export default Works