import React, { useState } from 'react';
import '../auth/auth.scss';
import { Form, Input } from 'antd';
import { MainButton } from '../../ui-elements/ButtonRepo';
import { Img } from '../../ui-elements/ImageRepo';
import { MailOutlined } from '@ant-design/icons';
import Alerts from '../utilities/Alert';
import { emailRegex } from '../../utils/Constants';
import { useAuthContext } from '../../utils/AuthContext';
import { logo, waves2 } from '../../utils/ImagePath';
import { userLogin } from '../../services/user';

const Login = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState({ status: false, message: '' });
  const [btnLoader, setBtnLoader] = useState(false);
  const onFinish = async (props) => {
    setBtnLoader(true);
    userLogin({ email: props.email })
      .then(async (response) => {
        setBtnLoader(false);
        if (response.status === 200 || response.status === 201) {
          await dispatch({
            type: 'LOGIN',
            payload: response.data,
          });
        }
      })
      .catch((err) => {
        setBtnLoader(false);
        setError({ status: true });
      });
  };

  return (
    <>
      <div className="login-page">
        <Img children={waves2} alt="wave2" className="login-wave" />
        <div className='includes-media ui-card mx-auto p-md-5 p-4' style={{ marginTop: '105px' }}>
          <Form
            className="login-form"
            scrollToFirstError
            layout="vertical"
            onFinish={onFinish}
          >
            {error.status && (
              <Alerts
                className="mb-4 px-3"
                showIcon
                description={
                  error.message || 'User not found !'
                }
                type="error"
              />
            )}
            <div className='text-center mb-5'>
              <Img children={logo} alt="logo" />
            </div>
            <Form.Item
              label="Enter Registered Email "
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email is required!',
                },
                {
                  pattern: emailRegex,
                  message: 'Enter valid email!',
                },
              ]}
            >
              <Input
                placeholder="example@gmail.com"
              // prefix={<MailOutlined className="me-3" />}
              />
            </Form.Item>
            {/* <Form.Item label="Enter Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Passsword is required!',
                }
              ]}>
              <Input.Password />
            </Form.Item> */}
            <Form.Item
              className='mb-0'>
              <MainButton
                children="LOGIN"
                className="w-100  login-btn"
                htmlType="submit"
                loading={btnLoader}
              />
            </Form.Item>
          </Form>
        </div>
      </div>

    </>
  );
};

export default Login;
