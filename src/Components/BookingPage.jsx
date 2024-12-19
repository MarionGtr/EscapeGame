import React, { useState } from 'react';
import BookingPage from "../Components/BookingPage"
import { Container } from 'react-bootstrap';

// ----------Fonction pour obtenir la date au format Année-mois-jour-----------------
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

const Calendar = () => {
  // Liste des escape games disponibles (avec ID et nom)
  const escapeGames = [
    { id: 1, name: 'Escape Game - La Salle des Mystères' },
    { id: 2, name: 'Escape Game - L\'Île Perdue' },
  ];

  // États pour la date, l'heure sélectionnée et l'escape game sélectionné
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEscapeGame, setSelectedEscapeGame] = useState(escapeGames[0].id);

  // Liste d'heures possibles pour chaque jour
  const availableTimes = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Un objet pour stocker les créneaux horaires réservés pour chaque escape game et chaque date
  const [reservedTimes, setReservedTimes] = useState({
    1: { [getCurrentDate()]: [] }, // Escape Game 1
    2: { [getCurrentDate()]: [] }, // Escape Game 2
  });

  // Fonction pour gérer la modification de la date
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Fonction pour gérer la sélection de l'heure
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Fonction pour gérer la sélection de l'escape game
  const handleEscapeGameChange = (e) => {
    setSelectedEscapeGame(Number(e.target.value));
  };

  // Fonction pour gérer la réservation d'un créneau
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedTime) {
      alert('Veuillez sélectionner une heure.');
      return;
    }

    // Vérifier si l'heure est déjà réservée pour cet escape game et cette date
    if (reservedTimes[selectedEscapeGame][selectedDate]?.includes(selectedTime)) {
      alert('Ce créneau est déjà réservé. Veuillez choisir une autre heure.');
      return;
    }

    // Ajouter l'heure réservée à la liste des réservations
    setReservedTimes((prevReservedTimes) => {
      const updatedTimes = { ...prevReservedTimes };
      updatedTimes[selectedEscapeGame] = {
        ...updatedTimes[selectedEscapeGame],
        [selectedDate]: [...(updatedTimes[selectedEscapeGame][selectedDate] || []), selectedTime],
      };
      return updatedTimes;
    });

    alert(`Réservation effectuée pour l'escape game "${escapeGames.find(eg => eg.id === selectedEscapeGame).name}" le ${selectedDate} à ${selectedTime}`);
  };

  // Filtrer les heures disponibles pour l'escape game et la date sélectionnée
  const getAvailableTimesForSelectedDate = () => {
    return availableTimes.filter((time) => !reservedTimes[selectedEscapeGame][selectedDate]?.includes(time));
  };

  return <Container>

    
    <div className='bloc-calendrier'>
    <div className="calendar-container">
      <h2>Réservez votre escape game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <select
            id="escapeGame"
            value={selectedEscapeGame}
            onChange={handleEscapeGameChange}
            required
          >
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
            min={getCurrentDate()} 
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
    </div>
    </div>
    </Container>
};

export default Calendar;