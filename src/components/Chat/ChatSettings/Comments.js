import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Comments() {
  return (
    <MDBContainer className="notebox-container">
      <MDBRow className="notebox-row">
        <MDBCol className="notebox-col">
          <MDBCard
            className="notebox-card"
            
          >
            <MDBCardBody>
              <MDBInput wrapperClass="mb-4" placeholder="Type comment..."/>

              <MDBCard className="notebox-card">
              </MDBCard>

              <MDBCard className="notebox-card">
                <MDBCardBody>

                  <div className="d-flex">
                   
                    <p>Type your note, and hit enter to add it</p>

                    <div className="flex-row">

                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                    </div>
                    <div className="flex-row">
                   
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="notebox-card">
              </MDBCard>

              <MDBCard className="notebox-card">
                <MDBCardBody>

                
                     
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}