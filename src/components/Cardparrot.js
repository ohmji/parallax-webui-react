import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

const CardParrot = () => {
  return (
      <MDBCard style={{ width: "30rem" }}>
        <MDBCardImage className="img-fluid" hover zoom src="https://images.unsplash.com/photo-1513969235936-0a0e74753875?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" waves />
        <MDBCardBody>
          <MDBCardTitle>Parrot</MDBCardTitle>
          <MDBCardText>
          Parrots, also known as psittacines /ˈsɪtəsaɪnz/,[1][2] are birds of the roughly 393 species in 92 genera that make up the order Psittaciformes, found in most tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea ("true" parrots), the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots). Parrots have a generally pantropical distribution with several species inhabiting temperate regions in the Southern Hemisphere, as well. The greatest diversity of parrots is in South America and Australasia.
          </MDBCardText>
          <MDBBtn color="elegant-color-dark" >LOVE YA</MDBBtn>
        </MDBCardBody>
      </MDBCard>
  )
}

export default CardParrot;