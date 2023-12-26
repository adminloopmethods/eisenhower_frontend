import React from 'react';
import { Button } from 'antd';
import PropTypes from "prop-types";
import '../ui-elements/element-ui.scss';


// regular button
export const PureButton = (props) => {

    const { children, className } = props;
    return (
        <>
            <Button {...props} className={`pure-button ${className}`} >{children}</Button>
        </>
    )
};
PureButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
// regular button
export const MainButton = (props) => {
    
    const { children, className } = props;
    return (
        <>
            <Button {...props} className={`main-button ${className}`} >{children}</Button>
        </>
    )
};
MainButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
// secondary button
export const SecondaryButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} className={`secondary-button ${className}`} >{children}</Button>
        </>
    )
};
SecondaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export const LinkButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} type="link" className={`px-0 link ${className}`} >{children}</Button>
        </>
    )
};
LinkButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onclick: PropTypes.func
}

export const ViewButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} type="link" className={`link-view px-0  ${className}`} >{children}</Button>
        </>
    )
};
ViewButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onclick: PropTypes.func
}

export const TransationButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} type="link" className={`transation-button px-0  ${className}`} >{children}</Button>
        </>
    )
};
TransationButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
export const StatusButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} className={`status-btn ${className}`} >{children}</Button>
        </>
    )
};
StatusButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onclick: PropTypes.func
}
