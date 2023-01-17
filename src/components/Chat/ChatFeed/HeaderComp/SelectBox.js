import React, { useState } from "react";
import { Select } from 'antd';

const { Option } = Select;

const SelectBox = () => {
    const [selectedValue, setSelectedValue] = useState("Sort By");

    const handleChange = (value) => {
        setSelectedValue(value);
    }

    return (
        <Select
            className="custom-select"
            value={selectedValue}
            style={{ width: 120 }}
            onChange={handleChange}
        >
            <Option value="time">Time</Option>
            <Option value="name">Name</Option>
            <Option value="status">Status</Option>
        </Select>
    )
}

export default SelectBox;
