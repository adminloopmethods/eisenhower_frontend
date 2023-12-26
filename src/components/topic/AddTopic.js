import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Input, Radio, Space, Button, Modal } from 'antd';
import {
  MainTitle,
  NormalText,
  CardHeadText,
} from '../../ui-elements/TextRepo';
import { MainButton, SecondaryButton } from '../../ui-elements/ButtonRepo';
import { addTopic } from '../../services/topic';
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import Loader from '../utilities/Loader';
import { FiArrowLeft, FiEdit, FiTrash } from 'react-icons/fi';
const { TextArea } = Input;

const AddTopic = () => {
  let history = useHistory();
  const [form] = Form.useForm();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const deleteDepartment = () => {
    setModal(true);
  };
  const handleCancel = () => {
    setModal(false);
  };

  const onFinish = (values) => {
    setLoading(true);
    let reqBody = {
      topic_name: values?.topicName,
      access_status: value,
    };
    addTopic(reqBody)
      .then((response) => {
        if (response?.status === 201 || response?.status === 200) {
          setLoading(false);
          history.push('/topic-list');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error!', error);
      });
  };
  return (
    <>
      <div className="mobile-header mb-5 md-md-0">
        <Space align="center">
          <span className="d-md-none d-inline-block">
            <FiArrowLeft />
          </span>
          <MainTitle children="Add Topic" className="mb-0" />
        </Space>
        <div className="float-end">
          <Button type="text" onClick={deleteDepartment} className="me-2">
            <FiTrash />
          </Button>
          <Button type="text">
            <FiEdit />
          </Button>
        </div>
      </div>
     
      <div className="includes-media ui-card mx-auto p-md-5 p-4">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="topicName"
            rules={[
              {
                required: true,
                message: "Topic name is required.",
              },
            ]}
          >
            <Input placeholder="Enter Topic name" />
          </Form.Item>
          <Form.Item name="topicDescription">
            <TextArea
              rows={3}
              placeholder="Enter the description for topic"
            ></TextArea>
          </Form.Item>
          <Form.Item label="Make this Department description available In the drop down list of other team members ">
            <Radio.Group>
              <Radio value="N" onClick={() => setValue("N")}>
                No
              </Radio>
              <Radio value="Y" onClick={() => setValue("Y")}>
                Yes
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <MainButton
              children="save"
              className="w-100 mb-0 login-btn"
              htmlType="submit"
              loading={loading}
            />
          </Form.Item>
        </Form>
      </div>
      <Modal visible={modal} footer={null} onCancel={handleCancel}>
        <CardHeadText children="Delete Topic" />
        <NormalText
          children="Are you sure you want to delete this department?"
          className="mb-5"
        />
        <div className="text-center">
          <SecondaryButton
            children="yes"
            style={{ width: "120px" }}
            onClick={() => setModal(false)}
          />
          <MainButton
            children="No"
            className="me-4"
            style={{ width: "120px" }}
            onClick={() => setModal(false)}
          />
        </div>
      </Modal>
    </>
  );
};
export default AddTopic;
