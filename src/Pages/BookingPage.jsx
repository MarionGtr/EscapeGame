// import React, { useState } from "react";
// import BookingPage from "./BookingPage";
// import { Container } from "react-bootstrap";

// // ----------Fonction pour obtenir la date au format Année-mois-jour-----------------
// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toISOString().split("T")[0];
// };

// const Calendar = () => {
//   // Liste des escape games disponibles (avec ID et nom)
//   const escapeGames = [
//     { 
//       id: 1, 
//       name: "Le Trône de Fer", 
//       description: "Plongez dans les intrigues de Westeros en tant que prétendants au Trône de Fer. Résolvez des énigmes, déjouez des complots et trouvez le chemin vers le trône pour revendiquer votre droit au pouvoir." 
//     },
//     { 
//       id: 2, 
//       name: "LA Quête du Jedi", 
//       description: "Vous êtes recrutés par la Rebellion pour accomplir une mission cruciale dans la lutte contre l'Empire Galactique. Votre destinée vous conduit à travers des planètes lointaines et des vaisseaux spatiaux emblématiques. L'avenir de la galaxie dépend de votre succès." 
//     },
//     { 
//       id: 3, 
//       name: "L'Épreuve des Sorciers", 
//       description: "Vous recevez une lettre d'acceptation à Poudlard et êtes convoqués pour participer à l'Épreuve des sorciers. Les mystères et la magie de l'école de sorcellerie vous attendent, mais attention aux dangers qui guettent dans l'ombre." 
//     }
//   ];
  

//   // États pour la date, l'heure sélectionnée et l'escape game sélectionné
//   const [selectedDate, setSelectedDate] = useState(getCurrentDate());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedEscapeGame, setSelectedEscapeGame] = useState(
//     escapeGames[0].id
//   );

//   // Liste d'heures possibles pour chaque jour
//   const availableTimes = [
//     "9:00",
//     "10:00",
//     "11:00",
//     "14:00",
//     "15:00",
//     "16:00",
//     "17:00",
//     "18:00",
//     "19:00",
//     "20:00",
//     "21:00",
//     "22:00",
//     "23:00",
//   ];

//   // Un objet pour stocker les créneaux horaires réservés pour chaque escape game et chaque date
//   const [reservedTimes, setReservedTimes] = useState({
//     1: { [getCurrentDate()]: [] }, // Escape Game 1
//     2: { [getCurrentDate()]: [] }, // Escape Game 2
//   });

//   // Fonction pour gérer la modification de la date
//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   // Fonction pour gérer la sélection de l'heure
//   const handleTimeChange = (e) => {
//     setSelectedTime(e.target.value);
//   };

//   // Fonction pour gérer la sélection de l'escape game
//   const handleEscapeGameChange = (e) => {
//     setSelectedEscapeGame(Number(e.target.value));
//   };

