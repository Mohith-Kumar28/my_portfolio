import { Inter } from "next/font/google";
// import ChatHome from '@/components/ChatHome'

import Structure from "@/components/layout/Structure";
import About from "@/components/about/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Structure>
        {/* <ChatHome/> */}

        <About />
      </Structure>
    </>
  );
}
