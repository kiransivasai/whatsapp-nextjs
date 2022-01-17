import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="Wrapper">
      <div className="layout-container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
