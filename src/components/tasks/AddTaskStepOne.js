import React from 'react';
import { Form, Tag, Select, Space, Button, Divider, Image } from 'antd';
import { Link } from 'react-router-dom';
import { MainTitle, NormalHeadText, SpanText } from '../../ui-elements/TextRepo';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { MainButton, SecondaryButton } from '../../ui-elements/ButtonRepo';
import { Nodata } from '../../utils/ImagePath';
import { FiArrowLeft } from 'react-icons/fi';
const { Option } = Select;

const onChange1 = (value) => {
    console.log(`selected ${value}`);
};

const onSearch = (value) => {
    console.log('search:', value);
};
const options = [
    {
        value: '#3b8c89',
        label: 'one',
    },
    {
        value: '#4e811f',
        label: 'two',
    },
    {
        value: '#7b589b',
        label: 'three',
    },
    {
        value: '#b15783',
        label: 'four',
    },
    {
        value: '#3s8c89',
        label: 'five',
    },
    {
        value: '#4d811f',
        label: 'five',
    },
    {
        value: '#693a63',
        label: 'six',
    },
    {
        value: '#6e98b4',
        label: 'seven',
    },
    {
        value: '#403369',
        label: 'eight',
    },
    {
        value: '#706237',
        label: 'nine',
    },
    {
        value: '#92896e',
        label: 'ten',
    },
    {
        value: '#1e787d',
        label: 'eleven'
    }
];
const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 3,
            }}
        >
            {label}
        </Tag>
    );
};

const AddTaskStepOne = () => {

    const yeea = () => {
        console.log('yeea')
    }
    return (
      <>
        
        <div className="mobile-header ">
          <Space align="center">
            <span className="d-md-none d-inline-block">
              <FiArrowLeft />
            </span>
            <MainTitle children="add new task :  Step 1" className="mb-0" />
          </Space>
        </div>
        <div className="includes-media ui-card mx-auto p-md-5 p-4">
          <Form layout="vertical">
            <Form.Item>
              <Select
                showSearch
                placeholder="Select department"
                optionFilterProp="children"
                onChange={onChange1}
                notFoundContent={
                  <>
                    <Space direction="vertical w-100 justify-content-center align-items-center mb-4">
                      <Image width={80} preview={false} src={Nodata} alt="" />
                      <NormalHeadText children="Didn't find the match?" />
                      <Link to="/add-department">
                        <SecondaryButton children="+ Add Department" />
                      </Link>
                    </Space>
                  </>
                }
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="DEPARTMENT1">DEPARTMENT1</Option>
                <Option value="DEPARTMENT2">DEPARTMENT2</Option>
                <Option value="DEPARTMENT3">DEPARTMENT3</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select
                showSearch
                placeholder="Select Topic"
                optionFilterProp="children"
                onSearch={onSearch}
                notFoundContent={
                  <>
                    <Space direction="vertical w-100 justify-content-center align-items-center mb-4">
                      <Image width={80} preview={false} src={Nodata} alt="" />
                      <NormalHeadText children="Didn't find the match?" />
                      <Link to="/add-topic">
                        <SecondaryButton children="+ Add Topic" />
                      </Link>
                    </Space>
                  </>
                }
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="TOPIC1">TOPIC1</Option>
                <Option value="TOPIC2">TOPIC2</Option>
                <Option value="TOPIC3">TOPIC3</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select
                placeholder="Add Members "
                mode="multiple"
                showArrow
                tagRender={tagRender}
                style={{ width: "100%" }}
                options={options}
                notFoundContent={
                  <>
                    <Space direction="vertical w-100 justify-content-center align-items-center mb-4">
                      <Image width={80} preview={false} src={Nodata} alt="" />
                      <NormalHeadText children="Didn't find the match?" />
                      <Link to="/add-member">
                        <SecondaryButton children="+ Add Member" />
                      </Link>
                    </Space>
                  </>
                }
              />
              <SpanText children="You can add upto 5 members only" />
            </Form.Item>
            <Form.Item>
              <Link to="/add-task-step-2">
                {" "}
                <MainButton children="next" className="w-100" />
              </Link>
            </Form.Item>
          </Form>
        </div>
      </>
    );
}
export default AddTaskStepOne;