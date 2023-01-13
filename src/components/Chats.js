
import React, {useref,useState,useEffect} from "react"
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { auth } from "../firebase"
import axios from "axios"

export default function Chats() {
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }
const getFile = async (url)=>{
    const response=await fetch(url);
    const data = await response.blob();
     
    return new file([data], "userPhoto.jpg",{type:"image/jpeg"})
    }
useEffect(()=>{
    if(!user){
        history.push('/');
        return;
    }
   axios.get ('https://api.chatengine.io/user/me',{
   headers:{
    "project-id": "eec11bf8-0c40-4f33-a078-d09551198bc7",
    "user-name": user.email,
    "user-secret": user.uid,
   } 
})
.then(()=>{
    setLoading(false);
})
.catch(()=>{
    let formdata = new formdata();
    formdata.append('email' ,user.email);
    formdata.append("username", user.displayName);
    formdata.append('secret',user.uid);
    getFile(user.photoUrl)
   
        .then((avatar)=>{
            formadata.append('avatar',avatar,avatar.name)

            axios.post('https://api.chatengine.io/user',
            formdata,
            {headers:{"privet-key":"0a2fca92-72ea-4116-9c39-f6a2af597d3a"}}
            
            )
            .then(()=> setLoading(false))
            .catch((error)=>console.log(error))
    })
})
},[user , history]);
  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Unichat
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