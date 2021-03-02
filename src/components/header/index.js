import React from "react";
import { Layout } from "antd";

const AppHeader = () => {
  const { Header } = Layout;

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <h2
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        My Reads
      </h2>
    </Header>
  );
};

export default AppHeader;
