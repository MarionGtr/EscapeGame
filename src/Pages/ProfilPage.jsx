import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from '../Services/UserService'

const ProfilPage = () => {

    const { id } = useParams();
    const [Users, setUsers] = useState([]);
  
    const fetchUsersById = async () => {
      try {
        const response = await UserService.getUsersById(id);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchUsersById();
    }, []);
  
    console.log(Users);
  

    return <>
 <div className="profil-container">
        <div className="profil-header">
            <h1>Profil de : {Users.username}</h1>
            <p>Bienvenue sur votre espace personnel. Voici l'historique de vos commandes.</p>
        </div>

        <div className="order-history">
          
            <div className="order-card">
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

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import UserService from '../Services/UserService';
// import { jwtDecode } from 'jwt-decode';

// const ProfilPage = () => {
//     const { id } = useParams();
//     const [Users, setUsers] = useState({});  // Initialisation avec un objet vide

//     // Décoder le token et récupérer les données de l'utilisateur
//     const fetchUserById = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 const decodedToken = jwtDecode(token);  // Décoder le token
//                 console.log('Token décodé:', decodedToken);  // Afficher le contenu du token
//                 setUsers(decodedToken);  // Mettre à jour l'état avec les données du token
//             } else {
//                 console.log('Aucun token trouvé.');
//             }

//             // Récupérer les données supplémentaires depuis l'API
//             const response = await UserService.getUsersById(id);
//             console.log('Données de l\'API:', response.data);  // Afficher les données de l'API
//             setUsers(prevState => ({
//                 ...prevState,
//                 ...response.data  // Fusionner les données de l'API avec les données du token
//             }));
//         } catch (error) {
//             console.log('Erreur lors de la récupération des données:', error);
//         }
//     };

//     useEffect(() => {
//         fetchUserById();  // Récupérer les données lors du chargement du composant
//     }, [id]);

//     useEffect(() => {
//         console.log('Données utilisateur:', Users);  // Afficher l'état `Users` dans la console
//     }, [Users]);

//     return (
//         <div className="profil-container">
//             <div className="profil-header">
//                 {/* Vérification du nom d'utilisateur */}
//                 <h1>Profil de : {Users?.username ? Users.username : "Utilisateur inconnu"}</h1>
//                 <p>Bienvenue sur votre espace personnel. Voici l'historique de vos commandes.</p>
//             </div>
//             <div className="order-history">
          
// //             <div className="order-card">
// //                 <h3>Escape Game : <span>id_escape_game</span></h3>
// //                 <p>Date : reservation_date</p>
// //                 <p>Participants : number_of_people</p>
// //                 <p>Réservé le : creation_date</p>
// //             </div>

// //            {/* <p class="no-orders">Vous n'avez pas encore effectué de commande.</p> */}

// //         </div>
// //     </div>
     
//     );
// };

// export default ProfilPage;
