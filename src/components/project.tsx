import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  image: string;
  liveLink: string;
  clientCode: string;
  serverCode: string;
  technologies: string[];
  description: string;
  features: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-md mb-4"
          />
          <h2 className="text-white text-xl font-bold">{project.title}</h2>
          <p className="text-gray-300">{project.description}</p>
          <ul className="mt-2 text-gray-400 text-sm">
            {project.features.map((feature, i) => (
              <li key={i}>✅ {feature}</li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            <Link href={project.liveLink} target="_blank" className="text-blue-400">
              Live Demo
            </Link>
            <Link href={project.clientCode} target="_blank" className="text-green-400">
              Client Code
            </Link>
            <Link href={project.serverCode} target="_blank" className="text-red-400">
              Server Code
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
