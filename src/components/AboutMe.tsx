"use client"
import 'aos/dist/aos.css';
const Aboutme = () => {
    return (
        <div className="card bg-[#2a2a2b] w-full lg:w-[500px] p-8 customShadow shadow-2xl mb-10">
            <div className="card-body">
                <h2 className="card-title text-2xl text-white">About Me</h2>
                <hr className="bg-black"/>
                <p className="text-gray-400 text-lg">Hi I am a React Front-End developer & I can build your website responsively , securely as you want. I have strong experience on React, JavaScript, Firebase, Tailwind & I am also familiar to Express, MongoDB . Feel free to contact me!
                </p>
            </div>
        </div>
    );
};

export default Aboutme;