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
          <MDBCol lg='5' md='6' className='mb-4 mb-md-0'>
            <div>
              <img className='localisation'  src="./src/img/mapEscape.png" alt="map" />
            </div>
            <h5 id='title-localisation' className='text-uppercase'>Localisation</h5>
            <div>
              <p>
                Adresse : 46 Rue Faidherbe, Lille (59350)
              </p>
              <p>
                Horaire : 9H 12H – 14H 00H
              </p>
            </div>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Nos Réseaux</h5>
            <div className='bloc-reseaux'>
              <div><a href="https://www.facebook.com"><img className='logo-fb' src="./src/imglogo/LogoFB.png" alt="logo-facebook" /></a></div>
              <div className='logo-insta'><a href="https://www.instagram.com/"><img className='logo-insta' src="./src/imglogo/LogoInsta.png" alt="logo-instagram"  /></a></div>
            </div>
            <div className='contact'>
              <h5 id='h5-contact' className='text-uppercase'>Contact</h5>
            </div>
            <div>
              <p>Mail : tbialasik@fcdigital.fr</p>
            </div>
            <div className='num'><p>Numéro : 0666666666</p></div>
            <div>
              <h5 className='contact'>Nos Mentions</h5>
            </div>
            <div className='mention' ><a className='mention' href="/legal"><p>Mentions Légales</p></a></div>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <div>
              <img className='logo-footer' src="./src/img/logo.png" alt="" />
            </div>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.13)' }}>
        <div className='copyright'>
          <a className='copyright' href='http://localhost:5173/'>
            &copy; {new Date().getFullYear()} Copyright:{' '} EnigmeEvadée.com
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
