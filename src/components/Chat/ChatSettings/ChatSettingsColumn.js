import ChatSelect from "./ChatSelect";
// import Tag from "./Tag";
import React, { useEffec, useState } from "react";
import InputTextWithClearButton from "./TextRequired";
import Avatar from "@mui/material/Avatar";

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
        <ChatSelect />
        <p className="customer-info"> Customer Info
        </p>
        <InputTextWithClearButton />
        <p className="para">Tag</p>

        {/* <Tag className="tagsec" /> */}
{/* <Tag/> */}
      </div>
    </>
  );
};

export default ChatSettingsColumn;
