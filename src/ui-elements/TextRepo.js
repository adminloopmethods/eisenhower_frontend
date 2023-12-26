import React from 'react';
import ProtoTypes from 'prop-types';
import '../ui-elements/element-ui.scss';

// ========== for heading text ==========
export const AuthTitle = (props) => {
    const { children, className } = props;
    return (<> <h1 {...props} className={`auth-text  ${className}`}>{children}</h1></>)
}
AuthTitle.propTypes = {
    children: ProtoTypes.node,
    className: ProtoTypes.string
}
// -------------------------------------


// ========== for heading text ==========
export const MainTitle = (props) => {
    const { children, className } = props;
    return (<> <h1 {...props} className={`title-css ${className}`}>{children}</h1></>)
}
MainTitle.propTypes = {
    children: ProtoTypes.node,
    className: ProtoTypes.string
}

// -------------------------------------

// ========== for Regular text ==========
export const NormalText = (props) => {
    const { children, className } = props;
    return (
        <><p {...props} className={`normal-text ${className}`}>{children}</p></>
    )
}
NormalText.propTypes = {
    children: ProtoTypes.node,
    className: ProtoTypes.string
}
// -------------------------------------

// ========== for small text ==========
export const SpanText = (props) => {
    const { children, className } = props;
    return (
        <><span {...props} className={`span-text ${className}`}>{children}</span></>
    )
}
SpanText.propTypes = {
    children: ProtoTypes.node,
    className: ProtoTypes.string
}
// -------------------------------------


// ========== for small regular text ==========
export const CardHeadText = (props) => {
    const { children, className } = props;
    return (
        <><h4 {...props} className={`card-head-text ${className}`}>{children}</h4></>
    )
}
CardHeadText.propTypes = {
    children: ProtoTypes.node,
    className: ProtoTypes.string
}
// -------------------------------------
export const NormalHeadText = (props) => {
    const { children, className } = props;
    return (
        <><h4 {...props} className={`normal-head-text ${className}`}>{children}</h4></>
    )
}
NormalHeadText.propTypes = {
    children: ProtoTypes.node,
    className: ProtoTypes.string
}

