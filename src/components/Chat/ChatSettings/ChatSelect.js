import React, { useState } from 'react';

const ChatSelect = () => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`selected ${e.target.value}`);
    setValue(e.target.value);
  };

  // const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('search:', e.target.value);
  // };

  return (
    <div className="select-container">
      {/* <input type="text" placeholder="Search" onChange={onSearch} /> */}
      <select value={value} onChange={onChange}>
        <option value="">Select a person</option>
        <option value="jack">Jack</option>
        <option value="lucy">Lucy</option>
        <option value="tom">Tom</option>
      </select>
    </div>
  );
};

export default ChatSelect;
