import React from 'react';
import { Avatar } from 'react-chat-engine';
import './ExtraNav.css';
import Agent from './subcomp/Agent';
import Avtar from './subcomp/Avtar';
import ExtraNavicons from './subcomp/ExtraNavicons';
import Timer from './subcomp/Timer';



const Extranav = () => {
  return (
    <>
      <div className='extnav'>
      <Agent/>
      <Avtar/>
      <ExtraNavicons/>
      <Timer/>

    </div>
    
    </>
    
  )
}

export default Extranav;
