"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { id: "aboutme", label: "About Me" },
  { id: "myskills", label: "Skills" },
  { id: "myprojects", label: "Projects" },
  { id: "contactme", label: "Contact Me" },
];

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("aboutme");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky bg-[#2a2a2b] top-0 z-50">
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-[#2a2a2b] border-none text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link href={`/#${section.id}`}>
                    <span
                      className={`mr-2 btn btn-outline hover:bg-[#ff014f] text-[#a0a8b3] border-[#ff014f] mb-1 ${
                        currentSection === section.id ? "bg-[#ff014f] text-white" : ""
                      }`}
                    >
                      {section.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-xl text-white font-semibold md:ml-6 ml-2">
            Nihal's Portfolio
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {sections.map((section) => (
              <li key={section.id}>
                <Link href={`/#${section.id}`}>
                  <span
                    className={`mr-2 btn btn-outline hover:bg-[#ff014f] border-[#ff014f] ${
                      currentSection === section.id ? "bg-[#ff014f] text-white" : ""
                    }`}
                  >
                    {section.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </nav>
    </div>
  );
};

export default Navbar;
