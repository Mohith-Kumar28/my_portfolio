import React from "react";
import SideBar from "./SideBar";

const Structure = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className=" ">
        <SideBar />
      </div>
      <div className="flex-grow bg-pri-black overflow-y-auto h-screen">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default Structure;
