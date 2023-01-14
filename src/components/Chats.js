import React from "react"
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'
import { auth } from "../firebase"

import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef, useState } from "react"
import axios from "axios";

export default function Chats() {
  const history = useHistory()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true);

  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", {type: 'image/jpg'} )
  }


  useEffect(() => {
     if (!user) {
      history.push("/");


      return;
     }

     axios.get('https://api.chatengine.io/users/me',{
       headers: {
            "project-id": "eec11bf8-0c40-4f33-a078-d09551198bc7",
            "user-name": user.email,
            "user-secret": user.uid,
       }
     })
     .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.displayName);
        formdata.append('secret', user.uid);

        getFile(user.photoUrl)



      })
  }, [user, history])

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          B.Chat
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='eec11bf8-0c40-4f33-a078-d09551198bc7'
        userName='jone'
        userSecret='12345'
      />
    </div>
  )
}
