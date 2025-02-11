"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [aosType, setAosType] = useState("fade-left");

  const handleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const messageData = Object.fromEntries(formData);
  
    try {
      const res = await fetch("http://localhost:5000/api/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageData),
      });
      
      if (res.ok) {
        Swal.fire("Success!", "Your message has been sent!", "success");
        form.reset();
      } else {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Network issue.", "error");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setAosType(window.innerWidth <= 768 ? "fade-down" : "fade-left");
    };

    Aos.init({ duration: 3000 });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div data-aos={aosType} className="bg-[#2a2a2b]">
      <div className="lg:w-[500px] w-full shadow-2xl mt-6 p-8">
        <h2 className="text-2xl card-title font-bold text-white">Contact With Me</h2>
        <div>
          <form
            onSubmit={handleContactForm}
            className="w-full max-w-3xl rounded-lg p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#a0a8b3] text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border form-control border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="name"
                  type="text"
                  required
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-[#a0a8b3] text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#a0a8b3] text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="subject"
                type="text"
                required
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-[#a0a8b3] text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="message"
                placeholder="Your Message"
                required
                name="messege"
                rows={6}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-br from-[#1e2024] to-[#23272b] text-[#ff014f] font-bold py-3 px-8 focus:outline-none focus:shadow-outline transition duration-300 rounded ease-in-out transform hover:scale-105 flex items-center justify-center"
                type="submit"
              >
                Send Message
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
