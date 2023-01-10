import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './subcomponents.css'

export default function Operator() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='operator' >
      <FormControl  sx={{ m: -2, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-helper-label">Operator</InputLabel>
        <Select
        className='operator'
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Operator"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Chatbot</MenuItem>
          <MenuItem value={20}>John</MenuItem>
          <MenuItem value={30}>Devid</MenuItem>
        </Select>
        
      </FormControl>

    </div>
  );
}