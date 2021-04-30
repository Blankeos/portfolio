import React from "react";
import chromeleon from "../imgs/chromeleonfeature.png";

const ProjectCard = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className="flex flex-col md:flex-row w-full bg-white rounded-lg hover:shadow-xl transition overflow-hidden">
        <div className="w-full h-64 md:w-64 md:h-64 overflow-hidden flex-shrink-0">
          <div
            className="w-full h-full flex md:w-64 md:h-64 transform transition hover:scale-110"
            style={{
              backgroundImage: `url(${props.imgurl}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transitionDuration: "1s",
            }}
          ></div>
        </div>

        <div className="flex p-8 flex-col flex-wrap justify-between items-start space-y-2">
          <div className="text-left flex flex-col space-y-8">
            <h3 className="text-gray-800 font-bold text-lg text-left">
              {props.label && props.label}
            </h3>
            <p className="text-sm text-gray-700">{props.description}</p>
          </div>
          {props.buttonLabel && (
            <button className="flex space-x-2 items-center text-sm bg-primary hover:bg-blue-600 text-white rounded py-2 px-5 transform transition hover:scale-105">
              <span className="relative transform -translate-x-1">
                {props.icon && props.icon}
              </span>
              {props.buttonLabel}
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
