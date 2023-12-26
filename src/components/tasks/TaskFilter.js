import React from 'react';
import { DatePicker, Form, Select } from 'antd';
import { MainButton } from '../../ui-elements/ButtonRepo';
const { Option } = Select;
const TaskFilter = () => {
    return (
        <>
            <Form>

                <Form.Item
                    name=""
                    className=''>
                    <Select
                        placeholder="Department">
                        <Option></Option>
                        <Option></Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name=""
                    className=''>
                    <Select
                        placeholder="Topic">
                        <Option></Option>
                        <Option></Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name=""
                    className=''>
                    <Select
                        placeholder="Members">
                        <Option></Option>
                        <Option></Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name=""
                    className=''>
                    <DatePicker
                        placeholder='Start date'
                    />
                </Form.Item>
                <Form.Item
                    name=""
                    className=''>
                    <DatePicker
                        placeholder='End Date'
                    />
                </Form.Item>
                <Form.Item
                    name=""
                    className='mb-0'>
                    <MainButton
                        children="Apply"
                        className='w-100' />
                </Form.Item>
            </Form>
        </>
    )
}
export default TaskFilter;