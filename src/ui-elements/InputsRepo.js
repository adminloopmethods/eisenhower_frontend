import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

export const InputText = (props) => {
    const { label, fieldname, id, onChange, placeholder, className, value, emptyMessage, isRequired } = props;
    return (
        <>
            <Form.Item
                {...props}
                name={fieldname ? fieldname : ''}
                label={label}
                // rules={[{ required: { isRequired }, message: { emptyMessage } }]}
                onChange={onChange ? onChange : null}
                className={` ${className}`}
            >
            </Form.Item>
        </>
    )
}
InputText.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    id: PropTypes.string,
    fieldname: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    emptyMessage: PropTypes.string,
    isRequired: PropTypes.bool
}
export const InputPassword = () => {
    return (
        <></>
    )
}