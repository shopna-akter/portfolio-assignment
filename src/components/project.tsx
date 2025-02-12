"use client";
import Aos from "aos";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import { Modal } from "antd";

interface Project {
    _id: string;
    title: string;
    image: string;
    description: string;
    technologies: string;
    liveLink: string;
    clientCode: string;
    serverCode: string;
    features: string[];
}

const Project = () => {
    const [aosType, setAosType] = useState<'fade-left' | 'fade-down'>('fade-left');
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setAosType('fade-down');
            } else {
                setAosType('fade-left');
            }
        };
        Aos.init({ duration: 3000 });
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div>
            {projects.map((project) => (
                <div key={project._id} data-aos={aosType} className="card w-full">
                    
                    <div className="card bg-[#2a2a2b] lg:w-[500px] p-8 customShadow shadow-2xl my-10" onClick={() => openModal(project)}>
                        <img src={project.image} alt={project.title} className="rounded-md cursor-pointer" />
                        <div className="card-body">
                            <h2 className=" text-white text-2xl">{project.title}</h2>
                            <p className="text-white">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            <Modal title={selectedProject?.title} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} 
                className="bg-[#2a2a2b] text-white" bodyStyle={{ backgroundColor: '#2a2a2b', color: 'white' }}>
                {selectedProject && (
                    <div>
                        <img src={selectedProject.image} alt={selectedProject.title} className="rounded-md w-full mb-3" />
                        <p className="text-[#a0a8b3] mb-2">{selectedProject.description}</p>
                        <ul className="list-disc list-inside text-white mb-3">
                            {selectedProject.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <div className="flex gap-3">
                            <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Live Link</a>
                            <a href={selectedProject.clientCode} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Client Code</a>
                            <a href={selectedProject.serverCode} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Server Code</a>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Project;
