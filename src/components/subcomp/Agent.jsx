import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './subcomp.css';

export default function Agent() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1.6, minWidth: 180 }} size="small">
      <InputLabel id="demo-select-small">Agent</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Agent"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>John</MenuItem>
        <MenuItem value={20}>Devid</MenuItem>
        <MenuItem value={30}>Lissy</MenuItem>
        <MenuItem value={30}>Lucy</MenuItem>
      </Select>
    </FormControl>
  );
}