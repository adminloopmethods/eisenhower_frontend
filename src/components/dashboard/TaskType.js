import React,{useState,useEffect} from 'react';
import { Card, Col, Row,Form,Select } from 'antd';
import { NormalText } from '../../ui-elements/TextRepo';
import { MainButton } from '../../ui-elements/ButtonRepo';
import { Link } from 'react-router-dom';
import {getAllDepartments} from '../../services/department'
import { topicData } from '../../services/topic';


const { Option } = Select;
const TaskType = () => {
  const [form] = Form.useForm();
  const [departmentType, setDepartmentType] = useState('MARKETING');
  const [btnLoader, setBtnLoader] = useState(false);
  const [departmentList,setDepartmentList] = useState([]);
  const [topicList,setTopicList] = useState([]);
  const [size] = useState("default");

  useEffect(() => {
    getAllDepartments()
      .then((response) => {
      
        setDepartmentList(response?.data?.departments);
      })
      .catch((error) => {
        console.log("Error!", error);
      });
      topicData()
      .then((response) => {
        setTopicList(response?.data?.topics);
      })
      .catch((error) => {
        console.log('Error!', error);
      });
    }, []);
  const onFinish=()=>{
    
  }
  
  const onChange = (value) => {
    if (value.departmentType === "MARKETING") {
      setDepartmentType("MARKETING")
    } else if (value.userType === "MARKETING") {
      setDepartmentType('MARKETING');
    }
};

  return (
    <>
    <NormalText children="New Task" className="normal-text" />
    <Card className='user-form mt-0 mb-4'>
                <Form layout="vertical" form={form} name="control-hooks" onFinish={onFinish} onValuesChange={onChange} className='p-md-4'>
                    <Row gutter={48} >
                        <Col md={24} sm={24}>
                            <Form.Item name="departmentType"  rules={[{ required: true, message: 'Department is required!' }]}>
                                <Select
                                    placeholder="Select Department"
                                    allowClear >
                                      {
                                        departmentList.map((item,index)=>{
                                          return <Option value={item?.department_name}>{item?.department_name}</Option>
                                        })
                                      }
                                    
                                  
                                </Select>
                                
                            </Form.Item>
                            <Form.Item name="topicType"  rules={[{ required: true, message: 'Topic is required!' }]}>
                                <Select
                                    placeholder="Select Topic"
                                    allowClear >
                                    {
                                        topicList.map((item,index)=>{
                                          return <Option value={item?.topic_name}>{item?.topic_name}</Option>
                                        })
                                      }
                                    
                                </Select>
                            </Form.Item>
                            <Form.Item
                              name="memberType"
                              rules={[
                                {
                                  required: true,
                                  message: "Member doc is required!",
                                },
                                
                                
                              ]}
                            >
                              <Select
                                mode="tags"
                                size={size}
                                placeholder="Required Docs"
                                style={{ width: "100% " }}
                                className="pb-2"
                                maxTagTextLength={5}
                                
                              ></Select>
                            </Form.Item>
                        </Col>
                        </Row>
                        </Form>
                           
                        <Link to="/add-new-task" className='mb-4'>
                                    <MainButton children="NEXT" className='w-100 mb-2 login-btn mt-4' htmlType="submit" loading={btnLoader} />
                                </Link> 
                                </Card>  
    </>
  )
}
export default TaskType;