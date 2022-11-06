import React from 'react';
import './onprogress.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {EmojiDizzy, Instagram } from 'react-bootstrap-icons';


const OnProgress = () => {
  return (
    <div className='on'>
        <p className='on-p'>on progress</p>
        <h1>Waiting for Mood Developer <EmojiDizzy/></h1>
        <ProgressBar animated now={15} variant="custom"/>
        <div className='promote'>
          <a href='https://www.instagram.com/mchfrnnda_/'>
        <Instagram size={20} className='icon ig'/>
        <h7>The Developer</h7>
        </a>
        </div>

    </div>
  )
}

export default OnProgress