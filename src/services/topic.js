import instance from './axios';

const uri = {
  addTopic: '/api/v1/config/topic/',
  topicList: '/api/v1/config/topic/',
};

export const addTopic = async (reqBody) => {
  return await instance.post(uri.addTopic, reqBody);
};
export const topicData = async () => {
  return await instance.get(uri.topicList);
};