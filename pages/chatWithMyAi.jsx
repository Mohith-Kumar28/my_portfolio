import ChatHome from "@/components/ChatHome";
import About from "@/components/about/About";
import Structure from "@/components/layout/Structure";
import React from "react";

const chatWithMyAi = () => {
  return (
    <div>
      <Structure>
        {/* <About/> */}
        <ChatHome />
      </Structure>
    </div>
  );
};

export default chatWithMyAi;
