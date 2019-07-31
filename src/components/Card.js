import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

const Card = () => {
  return (
      <MDBCard style={{ width: "30rem" }}>
        <MDBCardImage className="img-fluid" hover zoom  src="https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80" waves />
        <MDBCardBody>
          <MDBCardTitle>Flamingo</MDBCardTitle>
          <MDBCardText>
          The name "flamingo" comes from Portuguese or Spanish flamengo, "flame-colored", in turn coming from Provençal flamenc from flama "flame" and Germanic-like suffix -ing, with a possible influence of the Spanish ethnonym flamenco "Fleming" or "Flemish". The generic name phoenicopterus (from Greek: φοινικόπτερος phoinikopteros), literally "blood red-feathered" has a similar etymology.
          </MDBCardText>
          <MDBBtn color="elegant-color-dark" >LOVE YA</MDBBtn>
        </MDBCardBody>
      </MDBCard>
  )
}

export default Card;