//   // Fonction pour gérer la réservation d'un créneau
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!selectedTime) {
//       alert("Veuillez sélectionner une heure.");
//       return;
//     }

//     // Vérifier si l'heure est déjà réservée pour cet escape game et cette date
//     if (
//       reservedTimes[selectedEscapeGame][selectedDate]?.includes(selectedTime)
//     ) {
//       alert("Ce créneau est déjà réservé. Veuillez choisir une autre heure.");
//       return;
//     }

//     // Ajouter l'heure réservée à la liste des réservations
//     setReservedTimes((prevReservedTimes) => {
//       const updatedTimes = { ...prevReservedTimes };
//       updatedTimes[selectedEscapeGame] = {
//         ...updatedTimes[selectedEscapeGame],
//         [selectedDate]: [
//           ...(updatedTimes[selectedEscapeGame][selectedDate] || []),
//           selectedTime,
//         ],
//       };
//       return updatedTimes;
//     });

//     alert(
//       `Réservation effectuée pour l'escape game "${
//         escapeGames.find((eg) => eg.id === selectedEscapeGame).name
//       }" le ${selectedDate} à ${selectedTime}`
//     );
//   };

//   // Filtrer les heures disponibles pour l'escape game et la date sélectionnée
//   const getAvailableTimesForSelectedDate = () => {
//     return availableTimes.filter(
//       (time) => !reservedTimes[selectedEscapeGame][selectedDate]?.includes(time)
//     );
//   };

//   return (
//     <Container>
//       <div className="bloc-calendrier">
//         <div className="calendar-container">
//           <h2>Réservez votre escape game</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <select
//                 id="escapeGame"
//                 value={selectedEscapeGame}
//                 onChange={handleEscapeGameChange}
//                 required
//               >
//                 {escapeGames.map((game) => (
//                   <option key={game.id} value={game.id}>
//                     {game.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <input
//                 type="date"
//                 id="date"
//                 value={selectedDate}
//                 min={getCurrentDate()}
//                 onChange={handleDateChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <select
//                 id="time"
//                 value={selectedTime}
//                 onChange={handleTimeChange}
//                 required
//               >
//                 <option value="">Sélectionner une heure</option>
//                 {getAvailableTimesForSelectedDate().map((time) => (
//                   <option key={time} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <button type="submit" className="submit-button">
//               Réserver
//             </button>
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Calendar;


import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"; // Importation de Bootstrap pour la mise en page
import authService from "../Services/AuthService"; // Importation du service d'authentification

// ----------Fonction pour obtenir la date actuelle au format Année-mois-jour-----------------
const getCurrentDate = () => {
  const date = new Date(); // Crée un objet Date avec la date actuelle
  return date.toISOString().split("T")[0]; // Retourne la date au format YYYY-MM-DD
};

const Calendar = () => {
  // Déclaration des états pour gérer l'authentification et les informations de réservation
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Si l'utilisateur est connecté ou non
  const [user, setUser] = useState(null); // Stocke les informations de l'utilisateur connecté
  const [selectedDate, setSelectedDate] = useState(getCurrentDate()); // Date sélectionnée (par défaut la date actuelle)
  const [selectedTime, setSelectedTime] = useState(""); // Heure sélectionnée (initialement vide)
  const [selectedEscapeGame, setSelectedEscapeGame] = useState(1); // Escape game sélectionné (par défaut le premier)

  // Liste des escape games disponibles
  const escapeGames = [
    { 
      id: 1, 
      name: "Le Trône de Fer", 
      description: "Plongez dans les intrigues de Westeros..." 
    },
    { 
      id: 2, 
      name: "LA Quête du Jedi", 
      description: "Vous êtes recrutés par la Rebellion..." 
    },
    { 
      id: 3, 
      name: "L'Épreuve des Sorciers", 
      description: "Vous recevez une lettre d'acceptation à Poudlard..." 
    }
  ];

  // Liste des horaires disponibles pour chaque jour
  const availableTimes = [
    "9:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", 
    "19:00", "20:00", "21:00", "22:00", "23:00"
  ];

  // Objet pour stocker les créneaux horaires réservés pour chaque escape game et chaque date
  const [reservedTimes, setReservedTimes] = useState({
    1: { [getCurrentDate()]: [] }, // Escape game 1
    2: { [getCurrentDate()]: [] }, // Escape game 2
    3: { [getCurrentDate()]: [] }, // Escape game 3
  });

  // Utilisation de useEffect pour vérifier si l'utilisateur est connecté au moment du chargement du composant
  useEffect(() => {
    const checkLoginStatus = () => {
      if (authService.isValid()) {
        setIsLoggedIn(true); // L'utilisateur est connecté
        setUser(authService.getUser()); // Récupérer les informations de l'utilisateur
      } else {
        setIsLoggedIn(false); // L'utilisateur n'est pas connecté
        setUser(null); // Réinitialiser les informations de l'utilisateur
      }
    };

    checkLoginStatus(); // Vérification au chargement du composant
  }, []); // Ce code ne s'exécute qu'une seule fois lors du montage du composant

  // Fonction pour gérer la modification de la date
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Met à jour la date sélectionnée
  };

  // Fonction pour gérer la sélection de l'heure
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value); // Met à jour l'heure sélectionnée
  };

  // Fonction pour gérer la sélection de l'escape game
  const handleEscapeGameChange = (e) => {
    setSelectedEscapeGame(Number(e.target.value)); // Met à jour l'escape game sélectionné
  };

  // Fonction pour gérer la soumission du formulaire (réservation)
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Vérifier si l'utilisateur est connecté
    if (!isLoggedIn) {
      alert("Vous devez être connecté pour réserver un escape game.");
      return;
    }

    // Vérifier si une heure a été sélectionnée
    if (!selectedTime) {
      alert("Veuillez sélectionner une heure.");
      return;
    }

    // Vérifier si l'heure est déjà réservée pour cet escape game et cette date
    if (
      reservedTimes[selectedEscapeGame][selectedDate]?.includes(selectedTime)
    ) {
      alert("Ce créneau est déjà réservé. Veuillez choisir une autre heure.");
      return;
    }

    // Ajouter l'heure réservée à la liste des réservations
    setReservedTimes((prevReservedTimes) => {
      const updatedTimes = { ...prevReservedTimes }; // Crée une copie de l'état précédent
      updatedTimes[selectedEscapeGame] = {
        ...updatedTimes[selectedEscapeGame],
        [selectedDate]: [
          ...(updatedTimes[selectedEscapeGame][selectedDate] || []), // Ajoute l'heure à la liste des réservations
          selectedTime,
        ],
      };
      return updatedTimes; // Retourne l'état mis à jour
    });

    alert(
      `Réservation effectuée pour l'escape game "${
        escapeGames.find((eg) => eg.id === selectedEscapeGame).name
      }" le ${selectedDate} à ${selectedTime}` // Affiche une alerte avec les détails de la réservation
    );
  };

  // Filtrer les horaires disponibles pour l'escape game et la date sélectionnée
  const getAvailableTimesForSelectedDate = () => {
    return availableTimes.filter(
      (time) => !reservedTimes[selectedEscapeGame][selectedDate]?.includes(time) // Retourne les heures non réservées
    );
  };

  return (
    <Container>
      <div className="bloc-calendrier">
        <div className="calendar-container">
          <h2>Réservez votre escape game</h2>

          {/* Si l'utilisateur n'est pas connecté, affiche un message d'alerte */}
          {!isLoggedIn && (
            <p className="alert-message">Vous devez être connecté pour réserver un escape game.</p>
          )}

          {/* Formulaire de réservation seulement si l'utilisateur est connecté */}
          {isLoggedIn && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <select
                  id="escapeGame"
                  value={selectedEscapeGame}
                  onChange={handleEscapeGameChange}
                  required
                >
                  {/* Affiche la liste des escape games disponibles */}
                  {escapeGames.map((game) => (
                    <option key={game.id} value={game.id}>
                      {game.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  min={getCurrentDate()} // Date minimale (aujourd'hui)
                  onChange={handleDateChange}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  id="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  required
                >
                  <option value="">Sélectionner une heure</option>
                  {/* Affiche les horaires disponibles pour la date sélectionnée */}
                  {getAvailableTimesForSelectedDate().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit-button">
                Réserver
              </button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Calendar;




