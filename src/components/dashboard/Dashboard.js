import React, { useState, useEffect } from "react";
import { Row, Space, Drawer } from "antd";
import { Link, useHistory } from "react-router-dom";
import Priorities from "../dashboard/Priorities";
import { MainButton } from "../../ui-elements/ButtonRepo";
import { MainTitle } from "../../ui-elements/TextRepo";
import "./dashboard.scss";
import { dashboard } from "../../services/user";
import { useAuthContext } from "../../utils/AuthContext";
import Sidebar from "../layout/Sidebar";
import { FiGrid } from "react-icons/fi";

export  const Title =()=>{

}

const Dashboard = (props) => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [priorityList, setPriorityList] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const history = useHistory();

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const routeChange = () => {
    let path = `/add-topic`;
    history.push(path);
  };
  const { dispatch } = useAuthContext();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    dashboard()
      .then((response) => {
        setPriorityList(response?.data?.matrix_config_data);
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  }, []);

  return (
    <>
      <div className="main-dashboard">
        <div className="mobile-header">
          <Space align="center">
            <span className="d-md-none d-inline-block" onClick={showSidebar}>
              <FiGrid />
            </span>
            <MainTitle children="My dashboard" className="mb-0" />
          </Space>
        </div>
        {/* <button onClick={logout}>logout</button> */}
        <div className="mx-auto p-md-0 p-3 small-media task-dashboard">
          <Row gutter="18">
            {priorityList?.length === 0 ? (
              <>
                <Priorities
                  lv={8}
                  mv={24}
                  sv={24}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-1"
                  priority="Priority 1"
                  importance="HIGH"
                  urgency="HIGH"
                />
                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-2"
                  priority="Priority 2"
                  importance="HIGH"
                  urgency="MEDIUM"
                />
                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-3"
                  priority="Priority 3"
                  importance="HIGH"
                  urgency="LOW"
                />

                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-4"
                  priority="Priority 4"
                  importance="MEDIUM"
                  urgency="HIGH"
                />
                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-5"
                  priority="Priority 5"
                  importance="MEDIUM"
                  urgency="MEDIUM"
                />
                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-6"
                  priority="Priority 6"
                  importance="MEDIUM"
                  urgency="LOW"
                />

                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-7"
                  priority="Priority 7"
                  importance="LOW"
                  urgency="HIGH"
                />
                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-8"
                  priority="Priority 8"
                  importance="LOW"
                  urgency="MEDIUM"
                />
                <Priorities
                  lv={8}
                  mv={12}
                  sv={12}
                  dv={8}
                  tasks="00"
                  cardColor="block-bg-9"
                  priority="Priority 9"
                  importance="LOW"
                  urgency="LOW"
                />
              </>
            ) : (
              priorityList?.map((item, index) => {
                return (
                  <Priorities
                    lv={8}
                    mv={24}
                    sv={24}
                    dv={8}
                    key={item.id}
                    tasks={item.task_count}
                    cardColor={item.color}
                    priority={item.matrix_rule_name}
                    importance={item.task_rule[0].rule_name}
                    urgency={item.task_rule[1].rule_name}
                  />
                );
              })
            )}
          </Row>
        </div>
        <div className="text-center mobile-footer">
          <MainButton
            children="+ create task"
            className="w-100 mb-3 login-btn "
            htmlType="submit"
            loading={btnLoader}
            onClick={routeChange}
          />
        </div>
      </div>
      <Drawer
        placement="left"
        width={305}
        visible={sidebarVisible}
        className="mobile-sidebar"
        onClose={() => setSidebarVisible(false)}
        closable={false}
      >
        <Sidebar />
      </Drawer>
    </>
  );
};
export default Dashboard;
