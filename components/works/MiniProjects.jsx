import React from "react";
import MiniProjectCard from "./MiniProjectCard";

const MiniProjects = ({ miniProjects }) => {
  return (
    <div id="miniProjects" className="my-20 p-6">
      {" "}
      <h2 className="font-bold text-2xl">
        <span className="text-pri-purple"> /</span>Mini Projects
      </h2>
      <div className="flex flex-wrap w-full gap-6 mt-4">
        {miniProjects.map((project) => (
          <MiniProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
