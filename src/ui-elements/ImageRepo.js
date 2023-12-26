import React from "react";
import { Image } from "antd";
import PropTypes from 'prop-types';

export const Logos = (props) => {
    const { alt, className, children } = props
    return (<>
        <Image {...props} preview={false} src={children} className={` ${className}`} alt={alt} />
    </>)
}
Logos.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string
}
export const Images = (props) => {
    const { alt, className, children } = props
    return (<>
        <Image {...props} preview={false} src={children} className={`w-100 ${className}`} alt={alt} style={{}} />
    </>)
}
Images.propType = {
    children: PropTypes.string,
    className: PropTypes.string
}

export const MyImage = (props) => {
    const { alt, className, children } = props
    return (<>
        <Image {...props} preview={false} src={children} className={` ${className}`} alt={alt} style={{ width: '100px', height: '100px', border: '1px solid black', borderRadius: '100px' }} />
    </>)
}
MyImage.propTyps = {
    children: PropTypes.string,
    className: PropTypes.string
}
export const Img = (props) => {
    const { alt, className, children } = props
    return (<>
        <Image {...props} preview={false} src={children} className={` ${className}`} alt={alt}  />
    </>)
}
Img.propTyps = {
    children: PropTypes.string,
    className: PropTypes.string
}