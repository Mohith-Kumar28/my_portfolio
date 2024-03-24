import React from "react";
import FeaturedCard from "./FeaturedCard";
import MiniProjectCard from "./MiniProjectCard";

const Works = () => {
  const projects = [
    {
      img: "/assets/works/1.png",
      name: "Foozy",
      description:
        "Foozy is an innovative food pre-ordering platform that empowers local shops to easily register and manage online food orders and payments through its user-friendly interface. With Foozy, customers can conveniently place their orders in advance, providing a seamless and efficient food ordering experience for both shop owners and hungry customers.",
      live_link: "https://bit.ly/3D2AYsS",
      github_link: "",
      presentation_link: "https://bit.ly/3NLoNWo",
      skills: [
        "NextJS",
        "TailwindCSS",
        "ExpressJS",
        "MongoDB",
        "Redux",
        "Google OAuth",
        "Firebase OTP",
        "Push notification",
      ],
      live_icon: "/assets/icons/playStoreIcon.svg",
    },
    {
      img: "/assets/works/2.png",
      name: "Foozy UI/UX",
      description:
        "Foozy's Figma UI/UX design boasts a clean, modern interface, prioritizing user-friendliness and visual appeal. With intuitive wireframes and smooth user flows, it optimizes the food pre-ordering process, ensuring a seamless journey from selection to secure payment.",
      live_link: "https://bit.ly/3JSF9eS",
      github_link: "",
      skills: ["Figma", "User Interface", "User Experience"],
      live_icon: "/assets/icons/figmaIcon.png",
    },
    {
      img: "/assets/works/5.png",
      name: "Arena UI/UX",
      description:
        "This freelance project was developed using Figma to create a minimum viable product mobile design for a cricket betting application. The client's requirements emphasized a clean user interface (UI) with high interactivity.",
      live_link: "https://bit.ly/4alJWkl",
      github_link: "",
      skills: ["Figma", "User Interface", "User Experience"],
      live_icon: "/assets/icons/webIcon.png",
    },
    // {
    //   img: "/assets/works/3.png",
    //   name: "Portfolio website",
    //   description:
    //     "My portfolio website features a unique AI assistant trained with my data. Visitors can ask the AI assistant anything about me and receive informative answers. Powered by advanced technologies like langchain, llama-index, and OpenAI API, the AI assistant understands natural language queries and provides engaging responses. It is a personalized and interactive way for visitors to explore my work and learn more about my expertise as a UI/UX designer.",
    //   live_link: "https://www.mohith.in/",
    //   github_link: "https://github.com/Mohith-Kumar28/my_portfolio",
    //   skills: ["NextJS", "TailwindCSS", "Lamma-2", "LangChain", "OpenAI"],
    //   live_icon: "",
    // },
    {
      img: "/assets/works/6.png",
      name: "United 270 company landing page",
      description:
        "Despite encountering significant challenges, including a demanding and unreasonable client, I successfully completed this project according to their exact specifications. Regrettably, the resulting website suffered from poor design and slow loading times, reflecting the client's misguided direction. However, this experience served as a valuable lesson in patience, adaptability, and professionalism in navigating difficult client interactions.",
      live_link: "https://bit.ly/3TsYwiB",
      github_link: "https://github.com/Mohith-Kumar28/united270",
      skills: ["Controlling frustration 🥲", "NextJS", "TailwindCSS", "GSAP"],
      live_icon: "",
    },
    {
      img: "/assets/works/4.png",
      name: "WhatTo website",
      description:
        "My debut web project built with Django and authentication. It offers users a platform to explore top recommended YouTube videos and share personal favorites. While not production-ready, it marks my initial leap into web development, boosting my confidence and igniting my passion for learning new technologies.",
      live_link: "https://bit.ly/3q8fojV",
      github_link: "https://github.com/Mohith-Kumar28/whatto",
      skills: ["Django", "Web Development", "Python"],
      live_icon: "/assets/icons/webIcon.png",
    },
  ];
  const miniProjects = [
    {
      img: "",
      name: "ST.Augustine hospital landing page",
      description: "",
      live_link: "https://bit.ly/3IPaCgX",
      github_link:
        "https://github.com/Mohith-Kumar28/saint_augustine_hospital_website",
      skills: ["NextJS", "TailwindCSS"],
      live_icon: "",
    },

    {
      img: "",
      name: "Portfolio Website",
      description: "",
      live_link: "https://www.mohith.in/",
      github_link: "https://github.com/Mohith-Kumar28/my_portfolio",
      skills: ["NextJS", "TailwindCSS", "Lamma-2", "LangChain", "OpenAI API"],
      live_icon: "",
    },
    {
      img: "",
      name: "Portfolio UI/UX",
      description: "",
      live_link: "https://bit.ly/3OF24Nz",
      github_link: "",
      skills: ["Figma", "User Interface", "User Experience"],
      live_icon: "",
    },
    {
      img: "",
      name: "Globe Quest",
      description: "",
      live_link: "https://bit.ly/43U9DEz",
      github_link: "https://github.com/Mohith-Kumar28/mapup_assignment",
      skills: ["NextJS", "TailwindCSS", "Google Maps", "Redux"],
      live_icon: "",
    },
    {
      img: "",
      name: "Oakley",
      description: "",
      live_link: "https://bit.ly/3XK4ld7",
      github_link: "https://github.com/Mohith-Kumar28/Realestate-project",
      skills: ["NextJS", "TailwindCSS"],
      live_icon: "",
    },
    {
      img: "",
      name: "SpaceXplorer",
      description: "",
      live_link: "https://bit.ly/3Ohdvuv",
      github_link: "https://github.com/Mohith-Kumar28/spacex_visualization",
      skills: ["NextJS", "Redux"],
      live_icon: "",
    },
    {
      img: "",
      name: "TouchSky",
      description: "",
      live_link: "https://bit.ly/43eZIZS",
      github_link: "https://github.com/Mohith-Kumar28/jobs_website",
      skills: ["NextJS", "TailwindCSS"],
      live_icon: "",
    },
    {
      img: "",
      name: "Boujee",
      description: "",
      live_link: "https://bit.ly/3ri9zAT",
      github_link: "https://github.com/Mohith-Kumar28/data_website",
      skills: ["NextJS", "TailwindCSS"],
      live_icon: "",
    },
    {
      img: "",
      name: "Mystic Beauty",
      description: "",
      live_link: "https://bit.ly/3QgYI4H",
      github_link: "https://github.com/Mohith-Kumar28/cosmetics_website",
      skills: ["NextJS", "TailwindCSS"],
      live_icon: "",
    },
    {
      img: "",
      name: "Menu Design",
      description: "",
      live_link: "https://bit.ly/43iOLXh",
      github_link: "",
      skills: ["Canva"],
      live_icon: "",
    },
    {
      img: "",
      name: "UI/UX contribution",
      description: "",
      live_link: "https://bit.ly/46GZlKA",
      github_link: "",
      skills: ["Figma"],
      live_icon: "",
    },
    {
      img: "",
      name: "Trained AI Gpt API",
      description: "",
      live_link: "",
      github_link: "https://bit.ly/43Rh2V0",
      skills: ["Python", "Fast API", "Lamma-2", "OpenAI"],
      live_icon: "",
    },
  ];
  return (
    <div className="h-screen overflow-y-auto p-6 flex flex-col text-pri-white  bg-pri-black ">
      <div className="my-6">
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

      <div className="my-20 ">
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
    </div>
  );
};

export default Works;
