import React, { useState } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types'
export const UseModal = (props) => {
    const [visible, setVisible] = useState(false);
    const { closable, className, width, children } = props;
    return (
        <>
            <Modal
                {...props}
                centered
                footer={false}
                className={` ${className}`}
                visible={visible}
                closable={closable ? closable : true}
                width={width ? width : null}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                {/* {children} */}
            </Modal>
        </>
    )
}
UseModal.propTypes = {
    closable: PropTypes.bool,
    footer: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string
}