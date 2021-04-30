import logo from "./logo.svg";
import "./index.css";
import "./App.css";

import Typical from "react-typical";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/animations/scale.css";

import {
  SiUnity,
  SiTailwindcss,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
} from "react-icons/si";
import { FaGit, FaGithub, FaInstagram } from "react-icons/fa";

import img from "./imgs/profilepic.png";

import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="mt-20 flex flex-col items-center space-y-2">
        {/* Header */}
        <img className="w-28 h-28 rounded-lg m-4" src={img} />
        <h1 className="text-3xl">
          👋 Hi, I'm <b className="text-primary">Carlo Taleon</b>
        </h1>
        <p className="text-sm">
          I'm a{" "}
          <Typical
            className="text-primary"
            loop={Infinity}
            wrapper="b"
            steps={[
              "game developer 🎮",
              800,
              "web developer 💻",
              800,
              "designer 🎨",
              800,
              "memelord 🐼",
              1200,
            ]}
          />
        </p>
        {/* Subtitle */}
        <p className="pt-8 text-sm max-w-lg px-6">
          I make games during my free time and I enjoy building web apps using{" "}
          <b className="group text-primary hover:bg-primary hover:text-white transition ease-in-out rounded px-0.5">
            <SiTailwindcss
              className="group-hover:text-white text-primary inline transition ease-in-out"
              size="1.2em"
            />
            TailwindCSS
          </b>{" "}
          and{" "}
          <b className="group text-primary hover:bg-primary hover:text-white transition ease-in-out rounded px-0.5">
            <SiReact
              className="group-hover:text-white text-primary inline transition ease-in-out"
              size="1.2em"
            />
            React
          </b>
          . I'm also a student at West Visayas State University studying
          Computer Science.
        </p>
      </div>
      {/* Skills*/}
      <div className="mt-8 flex flex-col items-center justify-center space-y-5">
        <h2 className="font-bold text-2xl text-gray-700">Skills</h2>
        <div className="flex flex-row space-x-5">
          <Tippy
            animation="scale"
            inertia={true}
            content="TailwindCSS"
            placement="bottom"
          >
            <div>
              <SiTailwindcss size="2em" />
            </div>
          </Tippy>
          <Tippy
            animation="scale"
            inertia={true}
            content="React"
            placement="bottom"
          >
            <div>
              <SiReact size="2em" />
            </div>
          </Tippy>
          <Tippy
            animation="scale"
            inertia={true}
            content="NodeJS & Express"
            placement="bottom"
          >
            <div>
              <SiNodeDotJs size="2em" />
            </div>
          </Tippy>
          <Tippy
            animation="scale"
            inertia={true}
            content="MongoDB"
            placement="bottom"
          >
            <div>
              <SiMongodb size="2em" />
            </div>
          </Tippy>
          <Tippy
            animation="scale"
            inertia={true}
            content="Unity & C#"
            placement="bottom"
          >
            <div>
              <SiUnity size="2em" />
            </div>
          </Tippy>
        </div>
      </div>
      <Projects />
      <footer className="h-28 bg-gray-100 flex flex-col space-y-2 p-4 items-center justify-center text-gray-600 text-sm">
        <p className="text-xs">Connect with me!</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Blankeos" target="_blank">
            <FaGithub className="text-primary" size="1.5em" />
          </a>
          <a href="https://www.instagram.com/taleoncarlo/" target="_blank">
            <FaInstagram className="text-primary" size="1.5em" />
          </a>
        </div>
        <p>2021 © Carlo Taleon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
