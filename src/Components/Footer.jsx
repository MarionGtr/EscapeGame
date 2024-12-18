import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Localisation</h5>
<div>
            <p>
            Adresse : 46 Rue Faidherbe, Lille (59350)
            </p>
            <p>
            Horaire : 9H 12H – 14H 00H
            </p>
            </div>
            <div>
              <img className='localisation'  src="./src/img/mapEscape.png" alt="map" />
            </div>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer text</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      
        <a className='text-dark' href='http://localhost:5173/'>
        &copy; {new Date().getFullYear()} Copyright:{' '} EnigmeEvadée.com
        </a>
      </div>
    </MDBFooter>
  );
}