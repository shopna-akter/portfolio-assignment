"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [form] = Form.useForm();

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Open Add Modal
  const openAddModal = () => {
    form.resetFields();
    setAddModalVisible(true);
  };

  // Open Edit Modal
  const openEditModal = (blog: Blog) => {
    setEditingBlog(blog);
    form.setFieldsValue(blog);
    setEditModalVisible(true);
  };

  // Handle Add Submit
  const handleAddSubmit = async (values: Omit<Blog, "_id" | "date">) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to add blog");

      message.success("Blog added");
      setAddModalVisible(false);
      fetchBlogs();
    } catch (error) {
      console.error(error);
      message.error("Error adding blog");
    }
    setLoading(false);
  };

  // Handle Edit Submit
  const handleEditSubmit = async (values: Omit<Blog, "_id" | "date">) => {
    if (!editingBlog) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/blogs/${editingBlog._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to update blog");

      message.success("Blog updated");
      setEditModalVisible(false);
      fetchBlogs();
    } catch (error) {
      console.error(error);
      message.error("Error updating blog");
    }
    setLoading(false);
  };

  // Delete Blog
  const deleteBlog = async (id: string) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:5000/api/v1/blogs/${id}`, { method: "DELETE" });
      message.success("Blog deleted");
      fetchBlogs();
    } catch (error) {
      console.error(error);
      message.error("Error deleting blog");
    }
    setLoading(false);
  };

  // Columns for Ant Design Table
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Author", dataIndex: "author", key: "author" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img: string) => <img src={img} alt="blog" className="w-20 h-10 object-cover" />,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Blog) => (
        <>
          <Button onClick={() => openEditModal(record)} type="primary" className="mr-2">
            Edit
          </Button>
          <Button onClick={() => deleteBlog(record._id)} type="default" danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-white mb-4">Blog Management</h1>
      
      <Button type="primary" onClick={openAddModal} className="mb-4">
        Add Blog
      </Button>

      <Table columns={columns} dataSource={blogs} rowKey="_id" loading={loading} />

      {/* Add Blog Modal */}
      <Modal title="Add Blog" open={addModalVisible} onCancel={() => setAddModalVisible(false)} footer={null}>
        <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true, message: "Enter title" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true, message: "Enter content" }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Enter image URL" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Category" rules={[{ required: true, message: "Enter category" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="author" label="Author" rules={[{ required: true, message: "Enter author name" }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>Add</Button>
        </Form>
      </Modal>

<Modal title="Edit Blog" open={editModalVisible} onCancel={() => setEditModalVisible(false)} footer={null}>
  <Form form={form} layout="vertical" onFinish={handleEditSubmit}>
    <Form.Item name="title" label="Title" rules={[{ required: true, message: "Enter title" }]}>
      <Input />
    </Form.Item>
    <Form.Item name="content" label="Content" rules={[{ required: true, message: "Enter content" }]}>
      <Input.TextArea rows={3} />
    </Form.Item>
    <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Enter image URL" }]}>
      <Input />
    </Form.Item>
    <Form.Item name="category" label="Category" rules={[{ required: true, message: "Enter category" }]}>
      <Input />
    </Form.Item>
    <Form.Item name="author" label="Author" rules={[{ required: true, message: "Enter author name" }]}>
      <Input />
    </Form.Item>
    <Button type="primary" htmlType="submit" loading={loading}>Update</Button>
  </Form>
</Modal>
    </div>
  );
};

export default BlogsPage;
