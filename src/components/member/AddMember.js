import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Select, Space, Radio, Modal } from "antd";
import { MainTitle, SpanText } from "../../ui-elements/TextRepo";
import { MainButton, SecondaryButton } from "../../ui-elements/ButtonRepo";
import { emailRegex, nameRegex } from "../../utils/Constants";
import Alerts from "../utilities/Alert";
import {
  addUser,
  colorMasterApi,
  getdepartment,
  getRoleMaster,
} from "../../services/department";
import moment from "moment";
import { FiArrowLeft } from "react-icons/fi";
const { Option } = Select;

const marks = {
  0: "High",
  50: "Medium",
  100: "Low",
};
const AddMember = () => {
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [disableTime, setDisableTime] = useState(true);
  const [startDate, setStartDate] = useState(true);
  const [startSelectedDate, setStartSelectedDate] = useState("");
  const [colorModal, setColorModal] = useState(false);
  const [color, setColor] = useState([]);
  const [value, setValue] = useState("Y");
  const [visible, setVisible] = useState(false);
  const [department, setDepartment] = useState([]);
  const [userRoleMaster, setUserRoleMaster] = useState([]);
  const dateFormat = "DD-MMM-YYYY";
  const [error, setError] = useState({ status: false, message: "" });
  const handleDateChange = (value) => {
    let selectedDate = moment(value).format("DD-MMM-YYYY");
    setStartSelectedDate(selectedDate);
    setStartDate(false);
    if (value) {
      setStartDate(false);
      setDisableTime(false);
    } else {
      setStartDate(true);
      setDisableTime(true);
    }
  };

  useEffect(() => {
    getRoleMaster()
      .then((response) => {
        setBtnLoader(false);
        setUserRoleMaster(response?.data?.data);
      })
      .catch((error) => {
        setBtnLoader(false);
        console.log("Error!", error);
      });
    getdepartment()
      .then((response) => {
        setBtnLoader(false);
        setDepartment(response?.data.departments);
      })
      .catch((error) => {
        setBtnLoader(false);
      });

    // colorMasterApi()
    //     .then((response) => {
    //         setColor(response);
    //         console.log("colorsssssssssssssss", response?.data.data);
    //     })
    //     .catch((error) => {
    //         setBtnLoader(false);
    //         console.log('errrr', error);
    //     });
  }, []);

  useEffect(() => {
    setBtnLoader(true);
    colorMasterApi()
      .then((response) => {
        setColor(response?.data.data);
        console.log("colorsssssssssssssss", response?.data.data);
      })
      .catch((error) => {
        setBtnLoader(false);
        console.log("errrr", error);
      });
  }, []);

  const onFinish = (props) => {
    console.log("props", props.level);
    setBtnLoader(true);
    let reqBody = {
      first_name: props.first_name,
      last_name: props.last_name,
      color: props.color,
      email: props.email,
      mobile: props.mobile_with_isd,
      registration_type: "web",
      department: props.department,
      level: props.level,
      access_status: value,
    };
    addUser(reqBody)
      .then((response) => {
        setBtnLoader(false);
        setVisible(true);
      })
      .catch((error) => {
        setBtnLoader(false);
        setError({ status: true });
        console.log("Errorparveen!", error);
      });
  };

  return (
    <>
      
      <div className="mobile-header ">
        <Space align="center">
          <span className="d-md-none d-inline-block">
            <FiArrowLeft />
          </span>
          <MainTitle children="Add New Team Member" className="mb-0" />
        </Space>
      </div>
      <div className="includes-media ui-card mx-auto p-md-5 p-4">
        <Form form={form}  layout="vertical" onFinish={onFinish}>
          {error.status && (
            <Alerts
              className="mb-4 px-3"
              showIcon
              description={error.message || "Email  already Exists!"}
              type="error"
            />
          )}
          <Form.Item
            name="first_name"
            className="mb-4"
            rules={[
              { required: true, message: "First name is required!" },
              { pattern: nameRegex, message: "Invalid name" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="last_name"
            className="mb-4"
            rules={[
              { required: true, message: "Last name is required!" },
              { pattern: nameRegex, message: "Invalid name" },
            ]}
          >
            <Input placeholder="Last Name" className=" w-100" />
          </Form.Item>

          <Form.Item
            name="email"
            className="mb-4 w-100"
            rules={[
              { required: true, message: "Email Address is required!" },
              { pattern: emailRegex, message: "Invalid email" },
            ]}
          >
            <Input placeholder="Email Address" className=" w-100" />
          </Form.Item>

          <Form.Item
            name="mobile_with_isd"
            className="mb-4"
            rules={[{ required: true, message: "Contact no is required!" }]}
          >
            <Input
              type={"number"}
              placeholder="Contact No."
              className="w-100"
              onInput={(e) => {
                e.target.value = Math.max(0, parseFloat(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
            />
          </Form.Item>

          <Form.Item
            name="department"
            rules={[{ required: true, message: "Department is required!" }]}
          >
            <Select placeholder="Department" allowClear>
              {department?.map((item, index) => {
                return <Option key={item.id}>{item.department_name}</Option>;
              })}
            </Select>
          </Form.Item>

          <Form.Item
            name="level"
            rules={[{ required: true, message: "User level is required!" }]}
          >
            <Select placeholder="User Level" allowClear>
              {userRoleMaster?.map((item, index) => {
                return <Option key={item.id}>{item.role}</Option>;
              })}
            </Select>
          </Form.Item>

          <Form.Item
            name="color"
            className="mb-4"
            // rules={[
            //     { required: true, message: 'User colour is required!' }
            // ]}
          >
            <Input
              name="color"
              placeholder="choose  a color"
              value="Choose A Color"
              onClick={() => setColorModal(true)}
            />
            <SpanText children="Chosen color will represent the user" />
            <span
              className="chosen-color"
              onClick={() => setColorModal(true)}
              style={{ cursor: "pointer" }}
            ></span>
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
            {/* <Link to="/member-list"> */}
            <MainButton
              children="submit"
              className="w-100"
              htmlType="submit"
              loading={btnLoader}
            />
            {/* </Link> */}
          </Form.Item>
        </Form>
      </div>
      <Modal
        visible={colorModal}
        width={350}
        className="choose-color-pallete text-center"
        footer={null}
        onCancel={() => setColorModal(false)}
        closable
      >
        {color?.map((item, index) => {
          {
            console.log("colordddddddddddd", color);
          }
          return (
            <Radio.Button
              key={item.id}
              style={{ backgroundColor: item.hex_symbol }}
            ></Radio.Button>
          );
        })}
        <SecondaryButton
          children="Add color"
          className="mt-3"
          onClick={() => setColorModal(false)}
        />
      </Modal>

      <Modal
        className="text-center modals"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={340}
      >
        <h4>ADD NEW TEAM MEMBER SUCCESS</h4>
      </Modal>
    </>
  );
};
export default AddMember;
