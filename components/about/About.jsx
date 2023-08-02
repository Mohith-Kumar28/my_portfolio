import React from 'react'
import Intro from './Intro'
import Skills from './Skills'
import FunFacts from './FunFacts'
import Contact from './Contact'

const About = () => {
  return (
    <div className='overflow-y-auto h-screen flex flex-col gap-16'>
        <Intro/>
        <Skills/>
        <FunFacts/>
        <Contact/>
    </div>
  )
}

export default About