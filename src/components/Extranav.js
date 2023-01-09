import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "./ExtraNav.css";

function NavBar() {

  return (
    <AppBar  position="static">
      <Container className='extranav' maxWidth="xl">
        <Toolbar disableGutters>
          
          
         


    

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;