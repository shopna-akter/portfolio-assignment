"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [form] = Form.useForm();

  // Fetch projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Open Modal for Add/Edit
  const openModal = (project?: Project) => {
    setEditingProject(project || null);
    setModalVisible(true);
    if (project) {
      form.setFieldsValue(project);
    } else {
      form.resetFields();
    }
  };

  // Handle Add/Edit Submit
  const handleSubmit = async (values: Project) => {
    setLoading(true);
    try {
      const method = editingProject ? "PATCH" : "POST";
      const url = editingProject
        ? `http://localhost:5000/api/v1/projects/${editingProject._id}`
        : "http://localhost:5000/api/v1/projects";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to save project");

      message.success(editingProject ? "Project updated" : "Project added");
      setModalVisible(false);
      fetchProjects();
    } catch (error) {
      console.error(error);
      message.error("Error saving project");
    }
    setLoading(false);
  };

  // Delete Project
  const deleteProject = async (id: string) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:5000/api/v1/projects/${id}`, { method: "DELETE" });
      message.success("Project deleted");
      fetchProjects();
    } catch (error) {
      console.error(error);
      message.error("Error deleting project");
    }
    setLoading(false);
  };

  // Columns for Ant Design Table
  const columns = [
    { title: "Project Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img: string) => <img src={img} alt="project" className="w-20 h-10 object-cover" />,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Project) => (
        <>
          <Button onClick={() => openModal(record)} type="primary" className="mr-2">
            Edit
          </Button>
          <Button onClick={() => deleteProject(record._id)} type="default" danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-white mb-4">Project Management</h1>
      
      <Button type="primary" onClick={() => openModal()} className="mb-4">
        Add Project
      </Button>

      <Table columns={columns} dataSource={projects} rowKey="_id" loading={loading} />

      {/* Modal for Add/Edit */}
      <Modal
        title={editingProject ? "Edit Project" : "Add Project"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name" label="Project Name" rules={[{ required: true, message: "Enter project name" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: "Enter description" }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Enter image URL" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="url" label="Project URL" rules={[{ required: true, message: "Enter project URL" }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {editingProject ? "Update" : "Add"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
