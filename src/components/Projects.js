import React from "react";

import ProjectCard from "./ProjectCard";
import { BsThreeDots, BsArrowRight } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

import waveSVG from "../imgs/wave.svg";

const Projects = () => {
  return (
    <>
      <img className="select-none transform translate-y-1" src={waveSVG} />
      <div className="bg-primary pb-32">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-2xl mt-5 text-white font-bold">My Projects</h2>
        </div>

        <div className="mt-10 mx-auto max-w-xl flex flex-col gap-5 justify-items-center">
          <ProjectCard
            link="https://play.google.com/store/apps/details?id=com.DigikattStudios.Chromeleon"
            label="Chromeleon"
            description="A Unity game I published on Google Play back in 2016."
            buttonLabel="Google Play"
            imgurl="https://i.ibb.co/rkMgN7M/chromeleonfeature.png"
            icon={<FaGooglePlay />}
          />
          <ProjectCard
            link="https://cafely-vercel-test-blankeos.vercel.app/login"
            label="Cafe.ly"
            description="A product review website for coffee for my Software Engineering class. It's still in progress but it has working auth with Firebase."
            buttonLabel="Visit Site"
            imgurl="https://i.ibb.co/MgKwDMz/image.png"
            icon={<BsArrowRight size="1.2em" />}
          />
          <ProjectCard
            link="https://blankeos.github.io/react-pokemon-search/#/"
            label="React Pokemon Search"
            description="A small project to practice fetching API and rendering them on react."
            buttonLabel="Visit Site"
            imgurl="https://i.ibb.co/MP1tsYL/image.png"
            icon={<BsArrowRight size="1.2em" />}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
