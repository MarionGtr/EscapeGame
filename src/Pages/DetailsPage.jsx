import { Container } from "react-bootstrap";
import React, { useState } from 'react';
import BookingPage from '../Components/BookingPage'


const DetailsPage = () => {



    return <Container className="page-details">
        <div className="corps">
            <div className="partie-gauche">
                <div className="bloc-titre-details">
                    <h1>TITRE ESCAPE GAME</h1>
                </div>
                <div className="bloc-description-details">
                    <h3>'Plongez dans les intrigues de Westeros en tant que prétendants au Trone de Fer. Resolvez des enigmes, dejouez des complots et trouvez le chemin vers le trone pour revendiquer votre droit au pouvoir.</h3>
                </div>
            </div>

            <div className="partie-droite">
                <div className="bloc-img">
                    <img src="src\img\ambiance1.png" alt="" />
                </div>

                <div className="sous-bloc-droite">
                    <div className="difficulte" >
                        <h5>Difficulté : + + +</h5>
                    </div>
                    <div className="duree-prix">
                        <div className="duree">
                            <h5>Durée : 60 minutes</h5>
                        </div>
                        <div className="prix">
                            <h5>Prix : 100 euros</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="div-reservation">
            <div className="titre-resa">
                <h1>RÉSERVATION</h1>
            </div>
            <div className="calendrier">
                <BookingPage />
            </div>
        </div>


    </Container>
}

export default DetailsPage;