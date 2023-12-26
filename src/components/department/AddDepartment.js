import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Radio, Space, Button, Modal } from 'antd';
import { MainTitle, NormalText, CardHeadText } from '../../ui-elements/TextRepo';
import { MainButton, SecondaryButton } from '../../ui-elements/ButtonRepo';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { FiArrowLeft, FiEdit, FiTrash } from "react-icons/fi";
import { addDepartment } from '../../services/department'
const AddDepartment = () => {
    let history = useHistory();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('Y');
    const deleteDepartment = () => {
        setModal(true);
    }
    const handleCancel = () => {
        setModal(false)
    }

    const onFinish = (values) => {
        setLoading(true);
        let reqBody = { department_name: values?.department_name, access_status: value };
        addDepartment(reqBody)
            .then((response) => {
                if (response?.status === 201 || response?.status === 200) {
                    setLoading(false);
                    history.push('/department-list');
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
            <MainTitle children="Add department" className="mb-0" />
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
          <Form className="" layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="department_name"
              rules={[
                { required: true, message: "Please enter department name" },
              ]}
            >
              <Input placeholder="Enter department name" />
            </Form.Item>
            <Form.Item label="Make this Department description available in the drop down list of other team members ">
              <Radio.Group name="access_status">
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
          <CardHeadText children="Delete department" />
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
}
export default AddDepartment;