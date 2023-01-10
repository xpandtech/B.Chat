import React from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { SiChatbot} from 'react-icons/si';
import {BsThreeDotsVertical} from 'react-icons/bs';
import "./subcomp.css"
const ExtraNavicons = () => {
  return (
    <div>
     <h2 className='Book-mark'><BsFillBookmarkStarFill />
     </h2> 
     <div><h2 className='chat-bot'><SiChatbot/>
     </h2></div>
     <div><h2 className='Dot-3'><BsThreeDotsVertical/></h2></div>
    </div>
    
  )
}

export default ExtraNavicons
