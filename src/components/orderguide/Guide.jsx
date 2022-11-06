import React from 'react';
import './guide.css';
import { Icon1CircleFill, Icon2CircleFill, Icon3CircleFill, Icon4CircleFill } from "react-bootstrap-icons";

const Guide = () => {
  return (
    <div className='guide' id='how'>
        <div className='order'>
        <h1><span>How</span> to Order In Flower.Co</h1>
        <h3>Lorem ipsum dolor <Icon1CircleFill className='icon'/></h3>
        <h3>Lorem ipsum dolor sit <Icon2CircleFill className='icon'/></h3>
        <h3>Lorem ipsum dolor sit amet Lorem, ipsum <Icon3CircleFill className='icon'/></h3>
        <h3>Lorem ipsum dolor <Icon4CircleFill className='icon'/></h3>
        </div>
    </div>
  )
}

export default Guide