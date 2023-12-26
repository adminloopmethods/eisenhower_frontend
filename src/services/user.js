import instance from './axios';

const uri = {
  dashboardData: '/api/v1/matrix/dashboard/',
  userLogin: '/api/v1/user/login/',
  getProfile: '/api/v1/user/detail/',
  UserDetailsUpdate: '/api/v1/user/detail/update/',
};

export const userLogin = async (reqBody) => {
  return await instance.post(uri.userLogin, reqBody);
};
export const getProfile = async (reqBody) => {
  return await instance.get(uri.getProfile, reqBody);
};

export const dashboard = async () => {
  return await instance.get(uri.dashboardData);
};

export const UserDetailsUpdate = async (reqBody) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  return await instance.put(uri.UserDetailsUpdate, reqBody, {
    headers: headers,
  });
};
