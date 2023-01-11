import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './ExtraNavStyle.css'
export default function ImageAvatars() {
  return (
<div className='Main-body'>
<Stack direction="row" spacing={2}>
        <div className='Avtar'>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
        </div>
     
<select className='Main'>
        <option>Chatbot</option>
        <option>Chatbot</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        </select>
        <img className="Kt"  src="https://xpandbat.io/assets/images/inbox-img/pin.png"/>
    <img className="tv" src="https://xpandbat.io/assets/images/inbox-img/chatbot-icon.png"/>
    </Stack>
</div>
  );
}