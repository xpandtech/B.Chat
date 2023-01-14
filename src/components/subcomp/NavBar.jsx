import React from 'react'
import "./NavbarStyle.css"
const NavBar = () => {
  return (
    <div className='navbar'>
    <h2>B.Chat</h2>
     <h4 className='inbox'>Inbox</h4>
     <h4 className='broadcast'>Broadcast</h4>
     <h4 className='outbox'>Outbox</h4>
     
    </div>
    
  )
}

export default NavBar
