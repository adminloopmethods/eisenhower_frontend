import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Space, Row, Col, Drawer } from "antd";
import { NormalText, MainTitle } from "../../ui-elements/TextRepo";
import { MainButton } from "../../ui-elements/ButtonRepo";
import { RightOutlined, EyeOutlined } from "@ant-design/icons";
import { FiGrid } from "react-icons/fi";
import { getAllDepartments } from "../../services/department";
import { NodataFound } from "../../utils/ImagePath";
import { Img } from "../../ui-elements/ImageRepo";
import Sidebar from "../layout/Sidebar";

const DepartmentList = () => {
  const [departmentList, setDepartmentList] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const showSidebar = () => {
    setSidebarVisible(true);
  };
  useEffect(() => {
    getAllDepartments()
      .then((response) => {
        setDepartmentList(response?.data?.departments);
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  }, []);
  return (
    <>
      <div className="mobile-header">
        <Space align="center">
          <span className="d-md-none d-inline-block" onClick={showSidebar}>
            <FiGrid />
          </span>
          <MainTitle children="department List" className="mb-0" />
        </Space>
      </div>
      <div className="mx-auto p-md-0 p-3 small-media department-list">
        <Row gutter={16}>
          {departmentList.map((item, index) => {
            return (
              <Col xl={6} lg={6} md={8} sm={12} xs={24}>
                <Link className="listing" to="#">
                  <Card className=" mb-3">
                    <span className="eye-off">
                      <EyeOutlined />
                    </span>
                    <Space className="justify-content-between w-100">
                      <NormalText
                        children={item?.department_name}
                        className="mb-0"
                      />
                      <RightOutlined />
                    </Space>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
        {/* do not delete this. this will come when no data found */}
        {/* <div className='text-center mb-3'>
                    <Img children={NodataFound} />
                    <NormalText children="No topic found, start adding topics" className='my-4' />
                </div> */}
        <div className="text-center mt-3 mobile-footer">
          <Link to="/add-department">
            <MainButton
              children="+Add new department"
              className="w-100 mb-2 login-btn"
              htmlType="submit"
            />
          </Link>
        </div>
      </div>
      <Drawer
        placement="left"
        width={305}
        visible={sidebarVisible}
        className="mobile-sidebar"
        onClose={() => setSidebarVisible(false)}
        closable={false}
      >
        <Sidebar />
      </Drawer>
    </>
  );
};
export default DepartmentList;
