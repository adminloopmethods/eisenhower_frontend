import React from 'react';
import { Space, Descriptions, Divider, Button, Select } from 'antd';
import { SpanText, MainTitle, NormalHeadText } from '../../ui-elements/TextRepo';
import { MainButton } from '../../ui-elements/ButtonRepo';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { FiEdit, FiTrash2, FiShare2, FiArrowLeft } from 'react-icons/fi'
import './task.scss';
const { Option } = Select;
const TaskDetails = () => {
    return (
      <>
        <div className="mobile-header">
          <Space align="center">
            <span className="d-md-none d-inline-block">
              <FiArrowLeft />
            </span>
            <MainTitle children="Task Details" className="mb-0" />
          </Space>
        </div>

        <div className="includes-media small-media ui-card mx-auto p-md-5 p-4 task-details">
          <NormalHeadText children="Name of the task" />
          <Descriptions layout="horizontal" column={1}>
            <Descriptions.Item label="Due Date">2022/Aug/26</Descriptions.Item>
            <Descriptions.Item label="Team Members">
              John, Jacob, Emannual
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              Validate branches Another open merge request already exists for
              this source branch: !6Validate branches Another open merge request
              already exists for this source branch: !6
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Space align="center" className="justify-content-around w-100">
            <span className="text-center">
              <SpanText children="Urgency" />
              <NormalHeadText children="High" className="fw-6" />
            </span>
            <span className="text-center">
              <SpanText children="Importance" />
              <NormalHeadText children="High" className="fw-6" />
            </span>
          </Space>
          <Divider />
          <Descriptions layout="horizontal" column={1}>
            <Descriptions.Item label="Start Date">
              2022/Aug/26
            </Descriptions.Item>
            <Descriptions.Item label="End Date">2022/Sep/26</Descriptions.Item>
            <Descriptions.Item label="Customer Name">N/A</Descriptions.Item>
            <Descriptions.Item label="Topic Group">
              Software development{" "}
            </Descriptions.Item>
            <Descriptions.Item label="Business Function">
              Marketing
            </Descriptions.Item>
            <Descriptions.Item label="Estimated Hours">N/A</Descriptions.Item>
            <Descriptions.Item label="Notes">
              Validate branches Another open merge request already exists for
              this source branch: !6
            </Descriptions.Item>
          </Descriptions>

          <div className="text-center mt-3 mobile-footer">
            <div className="d-flex w-100 justify-content-between mb-2">
              <div>
                <Button type="text" className="me-2">
                  <FiEdit />
                </Button>
                <Button type="text" className="me-2">
                  <FiTrash2 />
                </Button>
                <Button type="text">
                  <FiShare2 />
                </Button>
              </div>

              <Select defaultValue="To Do">
                <Option value="1">To Do</Option>
                <Option value="2">In Progress</Option>
                <Option value="3">Done</Option>
              </Select>
            </div>
          </div>
        </div>
      </>
    );
}
export default TaskDetails;