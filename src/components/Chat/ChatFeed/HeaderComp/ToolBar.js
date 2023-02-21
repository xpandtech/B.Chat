import React, { useState } from "react";
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";
import { Chatbot } from "@styled-icons/simple-icons/Chatbot";
import { PinAngle } from "@styled-icons/bootstrap/PinAngle";
import CountdownTimer from "./CountdownTimer";
import Avatar from "@mui/material/Avatar";




const ToolBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    console.log(`Selected ${event.target.value}`);
    setValue(event.target.value);
  };

  return (
    <>

    {/* Toolbar - Countdown Timer ------------------------------------  */}

      <CountdownTimer/>

    {/* Toolbar - Select Operator Avatar ------------------------------ */}

      <Avatar
        className="operator-avatar"
        src="https://mui.com/static/images/avatar/2.jpg" />

    {/* Toolbar - Select Operator ------------------------------------- */}

     <div className="select-operator">
        <select value={value} onChange={handleChange}>
          <option value="">Select Operator</option>
          <option value="jack">Jack</option>
          <option value="lucy">Lucy</option>
          <option value="tom">Tom</option>
        </select>
     </div>

    {/* Toolbar - Pin -------------------------------------------------- */}

       <PinAngle className="toolbar-pin" />

    {/* Toolbar - Chatbot ---------------------------------------------- */}

        <Chatbot className="toolbar-chatbot" />

    {/* Toolbar - 3Dots ------------------------------------------------ */}

        <DotsVerticalRounded className="toolbar-3dots" />


     
    </>
  );
};

export default ToolBar;
