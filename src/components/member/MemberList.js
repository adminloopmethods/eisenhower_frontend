import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Tag, Space, Button, Drawer } from "antd";
import {
  NormalHeadText,
  SpanText,
  MainTitle,
  NormalText,
} from "../../ui-elements/TextRepo";
import {
  RightOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { FiFilter, FiGrid } from "react-icons/fi";
import { MainButton } from "../../ui-elements/ButtonRepo";
import { Img } from "../../ui-elements/ImageRepo";
import { NodataFound } from "../../utils/ImagePath";
import Sidebar from "../layout/Sidebar";

const MemberList = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const showSidebar = () => {
    setSidebarVisible(true);
  };
  return (
    <>
      <div className="mobile-header">
        <Space align="center">
          <span className="d-md-none d-inline-block" onClick={showSidebar}>
            <FiGrid />
          </span>
          <MainTitle children="Member List" className="mb-0" />
        </Space>
        <div className="float-end">
          <Button type="text">
            <FiFilter />
          </Button>
        </div>
      </div>
      <div className="mx-auto p-md-0 p-3 small-media member-list">
        <Row gutter={16}>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeInvisibleOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#009688" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#CCF2D7"
                              style={{
                                color: "#008926",
                                borderRadius: "4px",
                              }}
                            >
                              Active
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#3fd11e" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#E8E8E8"
                              style={{
                                color: "#8D8D8D",
                                borderRadius: "4px",
                              }}
                            >
                              Inactive
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                      <br />
                      <SpanText children="Dummy" style={{ color: "orange" }} />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeInvisibleOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#6b409f" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#CCF2D7"
                              style={{
                                color: "#008926",
                                borderRadius: "4px",
                              }}
                            >
                              Active
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#8a92dc" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#E8E8E8"
                              style={{
                                color: "#8D8D8D",
                                borderRadius: "4px",
                              }}
                            >
                              Inactive
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeInvisibleOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#009688" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#CCF2D7"
                              style={{
                                color: "#008926",
                                borderRadius: "4px",
                              }}
                            >
                              Active
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeInvisibleOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#3fd11e" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#CCF2D7"
                              style={{
                                color: "#008926",
                                borderRadius: "4px",
                              }}
                            >
                              Active
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeInvisibleOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#8a92dc" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#CCF2D7"
                              style={{
                                color: "#008926",
                                borderRadius: "4px",
                              }}
                            >
                              Active
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <Link className="listing" to="/member-details">
              <Card className=" mb-3">
                <span className="eye-off">
                  <EyeOutlined />
                </span>
                <Space className="justify-content-between w-100">
                  <Space direction="horizontal" size={1}>
                    <span
                      className="member-color"
                      style={{ backgroundColor: "#009688" }}
                    ></span>
                    <div>
                      <NormalHeadText
                        children={
                          <>
                            John Doe{" "}
                            <Tag
                              color="#CCF2D7"
                              style={{
                                color: "#008926",
                                borderRadius: "4px",
                              }}
                            >
                              Active
                            </Tag>
                          </>
                        }
                        className="mb-0"
                      />
                      <SpanText children="john@gmail.com" />
                    </div>
                  </Space>
                  <RightOutlined />
                </Space>
              </Card>
            </Link>
          </Col>
        </Row>
        {/* do not delete this. this will come when no data found */}
        {/* <div className='text-center mb-3'>
                    <Img children={NodataFound} />
                    <NormalText children="No member found, start adding members" className='my-4' />
                </div> */}
        <div className="text-center mt-3 mobile-footer">
          <MainButton
            children="+ add new member"
            className="w-100"
            htmlType="submit"
          />
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
export default MemberList;
