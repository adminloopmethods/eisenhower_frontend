import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Space, Row, Col, Tabs, Checkbox, Button, Drawer, Modal, Input, Divider } from 'antd';
import './task.scss'
import { NormalText, MainTitle, NormalHeadText } from '../../ui-elements/TextRepo';
import { MainButton } from '../../ui-elements/ButtonRepo';
import {
  ArrowLeftOutlined,
  LineOutlined,
  CloseOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  BiListOl,
  BiCrosshair,
  BiPieChart,
  BiCheckDouble,
  BiMessageRoundedDots
} from "react-icons/bi";
import { FiUsers, FiClock, FiFilePlus, FiFilter,FiGrid } from 'react-icons/fi';
import Comments from './Comments';
import TaskFilter from './TaskFilter';
import { getTaskList } from '../../services/department'
import { NodataFound } from '../../utils/ImagePath';
import { Img } from '../../ui-elements/ImageRepo';
import Sidebar from '../layout/Sidebar';

const { TextArea } = Input;
const { TabPane } = Tabs;
const TaskList = () => {
    const [commentList, setCommentList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [list, setList] = useState([]);
    const [btnLoader, setBtnLoader] = useState(false);
    const [loading, setLoading] = useState(false);
    const [applyFilter, setApplyFilter] = useState(false);
     const [sidebarVisible, setSidebarVisible] = useState(false);
     const showSidebar = () => {
       setSidebarVisible(true);
     };
    const openComments = () => {
        setCommentList(true)
    }
    const openModal = () => {
        setShowModal(true)
    }
    const onClose = () => {
        setShowModal(false);
    }

    const listApiCall = (status) => {
        setLoading(true);
        getTaskList(status)
            .then((response) => {
                setLoading(false);
                setList(response?.data?.data);
            })
            .catch((error) => {
                setBtnLoader(false);
                console.log('errrr', error);
            });
    }

    useEffect(() => {
        listApiCall();
    }, []);

    const onTabChange = (tabValue) => {
        if (tabValue === "all") listApiCall("all");
        if (tabValue === "To-do") listApiCall("To-do");
        if (tabValue === "In-Progress") listApiCall("In-Progress");
        if (tabValue === "done") listApiCall("done");
    };

    const openFilter = () => {
        setApplyFilter(true);
    }
    const onCloseit = () => {
        setApplyFilter(false);
    };
    return (
      <>
        <div className="mobile-header">
          <Space align="center">
            <span className="d-md-none d-inline-block" onClick={showSidebar}>
              <FiGrid />
            </span>
            <MainTitle children="Task List" className="mb-0" />
          </Space>
          <div className="float-end">
            <Button type="text" onClick={openModal} className="me-2">
              <FiFilePlus />
            </Button>
            <Button type="text" onClick={openFilter}>
              <FiFilter />
            </Button>
          </div>
        </div>

        <div className="small-media mx-auto p-md-0 p-3 task-list">
          <Tabs defaultActiveKey="All" onChange={onTabChange}>
            <div className="mb-3">
              <Checkbox className="d-md-none d-block select-all">
                Select All
              </Checkbox>
            </div>
            <TabPane
              tab={
                <>
                  <span className="d-flex align-items-center">
                    <BiListOl className="me-2" />
                    All
                  </span>
                </>
              }
              key="all"
            >
              {/* do not delete this. this will come when no data found */}
              {list?.length === 0 ? (
                <div className="text-center mb-3">
                  <Img children={NodataFound} />
                  <NormalText
                    children="No member found, start adding members"
                    className="my-4"
                  />
                </div>
              ) : (
                <Row gutter={16} className="">
                  {list.map((item, index) => {
                    return (
                      <Col xl={6} md={8} sm={12} xs={24}>
                        <Link className="listing" to="#">
                          <Checkbox value="A">
                            <Card className="mb-3" key={item.id}>
                              <span className="eye-off" onClick={openComments}>
                                <BiMessageRoundedDots />
                              </span>
                              <Space
                                direction="vertical"
                                size={2}
                                className="justify-content-between w-100"
                              >
                                <Link to="/task-details">
                                  <NormalText className="mb-2 text-dark">
                                    {list[0].task_name}
                                  </NormalText>
                                  <Space
                                    align="center"
                                    className="d-inline-flex align-items-center"
                                  >
                                    <FiUsers className="light-grey" />
                                    <NormalText className="mb-0 light-grey" />
                                    {list[0]?.members[0]?.first_name}
                                    <NormalText />
                                  </Space>
                                </Link>
                                <Row className="justify-content-between">
                                  <Link to="/task-details">
                                    <Col span={12}>
                                      <Space
                                        align="center"
                                        className="d-inline-flex align-items-center"
                                      >
                                        <FiClock className="light-grey" />
                                        <NormalText
                                          children="2022/Aug/29"
                                          className="mb-0 light-grey"
                                        >
                                          {list[0]?.start_date}
                                        </NormalText>
                                      </Space>
                                    </Col>
                                  </Link>
                                  <Col span={12} className="text-end">
                                    <Button className="task-start">
                                      {list[0]?.status}
                                    </Button>
                                  </Col>
                                </Row>
                              </Space>
                            </Card>
                          </Checkbox>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </TabPane>
            <TabPane
              tab={
                <>
                  <span className="d-flex align-items-center">
                    <BiCrosshair className="me-2" />
                    To Do
                  </span>
                </>
              }
              key="To-do"
            >
              {list?.length === 0 ? (
                <div className="text-center mb-3">
                  <Img children={NodataFound} />
                  <NormalText
                    children="No member found, start adding members"
                    className="my-4"
                  />
                </div>
              ) : (
                <Row gutter={16} className="">
                  {list.map((item, index) => {
                    return (
                      <Col xl={6} md={8} sm={12} xs={24}>
                        <Link className="listing" to="#">
                          <Checkbox value="A">
                            <Card className="mb-3" key={item.id}>
                              <span className="eye-off" onClick={openComments}>
                                <BiMessageRoundedDots />
                              </span>
                              <Space
                                direction="vertical"
                                size={2}
                                className="justify-content-between w-100"
                              >
                                <Link to="/task-details">
                                  <NormalText className="mb-2 text-dark">
                                    {list[0].task_name}
                                  </NormalText>
                                  <Space
                                    align="center"
                                    className="d-inline-flex align-items-center"
                                  >
                                    <FiUsers className="light-grey" />
                                    <NormalText className="mb-0 light-grey" />
                                    {list[0]?.members[0]?.first_name}
                                    <NormalText />
                                  </Space>
                                </Link>
                                <Row className="justify-content-between">
                                  <Link to="/task-details">
                                    <Col span={12}>
                                      <Space
                                        align="center"
                                        className="d-inline-flex align-items-center"
                                      >
                                        <FiClock className="light-grey" />
                                        <NormalText
                                          children="2022/Aug/29"
                                          className="mb-0 light-grey"
                                        >
                                          {list[0]?.start_date}
                                        </NormalText>
                                      </Space>
                                    </Col>
                                  </Link>
                                  <Col span={12} className="text-end">
                                    <Button className="task-start">
                                      {list[0].status}
                                    </Button>
                                  </Col>
                                </Row>
                              </Space>
                            </Card>
                          </Checkbox>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              )}

              {/* do not delete this. this will come when no data found */}
            </TabPane>
            <TabPane
              tab={
                <>
                  <span className="d-flex align-items-center">
                    <BiPieChart className="me-2" />
                    In Progress
                  </span>
                </>
              }
              key="In-Progress"
            >
              {list?.length === 0 ? (
                <div className="text-center mb-3">
                  <Img children={NodataFound} />
                  <NormalText
                    children="No member found, start adding members"
                    className="my-4"
                  />
                </div>
              ) : (
                <Row gutter={16} className="">
                  {list.map((item, index) => {
                    return (
                      <Col xl={6} md={8} sm={12} xs={24}>
                        <Link className="listing" to="#">
                          <Checkbox value="A">
                            <Card className="mb-3" key={item.id}>
                              <span className="eye-off" onClick={openComments}>
                                <BiMessageRoundedDots />
                              </span>
                              <Space
                                direction="vertical"
                                size={2}
                                className="justify-content-between w-100"
                              >
                                <Link to="/task-details">
                                  <NormalText className="mb-2 text-dark">
                                    {list[0].task_name}
                                  </NormalText>
                                  <Space
                                    align="center"
                                    className="d-inline-flex align-items-center"
                                  >
                                    <FiUsers className="light-grey" />
                                    <NormalText className="mb-0 light-grey" />
                                    {list[0]?.members[0]?.first_name}
                                    <NormalText />
                                  </Space>
                                </Link>
                                <Row className="justify-content-between">
                                  <Link to="/task-details">
                                    <Col span={12}>
                                      <Space
                                        align="center"
                                        className="d-inline-flex align-items-center"
                                      >
                                        <FiClock className="light-grey" />
                                        <NormalText
                                          children="2022/Aug/29"
                                          className="mb-0 light-grey"
                                        >
                                          {list[0]?.start_date}
                                        </NormalText>
                                      </Space>
                                    </Col>
                                  </Link>
                                  <Col span={12} className="text-end">
                                    <Button className="task-in-progress">
                                      {list[0].status}
                                    </Button>
                                  </Col>
                                </Row>
                              </Space>
                            </Card>
                          </Checkbox>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              )}
              {/* do not delete this. this will come when no data found */}
            </TabPane>
            <TabPane
              tab={
                <>
                  <span className="d-flex align-items-center">
                    <BiCheckDouble className="me-2" />
                    Done
                  </span>
                </>
              }
              key="done"
            >
              {list?.length === 0 ? (
                <div className="text-center mb-3">
                  <Img children={NodataFound} />
                  <NormalText
                    children="No member found, start adding members"
                    className="my-4"
                  />
                </div>
              ) : (
                <Row gutter={16} className="">
                  {list.map((item, index) => {
                    return (
                      <Col xl={6} md={8} sm={12} xs={24}>
                        <Link className="listing" to="#">
                          <Checkbox value="A">
                            <Card className="mb-3" key={item.id}>
                              <span className="eye-off" onClick={openComments}>
                                <BiMessageRoundedDots />
                              </span>
                              <Space
                                direction="vertical"
                                size={2}
                                className="justify-content-between w-100"
                              >
                                <Link to="/task-details">
                                  <NormalText className="mb-2 text-dark">
                                    {list[0].task_name}
                                  </NormalText>
                                  <Space
                                    align="center"
                                    className="d-inline-flex align-items-center"
                                  >
                                    <FiUsers className="light-grey" />
                                    <NormalText className="mb-0 light-grey" />
                                    {list[0]?.members[0]?.first_name}
                                    <NormalText />
                                  </Space>
                                </Link>
                                <Row className="justify-content-between">
                                  <Link to="/task-details">
                                    <Col span={12}>
                                      <Space
                                        align="center"
                                        className="d-inline-flex align-items-center"
                                      >
                                        <FiClock className="light-grey" />
                                        <NormalText
                                          children="2022/Aug/29"
                                          className="mb-0 light-grey"
                                        >
                                          {list[0]?.start_date}
                                        </NormalText>
                                      </Space>
                                    </Col>
                                  </Link>
                                  <Col span={12} className="text-end">
                                    <Button className="task-done">
                                      {list[0].status}
                                    </Button>
                                  </Col>
                                </Row>
                              </Space>
                            </Card>
                          </Checkbox>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              )}
              {/* do not delete this. this will come when no data found */}
            </TabPane>
          </Tabs>
          <div className="text-center mt-3  mobile-footer">
            <MainButton
              children="+ Add new Task"
              className="w-100 mb-2 login-btn"
              htmlType="submit"
            />
          </div>
        </div>
        <Drawer
          visible={commentList}
          closable={true}
          onClose={() => setCommentList(false)}
          title="Task Comments"
        >
          <Comments />
        </Drawer>
        <Modal
          visible={showModal}
          header={null}
          footer={null}
          bordered={true}
          onCancel={onClose}
          closable
          closeIcon={<LineOutlined />}
          className="sticky-style"
        >
          <NormalHeadText children="Notes" />
          <Divider />
          <TextArea
            placeholder="Add your notes here"
            autoSize={{
              minRows: 16,
            }}
          ></TextArea>
        </Modal>

        {/* Filter */}
        <Drawer
          visible={applyFilter}
          closable={true}
          placement="bottom"
          headerStyle={{ display: "none" }}
          height={540}
          onClose={onCloseit}
        >
          <CloseOutlined
            onClick={() => setApplyFilter(false)}
            style={{ position: "absolute", right: "28px", top: "28px" }}
          />
          <NormalHeadText
            children="Apply Filters "
            className="fw-6 mb-4"
            style={{ fontSize: "18px" }}
          />
          <Divider />
          <TaskFilter />
        </Drawer>
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
}
export default TaskList;