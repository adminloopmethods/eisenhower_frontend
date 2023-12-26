import AddMember from '../components/member/AddMember';
import instance from './axios';

const uri = {
  getAllDepartments: '/api/v1/config/department/',
  addDepartment: '/api/v1/config/department/',
  addUser: "/api/v1/user/create/",
  colorMasterApi: "/api/v1/config/colors/",
  getdepartment: '/api/v1/config/department/',
  getRoleMaster: "/api/v1/config/userRoles/",
  getTaskList: '/api/v1/task/list/',
};

export const getAllDepartments = async () => {
  return await instance.get(uri.getAllDepartments);
};

export const addDepartment = async (reqBody) => {
  return await instance.post(uri.addDepartment, reqBody);
};

export const addUser = async (reqBody) => {
  return await instance.post(uri.addUser, reqBody);
};

export const colorMasterApi = async () => {
  return await instance.get(uri.colorMasterApi,);
};

export const getdepartment = async () => {
  return await instance.get(uri.getdepartment,);
};

export const getRoleMaster = async (reqBody) => {
  return await instance.get(uri.getRoleMaster, reqBody);
};
export const getTaskList = async (status) => {
  return await instance.get(uri.getTaskList + `?status=${status}`);
};