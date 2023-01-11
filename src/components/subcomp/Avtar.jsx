import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./subcomp.css"

export default function Avtar() {
  return (
    <Stack className="Avt-size"  direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/2.jpg"
        sx={{ width: 26, height: 26 }}
      />
   </Stack>
  );
}