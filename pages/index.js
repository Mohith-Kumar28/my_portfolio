import Image from 'next/image'
import { Inter } from 'next/font/google'
import SideBar from '@/components/layout/SideBar'
import ChatHome from '@/components/ChatHome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='flex min-h-screen'>
    <SideBar/>
    <ChatHome/>
   </div>
  )
}
