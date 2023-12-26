import React, { useState } from "react";
import { Card, Space } from "antd";
import {
  ArrowLeftOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  MainTitle,
  CardHeadText,
  NormalText,
} from "../../ui-elements/TextRepo";
import { PureButton } from "../../ui-elements/ButtonRepo";
import { FiArrowLeft } from "react-icons/fi";
const MemberDetails = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="mobile-header ">
        <Space align="center">
          <span className="d-md-none d-inline-block">
            <FiArrowLeft />
          </span>
          <MainTitle children="Member Details" className="mb-0" />
        </Space>
      </div>
      <div className="big-media ui-card mx-auto p-3 member-details">
        <Card className="mb-3">
          <span className="status-in-detail">Active</span>
          <span
            className="member-color"
            style={{ backgroundColor: "#009688" }}
          ></span>
          <CardHeadText children="John Doe" className="mb-2" />
          <Space direction="vertical" size={0}>
            <Space
              align="center"
              className="align-items-center"
              direction="horizontal"
            >
              <MailOutlined />
              <NormalText className="mb-0" children="john@gmail.com" />
            </Space>
            <Space
              align="center"
              className="align-items-center"
              direction="horizontal"
            >
              <PhoneOutlined />
              <NormalText className="mb-0" children="+91 - 987 854 5962" />
            </Space>
            <Space
              align="center"
              className="align-items-center"
              direction="horizontal"
            >
              <SafetyCertificateOutlined />
              <NormalText className="mb-0" children="Manager" />
            </Space>
            <Space
              align="center"
              className="align-items-center"
              direction="horizontal"
            >
              <EyeOutlined />
              <NormalText className="mb-0" children="Publically Available" />
            </Space>
          </Space>
        </Card>

        <Card className="mb-3">
          <CardHeadText
            children="Department Association : "
            className="mb-3 "
          />
          <div className=" association-group">
            <div className="association">Finance</div>
          </div>
        </Card>
        <Card className="mb-3">
          <CardHeadText children="Team Association : " className="mb-3 " />
          <div className=" association-group">
            <div className="association">team alpha</div>
            <div className="association">team Beta</div>
            <div className="association">team design</div>
            <div className="association">Developer group</div>
          </div>
        </Card>
        <div className="text-center mobile-footer">
          {isActive && (
            <PureButton
              children="Inactive"
              className="w-100 inactive-user mb-3"
              onClick={() => setIsActive(false)}
            />
          )}
          {!isActive && (
            <PureButton
              children="Active"
              className="w-100 active-user mb-3"
              onClick={() => setIsActive(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default MemberDetails;
