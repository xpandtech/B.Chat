import ChatSelect from "./ChatSelect";
<<<<<<< HEAD
// import Tag from "./Tag";
=======
import Tag from "./Tag";
>>>>>>> 18a548cb5bf0f8720b4f7fb33f2ad6eefcba955c
import React, { useEffec, useState } from "react";
import InputTextWithClearButton from "./TextRequired";
import Avatar from "@mui/material/Avatar";

const ChatSettingsColumn = () => {
  return (
    <>
      <div className="settings-column">

     {/* Customer Profile picture ------------------------------------ */}

      <Avatar
        className="msg-user-avatar"
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 66, height: 66 }}
      />

    {/*  Customer Name ----------------------------------------------- */}

        <p className="msg-user-name">
          John Doe
        </p>

    {/* ! Customer Number -------------------------------------------- */}

        <p className="msg-user-number">+919876543210</p>

     {/* Submit button ----------------------------------------------- */}

        <ChatSelect />

     {/* Customer Info ----------------------------------------------- */}
 
        <p className="customer-info"> Customer Info </p>

        <InputTextWithClearButton />

     {/* Tag --------------------------------------------------------- */}

        <p className="para">Tag</p>

<<<<<<< HEAD
        {/* <Tag className="tagsec" /> */}
{/* <Tag/> */}
=======
        <Tag className="" />



>>>>>>> 18a548cb5bf0f8720b4f7fb33f2ad6eefcba955c
      </div>
    </>
  );
};

export default ChatSettingsColumn;
