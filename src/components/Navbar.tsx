"use client";

import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header style={{ background: "#111", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 24px" }}>
        <h1 className="text-white text-2xl font-bold">Nihal's Portfolio</h1>
        <Menu theme="dark" mode="horizontal" style={{ background: "#111" }}>
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
