import { Button, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import EscapeServices from '../Services/EscapeService'

const DetailsPage = () => {
    const { id } = useParams();
    const [Escape, setEscape] = useState([]);
  
    const fetchEscapeByID = async () => {
      try {
        const response = await EscapeServices.getEscapeById(id);
        setEscape(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchEscapeByID();
    }, []);
  
    console.log(Escape);
  
    
     
   
   return <Container className="page-details">
    <div className="corps">
        <div className="partie-gauche">
            <div className="bloc-titre-details">
                <h1>{Escape.name}</h1>
            </div>
            <div className="bloc-description-details">
                <h3>{Escape.description}</h3>
            </div>
        </div>

        <div className="partie-droite">
            <div className="bloc-img">
            <img src={`/images/${Escape.image_url}`} alt="Description de l'image" />
            </div>

            <div className="sous-bloc-droite">
                <div className="difficulte" >
                    <h5>Difficulter {Escape.difficulty}</h5>
                </div>
                <div className="duree-prix">
                    <div className="duree">
                        <h5>{Escape.duration_minutes} min</h5>
                    </div>
                    <div className="prix">
                        <h5>{Escape.price} euros</h5>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div className="div-reservation">
        <div>
           <a href="/Booking"> <Button>Réserver</Button></a>
        </div>
        {/* <div className="calendrier">
           
        </div> */}
    </div>


</Container>
}


export default DetailsPage;