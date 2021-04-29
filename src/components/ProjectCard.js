import React from "react";
import chromeleon from "../imgs/chromeleonfeature.png";

const ProjectCard = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className="flex w-full bg-white rounded-lg hover:shadow-xl transition overflow-hidden">
        <div className="w-64 h-64 overflow-hidden flex-shrink-0">
          <div
            className="flex w-64 h-64 transform transition hover:scale-105"
            style={{
              backgroundImage: `url(${props.imgurl}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="flex p-8 flex-col flex-wrap justify-between items-start space-y-2">
          <div className="text-left">
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
