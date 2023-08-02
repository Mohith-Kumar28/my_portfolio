import { Fragment, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SideBar() {
  const [open, setOpen] = useState(true)

  const menuItems=[
    {
        name:'Home',
        href:'/',
        isActive:true
    },
    {
        name:'Works',
        href:'/works',
        isActive:false
    },
    {
        name:'Contacts',
        href:'#',
        isActive:false
    },
    {
        name:'About-me',
        href:'/about',
        isActive:false
    },
  ]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Disclosure as="div"   onClose={setOpen}>
      

            <div className="pointer-events-none h-screen   flex ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Disclosure.Panel className="pointer-events-auto relative  w-48">
                  
                  
                  <div className="flex  h-full flex-col  bg-pri-purple-dark py-6 px-4 shadow-xl ">
                    <div className='justify-between flex-grow flex flex-col'>
                    <div className="px-4 sm:px-6 ">
                  
                    </div>
                    <div className=" text-xl mt-6 flex flex-col gap-y-6 px-4 sm:px-6">
                        
                        {menuItems.map((i)=>(
                          <Link key={i.name} href={i.href}>
                            <div  className={` text-pri-gray cursor-pointer hover:text-white ${i.isActive?'text-white font-bold':''}`}><span className='text-pri-purple'># </span>{i.name}</div>
                            </Link>   ))}
                    </div>
                    </div>
                  <button className='border-pri-purple border-2 mx-3 mt-5 py-2 hover:bg-white hover:text-pri-purple font-bold'>RESUME</button>
                  </div>
                </Disclosure.Panel>
              </Transition.Child>
            </div>
        
      </Disclosure>
    </Transition.Root>
  )
}
