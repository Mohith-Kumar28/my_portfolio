import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon,DocumentTextIcon,ArrowLeftIcon, ArrowRightIcon,ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function SideBar() {
  const [open, setOpen] = useState(false)

  const router=useRouter()

  const menuItems=[
    {
        name:'HOME',
        href:'/',
        isActive:false
    },
    {
        name:'WORKS',
        href:'/works',
        isActive:false
    },
    {
        name:'ABOUT-ME',
        href:'/about',
        isActive:false
    },
    {
        name:'CONTACT',
        href:'/about#contact',
        isActive:false
    },
  ]
  const [menu, setMenu] = useState(menuItems)

  useEffect(() => {
    const newMenu=   menu.map((m)=>{
    // console.log(router.)
     
      if(router.pathname==m.href){
        m.isActive=true
     return m
      }
      return m
    }
    )
  setMenu(newMenu)
    
  }, [router])

  return (
    // <Transition.Root show={open} as={Fragment}>
      <div >
      

            <div className="pointer-events-none h-screen   flex ">
              {/* <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              > */}
                <div className={`pointer-events-auto   h-full   ${open?'w-48 absolute z-50':'w-16 '} md:relative md:w-48 `}>
                  
                  
                  <div className="flex  h-full flex-col  bg-pri-purple-dark py-6 pt-0 px-4 shadow-xl ">
                    <div className='justify-between flex-grow flex flex-col'>
                    <div className="px-4 sm:px-6 flex flex-col h-64">
                  <div className='w-[2px] rounded-full flex-grow flex bg-white'></div>
                  <div className='w-9 flex flex-col gap-2 -ml-4 mt-3'>
                  <Link target='_blank' className='hover:bg-pri-purple rounded-lg   my-auto ml-auto' href={'https://bit.ly/3Ylzsw7'}>
    <Image  alt='icon' width={1000} height={1000} src={'/assets/icons/outline/github.png'}/>
    </Link>
                  <Link target='_blank' className='hover:bg-pri-purple rounded-lg my-auto ml-auto' href={'https://bit.ly/3Yj6jBy'}>
    <Image  alt='icon' width={1000} height={1000} src={'/assets/icons/outline/linkedin.png'}/>
    </Link>
                  <Link target='_blank' className='hover:bg-pri-purple rounded-lg my-auto ml-auto ' href={'mailto:mohithkumar808@gmail.com'}>
    <Image className='opacity-80'  alt='icon' width={1000} height={1000} src={'/assets/icons/outline/email.png'}/>
    </Link>


    <div onClick={()=>setOpen(!open)} className='md:hidden justify-center mt-6 flex cursor-pointer relative'>
  {open?(
    //  <ChevronLeftIcon  className='w-12  rounded-full bg-white text-pri-black p-1'/>
    <button className='h-11 w-11  aspect-square rounded-full text-4xl bg-white text-pri-black font-extrabold '><span className='absolute top-0 left-2'> &lt;</span></button>
  ):(
  // <ArrowRightIcon className='w-12 rounded-full bg-white text-pri-black p-1'/>
  <button className='h-11 w-11  aspect-square rounded-full text-4xl bg-white text-pri-black font-extrabold '><span className='absolute top-0 left-2'> &gt;</span></button>
  )}
</div>
                  </div>
                    </div>
                   <div className={`${open?'':'hidden'} md:flex text-xl mt-6 flex flex-col gap-y-6 px-4 sm:px-6`}>
                        
                        {menu.map((i)=>(
                          <Link key={i.name} href={i.href}>
                            <div  className={` text-pri-purple cursor-pointer hover:text-white ${i.isActive?'text-white border-b-2 inline border-dashed font-bold':''}`}><span className='text-pri-purple'># </span>{i.name}</div>
                            </Link>   ))}
                    </div>
                    </div>
                   <Link target='_blank' href={'/assets/resume.pdf'} className={`${open?'w-full':'hidden'} md:block md:w-full `}>                  <div className='border-pri-purple text-center  border-2 mx-3 mt-5 py-2 hover:bg-white hover:text-pri-purple font-bold flex justify-center gap-2  shadow-lg shadow-pri-purple/30' ><DocumentTextIcon className='w-4'/> RESUME</div>
                    </Link>


                  </div>
                </div>
              {/* </Transition.Child> */}
            </div>
        
      </div>
    // </Transition.Root>
  )
}
