import Image from 'next/image'
import { Inter } from 'next/font/google'
import SideBar from '@/components/layout/SideBar'
import ChatHome from '@/components/ChatHome'

import Structure from '@/components/layout/Structure'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 
    <Structure>
      
    <ChatHome/>

    </Structure>

  )
}
