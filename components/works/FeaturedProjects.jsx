import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedProjects = ({ projects }) => {
  return (
    <div className="my-6 p-6">
      {" "}
      <h2 className="font-bold text-2xl">
        <span className="text-pri-purple"> /</span>Featured Projects
      </h2>
      <div className=" flex flex-col  relative gap-6 mt-4">
        {projects.map((project) => (
          <FeaturedCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
