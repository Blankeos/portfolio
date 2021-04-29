import logo from "./logo.svg";
import "./index.css";
import "./App.css";

import Typical from "react-typical";

import { SiUnity } from "react-icons/si";

import img from "./imgs/profilepic.png";

import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="mt-20 flex flex-col items-center space-y-2">
        <img className="w-28 h-28 rounded-lg m-4" src={img} />
        <h1 className="text-3xl">
          Hi, I'm <b className="text-primary">Carlo Taleon</b>
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
      </div>
      <Projects />
    </div>
  );
}

export default App;
