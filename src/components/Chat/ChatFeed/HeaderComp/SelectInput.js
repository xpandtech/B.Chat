import React, { useState } from "react";
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";
import { Robot } from"@styled-icons/fa-solid/Robot"
const SelectInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    console.log(`Selected ${event.target.value}`);
    setValue(event.target.value);
  };

  return (
    <>
      <div className="select-operator">
        <select value={value} onChange={handleChange}>
          <option value="">Select Operator</option>
          <option value="jack">Jack</option>
          <option value="lucy">Lucy</option>
          <option value="tom">Tom</option>
        </select>
      </div>
      <Robot className="robot"/>
        <DotsVerticalRounded className="dotsVerticalRounded"/>
    </>
  );
};

export default SelectInput;
