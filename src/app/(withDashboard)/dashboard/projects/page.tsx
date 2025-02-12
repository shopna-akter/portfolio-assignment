"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
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

  // Open Add Modal
  const openAddModal = () => {
    form.resetFields();
    setAddModalVisible(true);
  };

  // Open Edit Modal
  const openEditModal = (project: Project) => {
    setEditingProject(project);
    form.setFieldsValue(project);
    setEditModalVisible(true);
  };

  // Handle Add Submit
  const handleAddSubmit = async (values: Omit<Project, "_id">) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to add project");
      message.success("Project added");
      setAddModalVisible(false);
      fetchProjects();
    } catch (error) {
      console.error(error);
      message.error("Error adding project");
    }
    setLoading(false);
  };

  // Handle Edit Submit
  const handleEditSubmit = async (values: Omit<Project, "_id">) => {
    if (!editingProject) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/projects/${editingProject._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to update project");
      message.success("Project updated");
      setEditModalVisible(false);
      fetchProjects();
    } catch (error) {
      console.error(error);
      message.error("Error updating project");
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
    { title: "Project Name", dataIndex: "title", key: "title" },
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
          <Button onClick={() => openEditModal(record)} type="primary" className="mr-2">
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
      
      <Button type="primary" onClick={openAddModal} className="mb-4">
        Add Project
      </Button>

      <Table columns={columns} dataSource={projects} rowKey="_id" loading={loading} />

      {/* Add Project Modal */}
      <Modal
        title="Add Project"
        open={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
          <Form.Item name="title" label="Project Name" rules={[{ required: true, message: "Enter project name" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: "Enter description" }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Enter image URL" }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add
          </Button>
        </Form>
      </Modal>

      {/* Edit Project Modal */}
      <Modal
        title="Edit Project"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleEditSubmit}>
          <Form.Item name="title" label="Project Name" rules={[{ required: true, message: "Enter project name" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: "Enter description" }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Enter image URL" }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectsPage;