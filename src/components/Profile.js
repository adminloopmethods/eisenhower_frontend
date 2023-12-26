import React, { useState, useEffect } from 'react';
import { Form, Input, Avatar, Row, Col, Space, Button, Modal, Select } from 'antd';
import { MainTitle } from '../ui-elements/TextRepo';
import { EditOutlined } from '@ant-design/icons';
import { getProfile, UserDetailsUpdate } from '../services/user';
// import { getRoleMaster } from "../services/department"
import { toTitleCase } from '../utils/helperFunctions';
import { MainButton } from '../ui-elements/ButtonRepo';
import { emailRegex, nameRegex } from '../utils/Constants';
import { FiArrowLeft } from 'react-icons/fi';
const Profile = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [shortName, setShortName] = useState();
  const [role, setRole] = useState([]);
  const [btnLoader, setBtnLoader] = useState(false);
  const [color, setColor] = useState([]);
  const { Option } = Select;
  useEffect(() => {
    setBtnLoader(true);
    getProfile()
      .then((response) => {
        setBtnLoader(false);
        form.setFieldsValue({
          first_name: response?.data?.user_details?.first_name,
          last_name: response?.data?.user_details?.last_name,
          mobile_with_isd: response?.data?.user_details?.mobile_with_isd,
          email: response?.data?.user_details?.email,
          role: response?.data?.user_details?.role,
        });
        setColor(response?.data?.user_details)
        setShortName(`${toTitleCase(response?.data?.user_details?.first_name[0])}${toTitleCase(response?.data?.user_details?.last_name[0])}`
        );
      })
      .catch((error) => {
        setBtnLoader(false);
        console.log('Error!', error);
      });

    // getRoleMaster()
    //   .then((response) => {
    //     setBtnLoader(false);
    //     setRole(response?.data?.data);
    //   })
    //   .catch((error) => {
    //     setBtnLoader(false);
    //     console.log('Error!', error);
    //   });
  }, []);

  const onFinish = (props) => {
    let formData = new FormData();
    formData.append('first_name', props.first_name);
    formData.append('last_name', props.last_name);
    formData.append('mobile_with_isd', props.mobile_with_isd);
    formData.append('role', props.role);
    UserDetailsUpdate(formData)
      .then((response) => {
        if (response?.status === 200 || response?.status === 201) {
          setVisible(true);
        }
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  };

  return (
    <>
      <div className="mobile-header">
        <Space align="center">
          <span className="d-md-none d-inline-block">
            <FiArrowLeft />
          </span>
          <MainTitle children="My profile" className="mb-0" />
        </Space>
      </div>

      <div className="includes-media ui-card mx-auto p-md-5 p-4">
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <div className="text-center">
            <Avatar
              shape="square"
              size={64}
              className="mb-4"
              style={{ backgroundColor: color.color }}
            >
              {shortName}
            </Avatar>
          </div>
          <Row>
            <Col md={24} xs={24}>
              <Form.Item
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Name is required!",
                  },
                  {
                    pattern: nameRegex,
                    message: "Enter valid name!",
                  },
                ]}
              >
                <Input placeholder="Enter first name" />
              </Form.Item>
            </Col>
            <Col md={24} xs={24}>
              <Form.Item
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "last name is required!",
                  },
                  {
                    pattern: nameRegex,
                    message: "Enter valid last name!",
                  },
                ]}
              >
                <Input placeholder="Enter last name" />
              </Form.Item>
            </Col>
            <Col md={24} xs={24}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required!",
                  },
                  {
                    pattern: emailRegex,
                    message: "Enter valid email!",
                  },
                ]}
              >
                <Input placeholder="Enter user email" disabled />
              </Form.Item>
            </Col>
            <Col md={24} xs={24}>
              <Form.Item
                name="mobile_with_isd"
                rules={[
                  {
                    required: true,
                    message: "Number is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter user number"
                  type={"number"}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseFloat(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                />
              </Form.Item>
            </Col>
            <Col md={24} xs={24}>
              <Form.Item name="role">
                {/* <Select placeholder="Role" allowClear disabled>
                  {role?.map((item, index) => {
                    return (
                      <Option key={item.id}>
                        {item.role}
                      </Option>
                    );
                  })}
                </Select> */}
                <Input disabled />
              </Form.Item>
            </Col>
            <Col md={24} xs={24}>
              <MainButton
                children="Update"
                className="w-100 mb-2 login-btn"
                htmlType="submit"
              />
            </Col>
          </Row>
        </Form>
      </div>

      <Modal
        className="text-center modals"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={340}
      >
        <h4>Profile has been updated</h4>
      </Modal>
    </>
  );
};
export default Profile;
