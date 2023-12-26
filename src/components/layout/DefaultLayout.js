import React from 'react';
import { withRouter } from 'react-router-dom';

//import './layout.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default withRouter(DefaultLayout);