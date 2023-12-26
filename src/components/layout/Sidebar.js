import React from "react";

import { Layout, Menu, Tag, Space, Divider } from "antd";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useAuthContext } from "../../utils/AuthContext";
import { menu } from "./SidebarMenu";
import "./layout.scss";
import { NormalHeadText, SpanText } from "../../ui-elements/TextRepo";
import { MainButton } from "../../ui-elements/ButtonRepo";
import {
  FiGrid,
  FiPlusSquare,
  FiLayers,
  FiPlusCircle,
  FiServer,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

const { Sider } = Layout;

const Sidebar = (props) => {
  const { SubMenu } = Menu;
  const happen = (key, icon, label) => {
    console.log("laasdbel", key);
  };

  return (
    <>
      <Sider {...props}>
        <Menu mode="inline" className="sticky-top side-bar">
          <Link to="/profile">
            <Space direction="horizontal" className="px-4 pt-4" size={4}>
              <span
                className="member-color"
                style={{ backgroundColor: "#009688" }}
              ></span>
              <div>
                <NormalHeadText children="John Doe" className="mb-3" />
                <SpanText children="john@gmail.com" />
              </div>
            </Space>
          </Link>
          <Divider />
          {menu.USER.map((item) => {
            if (item.hasOwnProperty("children")) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((subItem) => {
                    return (
                      <Menu.Item key={subItem.key} title>
                        <Link to={subItem.url}>{subItem.label}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.url}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
