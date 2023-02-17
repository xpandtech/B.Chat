import React, { useState } from 'react';

const SelectInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(`Selected ${event.target.value}`);
    setValue(event.target.value);
  };

  return (
    <div className="select-operator">
      <select value={value} onChange={handleChange}>
        <option value="">Select Operator</option>
        <option value="jack">Jack</option>
        <option value="lucy">Lucy</option>
        <option value="tom">Tom</option>
      </select>
    </div>
  );
};

export default SelectInput;

