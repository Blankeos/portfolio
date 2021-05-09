import React from "react";
import { FaGit, FaGithub } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProjectCard = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full bg-white rounded-lg hover:shadow-xl transition overflow-hidden">
        <a href={props.link} target="_blank">
          <div className="w-full h-64 md:w-64 md:h-full overflow-hidden flex-shrink-0">
            <div
              className="w-full h-full flex transform transition hover:scale-110"
              style={{
                backgroundImage: `url(${props.imgurl}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transitionDuration: "1s",
              }}
            ></div>
          </div>
        </a>

        <div className="flex p-8 flex-col flex-wrap justify-between items-start space-y-2">
          <div className="text-left flex flex-col space-y-8">
            <div className="flex flex-row justify-between">
              <h3 className="text-gray-800 font-bold text-lg text-left">
                {props.label && props.label}
              </h3>
              {props.githubLink && (
                <a href={props.githubLink} target="_blank">
                  <FaGithub className="text-gray-800" size="1.5em" />
                </a>
              )}
            </div>

            <p className="text-sm text-gray-700">{props.description}</p>
          </div>
          {props.buttonLabel && (
            <button
              onClick={() => {
                window.open(props.link);
              }}
              className={`flex space-x-2 items-center text-sm rounded py-2 px-5 transform transition hover:scale-105 ${
                props.btnClass
                  ? props.btnClass
                  : "bg-primary hover:bg-blue-600 text-white "
              }`}
            >
              <span className="relative transform -translate-x-1">
                {props.icon && props.icon}
              </span>
              {props.buttonLabel}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
