import React from 'react';
import './onprogress.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {EmojiDizzy} from 'react-bootstrap-icons';

const OnProgress = () => {
  return (
    <div className='on'>
        <p className='on-p'>on progress</p>
        <h1>Waiting for Mood Developer <EmojiDizzy/></h1>
        <ProgressBar animated now={15} variant="custom"/>
    </div>
  )
}

export default OnProgress