"use client";

import { useEffect, useState } from "react";
import { Modal } from "antd";
import Image from "next/image";

interface Blog {
  _id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Latest Blogs</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-[#2a2a2b] p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(blog)}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="rounded-md w-full"
            />
            <h2 className="text-lg text-white mt-3 font-semibold">{blog.title}</h2>
            <p className="text-gray-400 text-xs">By {blog.author} • {blog.date}</p>
            <p className="text-gray-300 mt-2">{blog.content.slice(0, 150)}...</p>
            <div className="mt-2">
              <span className="bg-blue-500 text-white px-3 py-1 rounded">{blog.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Modal
        title={selectedBlog?.title}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className="bg-[#2a2a2b]"
      >
        {selectedBlog && (
          <div className="bg-[#2a2a2b] text-white p-4 rounded-lg">
            <Image
              src={selectedBlog.image}
              alt={selectedBlog.title}
              width={600}
              height={400}
              className="rounded-md w-full mb-3"
            />
            <p className="text-gray-400 text-sm">By {selectedBlog.author} • {selectedBlog.date}</p>
            <p className="text-gray-300 mt-2">{selectedBlog.content}</p>
            <div className="mt-3">
              <span className="bg-blue-500 text-white px-3 py-1 rounded">{selectedBlog.category}</span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Blogs;
