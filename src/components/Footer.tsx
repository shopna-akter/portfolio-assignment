"use client";

import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ background: "#111", color: "#fff", textAlign: "center", padding: "16px" }}>
      <p>&copy; {new Date().getFullYear()} Nihal's Portfolio. All Rights Reserved.</p>
    </Footer>
  );
};

export default AppFooter;
