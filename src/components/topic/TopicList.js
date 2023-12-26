import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Space, Row, Col,Drawer } from 'antd';
import { NormalText, MainTitle } from '../../ui-elements/TextRepo';
import { NodataFound } from '../../utils/ImagePath';
import { Img } from '../../ui-elements/ImageRepo';
import { MainButton } from '../../ui-elements/ButtonRepo';
import { topicData } from '../../services/topic';
import {
  RightOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import {FiGrid} from 'react-icons/fi';
import Sidebar from '../layout/Sidebar';

const TopicList = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const showSidebar = () => {
      setSidebarVisible(true);
    };
  const history = useHistory();

  const routeChange = () => {
    let path = `/add-topic`;
    history.push(path);
  };

  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    topicData()
      .then((response) => {
        setTopicList(response);
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }, []);

  return (
    <>
      <div className="mobile-header">
        <Space align="center">
          <span className="d-md-none d-inline-block" onClick={showSidebar}>
            <FiGrid />
          </span>
          <MainTitle children="Topic List" className="mb-0" />
        </Space>
      </div>

      <div className="mx-auto p-md-0 p-3 small-media topic-list">
        <Row gutter={16}>
          {topicList?.data?.topics?.map((item, index) => {
            return (
              <Col xl={6} lg={6} md={8} sm={12} xs={24}>
                <Link className="listing" to="#">
                  <Card className=" mb-3">
                    <span className="eye-off">
                      {item.access_status === "allow_to_all" ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </span>
                    <Space className="justify-content-between w-100">
                      <NormalText children={item.topic_name} className="mb-0" />
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
        <div className="text-center mobile-footer">
          <MainButton
            children="+Add new topic"
            className="w-100 mb-2 login-btn"
            htmlType="submit"
            onClick={routeChange}
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
export default TopicList;
