import React from 'react'
import SideBar from './SideBar'

const Structure = ({children}) => {
  return (
    <div className='flex h-screen'>
      <div className=" ">
    <SideBar/>
    </div>
    <div className='flex-grow bg-pri-black'>    {children}
    </div>

   </div>
  )
}

export default Structure