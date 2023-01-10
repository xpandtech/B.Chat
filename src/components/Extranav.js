import React from 'react';
import './ExtraNav.css';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import Agent from './subcomponents.jsx/Agent';



const Extranav = () => {
  return (
    <>
      <div className='extnav'>
      <Avatar className="Avtar" alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Agent/>

    </div>
    
    </>
    
  )
}

export default Extranav;
