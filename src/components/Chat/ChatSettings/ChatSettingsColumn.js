import SubmitButton from "./SubmitButton";
import Tag from "./Tag";
import React, { useEffec, useState } from "react";
import Avatar from "@mui/material/Avatar";
import InputTextWithClearButton from "./CustomerInput"
import NoteBox from  "./NoteBox"
import "./scroll.css"

const ChatSettingsColumn = () => {
  return (
    <>
      <div className="settings-column">

      <Avatar
        className="msg-user-avatar"
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 66, height: 66 }}
      />


        <p className="msg-user-name">
          John Doe
        </p>
        <p className="msg-user-number">+919876543210</p>
        <SubmitButton />
        <p className="para"> Customer Info
        </p>
        <InputTextWithClearButton />
        <p className="para">Tag</p>

        <Tag/>
        <NoteBox/>
        
      </div>
  
    </>
  );
};

export default ChatSettingsColumn;
