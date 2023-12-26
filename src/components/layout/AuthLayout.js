import React, { useState, useEffect } from "react";
import { Layout,  Drawer } from "antd";
import { withRouter, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuthContext } from "../../utils/AuthContext";

const { Content } = Layout;

const AuthLayout = ({ children }) => {
  const { state } = useAuthContext();
//   const [sidebarVisible, setSidebarVisible] = props;
  const location = useLocation();
  // useEffect(() => {
  //     getUserData(state.email)
  //       .then((response) => {
  //         setName(response?.data?.name)

  //       })
  //       .catch((error) => {
  //         console.log("Error!", error);
  //       });

  //   }, []);

  return (
    <>
      <Layout>
        <Layout>
          <Sidebar className="d-lg-block d-md-none d-none" />
          <Content className="layout-content">
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
      {/* <Drawer
        placement="left"
        width={305}
        visible={sidebarVisible}
        className="mobile-sidebar"
        onClose={() => setSidebarVisible(false)}
        closable={false}
      >
        <Sidebar />
      </Drawer> */}
    </>
  );
};

export default withRouter(AuthLayout);
