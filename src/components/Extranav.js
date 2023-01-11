import React from 'react';
import './comp.css';
import Agent from './subcomp/Agent';
import Avtar from './subcomp/Avtar';
import ExtraNavicons from './subcomp/ExtraNavicons';



const Extranav = () => {
  return (
    <>
      <div className='extnav'>
      <Agent/>
      <Avtar/>
      <ExtraNavicons/>

    </div>
    
    </>
    
  )
}

export default Extranav;
