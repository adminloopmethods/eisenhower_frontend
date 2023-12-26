import {
  FiGrid,
  FiPlusSquare,
  FiLayers,
  FiList,
  FiServer,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

export const menu = {
  USER: [
    {
      key: "dashboard",
      label: "Dashboard",
      url: "/dashboard",
      icon: <FiGrid />,
    },
    {
      key: "task-type",
      label: "Add new Department",
      url: "/add-department",
      icon: <FiPlusSquare />,
    },
    {
      key: "department-list",
      label: "Departments list",
      url: "/department-list",
      icon: <FiLayers />,
    },
    {
      key: "add-new-topic",
      label: "Add new Topic",
      url: "/add-topic",
      icon: <FiPlusSquare />,
    },
    {
      key: "topic-list",
      label: "Topics list",
      url: "/topic-list",
      icon: <FiServer />,
    },
    {
      key: "add-new-member",
      label: "Add New Member",
      url: "/add-member",
      icon: <FiUserPlus />,
    },
    {
      key: "member-list",
      label: "Members list",
      url: "/member-list",
      icon: <FiUsers />,
    },
    {
      key: "add-new-task",
      label: "Add new Task",
      url: "/add-task",
      icon: <FiPlusSquare />,
    },
    {
      key: "task-list",
      label: "Task list",
      url: "/task-list",
      icon: <FiList />,
    },
  ],
};