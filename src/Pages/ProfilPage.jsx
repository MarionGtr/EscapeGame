import React from "react";

const ProfilPage = () => {



    return <>
 <div class="profil-container">
        <div class="profil-header">
            <h1>Profil de : "id_user"</h1>
            <p>Bienvenue sur votre espace personnel. Voici l'historique de vos commandes.</p>
        </div>

        <div class="order-history">
          
            <div class="order-card">
                <h3>Escape Game : <span>id_escape_game</span></h3>
                <p>Date : reservation_date</p>
                <p>Participants : number_of_people</p>
                <p>Réservé le : creation_date</p>
            </div>

           {/* <p class="no-orders">Vous n'avez pas encore effectué de commande.</p> */}

        </div>
    </div>


    </>
}
 
export default ProfilPage;