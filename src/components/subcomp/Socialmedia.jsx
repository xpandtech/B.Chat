import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function SocialMedia() {
  return (
    <>
      <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
        <MDBIcon fab icon='pinterest' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#4c75a3' }} href='#'>
        <MDBIcon fab icon='vk' />
      </MDBBtn>


      <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
        <MDBIcon fab icon='youtube' />
      </MDBBtn>

    </>
  );
}

 
