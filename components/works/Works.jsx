import React from "react";
import { miniProjects, projects } from "@/data/data";
import FeaturedProjects from "./FeaturedProjects";
import MiniProjects from "./MiniProjects";

const Works = () => {
  return (
    <div className="h-screen overflow-y-auto  flex flex-col text-pri-white  bg-pri-black ">
      {/* <div className="my-6">
        {" "}
        <h2 className="font-bold text-2xl">
          <span className="text-pri-purple"> /</span>Featured Projects
        </h2>
        <div className=" flex flex-col  relative gap-6 mt-4">
          {projects.map((project) => (
            <FeaturedCard key={project.name} project={project} />
          ))}
        </div>
      </div> */}
      <FeaturedProjects projects={projects} />
      <MiniProjects miniProjects={miniProjects} />
    </div>
  );
};

export default Works;
