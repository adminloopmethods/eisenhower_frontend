import React from 'react';
import { Form, Input, Select, Space, Row, Col, DatePicker, Slider } from 'antd';
import { Link } from 'react-router-dom';
import { MainTitle, NormalText, SpanText } from '../../ui-elements/TextRepo';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { MainButton } from '../../ui-elements/ButtonRepo';
import { FiArrowLeft } from 'react-icons/fi';

const { TextArea } = Input;
const { Option } = Select;
const AddTaskStepTwo = () => {
    const Urgency = {
        0: 'High',
        50: 'Medium',
        100: 'Low'
    };
    const Importance = {
        0: 'High',
        50: 'Medium',
        100: 'Low'
    };
    return (
      <>
        <div className="mobile-header ">
          <Space align="center">
            <span className="d-md-none d-inline-block">
              <FiArrowLeft />
            </span>
            <MainTitle children="add new task :  Step 2" className="mb-0" />
          </Space>
        </div>
        <div className="includes-media ui-card mx-auto p-md-5 p-4">
          <Form layout="vertical">
            <Form.Item className="" name="">
              <Input placeholder="Task Owner" disabled />
            </Form.Item>

            <Form.Item className="" name="">
              <Input placeholder="Customer Name (Optional)" />
            </Form.Item>

            <Form.Item className="" name="">
              <Input placeholder="Task Name" required />
            </Form.Item>

            <Form.Item className="" name="">
              <TextArea placeholder="Enter Task Description" rows={4} />
            </Form.Item>

            <Row gutter={10}>
              <Col md={12} xs={24}>
                <Form.Item className="" name="">
                  <DatePicker
                    placeholder="Start Date"
                    className="w-100"
                    format="YYYY/MMM/DD"
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col md={12} xs={24}>
                <Form.Item className="" name="">
                  <DatePicker
                    placeholder="Due Date"
                    className="w-100"
                    format="YYYY/MMM/DD"
                    allowClear
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item className="" name="">
              <Input placeholder="Estimate Hours (Optional)" />
            </Form.Item>

            <Form.Item className="mb-3" name="">
              <Select placeholder="Status">
                <Option value="TODO">To Do</Option>
                <Option value="INPROGRESS">In Progress</Option>
                <Option value="DONE">Done</Option>
              </Select>
            </Form.Item>
            <Form.Item className="mb-3" name="">
              <NormalText children="Importance" />
              <Slider
                marks={Importance}
                step={null}
                tooltipVisible={false}
                defaultValue={0}
              />
            </Form.Item>

            <Form.Item className="" name="">
              <NormalText children="Urgency" />
              <Slider
                marks={Urgency}
                step={null}
                tooltipVisible={false}
                defaultValue={0}
              />
            </Form.Item>

            <Form.Item className="" name="">
              <DatePicker
                placeholder="Select Remainder"
                className="w-100"
                format="YYYY/MMM/DD"
                allowClear
              />
              <SpanText children="This will give you a reminder before the due date" />
            </Form.Item>

            <Form.Item className="" name="">
              <Link to="/task-list">
                {" "}
                <MainButton children="Create task" className="w-100" />
              </Link>
            </Form.Item>
          </Form>
        </div>
      </>
    );
}
export default AddTaskStepTwo;