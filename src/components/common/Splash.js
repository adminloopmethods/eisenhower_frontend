import { Space } from 'antd';
import React from 'react'
import { Img } from '../../ui-elements/ImageRepo';
import { logo, waves1 } from '../../utils/ImagePath';

const Splash = () => {
  console.log("Login Component")
  
  return (
    <>
      <Space align="center" direction="vertical" className='vh-100 justify-content-center' style={{ margin: '-100px' }}>
        <Img children={logo} alt="logo" />
        <p>Prioratize  your work <br />
          efficiently</p>
      </Space>
      <Img children={waves1} className="waves-position" alt="items" />
    </>
  )
}

export default Splash;