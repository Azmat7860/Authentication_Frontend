import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Layout } from "antd";
const { Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <div>
      <Layout className="layout-container">
        <Sidebar />
        <Layout
          className="site-layout"
          style={{
            transition: "0.15s ease all",
            minHeight: "100vh",
            background: "#f0f0f0",
            padding: 15,
          }}
        >
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default CustomLayout;
