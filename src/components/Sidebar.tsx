"use client"
import Link from "next/link";
import {FaCog, FaHome, FaMailBulk, FaPenFancy } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#2a2a2b] min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 hover:text-gray-600 text-white"
          >
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 hover:text-gray-600 text-white "
          >
            <FaMailBulk className="h-5 w-5" />
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 hover:text-gray-600 text-white"
          >
            <FaCog className="h-5 w-5" />
            <span>Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blog"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 hover:text-gray-600 text-white"
          >
            <FaPenFancy className="h-5 w-5" />
            <span>Blogs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
