import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import FunFacts from "./FunFacts";
import Contact from "./Contact";
import FeaturedProjects from "../works/FeaturedProjects";
import { projects } from "@/data/data";
import FeaturedProjectsScrollCarousel from "../works/FeaturedProjectsScrollCarousel";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="overflow-y-auto h-screen flex flex-col gap-16 text-pri-white">
      <Intro />
      <Skills />
      {/* <FeaturedProjectsScrollCarousel /> */}
      <div>
        <FeaturedProjects projects={projects} />
        <div className="flex justify-start ml-6">
          <Link className="hover:outline  " href={"/works#miniProjects"}>
            <button className="border hover:outline border-pri-purple px-3 py-1 flex">
              VIEW_MORE_PROJECTS
              <LinkIcon className="w-4 ml-2 mt-1" />
            </button>
          </Link>
        </div>
      </div>
      <FunFacts />
      <Contact />
    </div>
  );
};

export default About;
