import React from 'react';
import { Alert } from 'antd';

const Alerts = (props) => {
    return (
        <Alert
            description={props.description}
            // closable
            {...props}
        />
    );
};

export default Alerts;