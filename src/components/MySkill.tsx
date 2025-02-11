"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import "aos/dist/aos.css";

const MySkills = () => {
  const [aosType, setAosType] = useState("fade-left");

  useEffect(() => {
    const handleResize = () => {
      setAosType(window.innerWidth <= 768 ? "fade-down" : "fade-left");
    };

    Aos.init({ duration: 3000 });
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div data-aos={aosType} className="card w-full lg:w-[500px] p-8 shadow-2xl bg-[#2a2a2b]">
      <div className="card-body text-center">
        <h2 className="card-title text-2xl text-white mb-4">About My Skills</h2>
        <hr className="mb-4" />
        <h2 className="text-xl card-title text-gray-400 mb-8">Primary Skills On</h2>
        <div className="grid grid-cols-3 gap-2">
        {["w3_html5", "javascript", "reactjs", "vercel"].map((tech, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg animate-move bg-[#2a2a2b]">
              <img src={`https://www.vectorlogo.zone/logos/${tech}/${tech}-icon.svg`} className="h-12 w-12" alt={tech} />
            </div>
          ))}
          {["firebase", "tailwindcss", "js_redux", "nextjs", "typescriptlang"].map((tech, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg animate-move bg-[#2a2a2b]">
              <img src={`https://www.vectorlogo.zone/logos/${tech}/${tech}-icon.svg`} className="h-12 w-12" alt={tech} />
            </div>
          ))}
        </div>
        <h2 className="text-xl card-title text-gray-400 my-6">Secondary Skills On</h2>
        <div className="grid grid-cols-3 gap-2">
          {["mongodb", "expressjs", "nodejs"].map((tech, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg animate-move bg-[#2a2a2b]">
              <img src={`https://www.vectorlogo.zone/logos/${tech}/${tech}-icon.svg`} className="w-12 h-12" alt={tech} />
            </div>
          ))}
          <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg animate-move bg-[#2a2a2b]">
            <img
              src="https://cdn.worldvectorlogo.com/logos/mongoose.svg" 
              className="w-12 h-12"
              alt="mongoose"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
