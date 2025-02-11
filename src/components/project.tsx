"use client";
import Aos from "aos";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
const Project = () => {
    const [aosType, setAosType] = useState('fade-left');

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
    return (
        <div>
            <div data-aos={aosType}  className="card w-full">
                <div className="card bg-[#2a2a2b] lg:w-[500px] p-8 customShadow shadow-2xl my-10">
                    <img
                        src="https://i.ibb.co/m6kwRW9/Screenshot-2.png"
                        alt="Project" className="rounded-md" />
                    <div className="card-body">
                        <h2 className="card-title text-white text-2xl">PicoWorker</h2>
                        <div className="flex gap-3">
                            <a href={"https://n210ph-final.web.app"} target="_blank" rel="noopener noreferrer" className="text-white underline text-lg">Live Link</a>
                            <a href={"https://github.com/shopna-akter/n210-final-project"} target="_blank" rel="noopener noreferrer" className="text-white underline text-lg">Client Code</a>
                            <a href={"https://github.com/shopna-akter/n210-final-project-server"} target="_blank" rel="noopener noreferrer" className="text-white underline text-lg">Server Code</a>
                        </div>
                        <p className="text-[#a0a8b3]">React | JS | Firebase | MongoDB | Express | Tailwind</p>
                        <p className="text-[#a0a8b3] mb-2 text-lg font-medium">It is my first complete website. Here are some feature of my Project:</p>
                        <ul>
                            <li className="text-[#a0a8b3] list-disc mb-1">This is a micro task & earning platform where user is able to do some micro task & earn money</li>
                            <li className="text-[#a0a8b3] list-disc">This website have three user role. Including Worker, Taskreator, Admin</li>
                            <li className="text-[#a0a8b3] list-disc">This website have a stripe based payment system. So taskreator can buy coin[Website currency] & Worker can withdraw their earned coin</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div data-aos={aosType} className="card w-full">
                <div className="card bg-[#2a2a2b] lg:w-[500px] p-8 customShadow shadow-2xl my-10">
                    {/* <figure> */}
                    <img
                        src="https://i.ibb.co/RvWKwwy/1719360775052.jpg"
                        alt="Project" className="rounded-md" />
                    <div className="card-body">
                        <h2 className="card-title text-white text-2xl">Helping Hand</h2>
                        <div className="flex gap-3">
                            <a href={"https://assignment-p11.web.app"} target="_blank" rel="noopener noreferrer" className="text-white underline text-lg">Live Link</a>
                            <a href={"https://github.com/shopna-akter/n210-donation-project"} target="_blank" rel="noopener noreferrer" className="text-white underline text-lg">Client Code</a>
                            <a href={"https://github.com/shopna-akter/n210-donation-project-server"} target="_blank" rel="noopener noreferrer" className="text-white underline text-lg">Server Code</a>
                        </div>
                        <p className="text-[#a0a8b3]">React | JS | Firebase | MongoDB | Express | Tailwind</p>
                        <p className="text-[#a0a8b3] mb-2 text-lg font-medium">It is a food donation website.Here are some feature of my Project:</p>
                        <ul>
                            <li className="text-[#a0a8b3] list-disc mb-1">This is a donation platform where donator is able to donate food & the user can apply for his needed food</li>
                            <li className="text-[#a0a8b3] list-disc">Donator can edit & delete his donated food data . Also user can see the donated food by sorting & searching them</li>
                            <li className="text-[#a0a8b3] list-disc">There is map ,animation & donation chart to make UI better</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div data-aos={aosType} className="card w-full">
                <div className="card bg-[#2a2a2b] lg:w-[500px] p-8 customShadow shadow-2xl my-10">
                    {/* <figure> */}
                    <img
                        src="https://i.ibb.co/ryLgxpX/Banner.png"
                        alt="Project" className="rounded-md" />
                    <div className="card-body">
                        <h2 className="card-title text-white text-2xl">TourSpot</h2>
                        <div className="flex gap-3">
                            <a href={"https://n210tour-spot.netlify.app"} className="text-white underline text-lg">Live Link</a>
                            <a href={"https://github.com/shopna-akter/n210tour-spot"} className="text-white underline text-lg">Client Code</a>
                            <a href={"https://github.com/shopna-akter/n210tour-spot-server "} className="text-white underline text-lg">Server Code</a>
                        </div>
                        <p className="text-[#a0a8b3] mb-2 text-lg font-medium">It is a tourism website. Here are some feature of my Project:</p>
                        <ul>
                            <li className="text-[#a0a8b3] list-disc mb-1">This is a tourism platform where user is able to explore popular tourist spots with detailed information</li>
                            <li className="text-[#a0a8b3] list-disc">Users can create and manage their itineraries.</li>
                            <li className="text-[#a0a8b3] list-disc">User can sort the spot by country & price. Also there is some animation , user-freindly interface to make the UX better</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;