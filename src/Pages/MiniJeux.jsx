import React from "react";
import { useNavigate } from "react-router-dom";

const MiniJeux = () => {
    // const handleClickQuest = () => {
    //     window.open("https://rakura.com/the-quest", "_blank");
    //   };

    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/Horreur");
    };



  return (
    <div className="mini-jeux-page">
      <div className="div-titre-card">
        <h1>NOS MINI JEUX</h1>
      </div>
      {/* <div className="mini-jeux-container">
        <div  img src="./src/img/TheQuest.jpg" alt="Mini Jeux"className="mini-jeu">
        <div className="mini-jeux-container"><img
          src="./src/img/TheQuest.jpg" // Chemin vers l'image dans le dossier public
          alt="Mini Jeux"
          className="mini-jeux-image"
        /></div>
          <h2 className="mini-jeux-image"
        >Jeu de Quete</h2>
          <p>Testez vos connaissances avec des questions captivantes.</p>
          <button onClick={handleClickQuest}>Jouer</button>
        </div> */}
       
        <div  img src="./src/img/TheQuest.jpg" alt="Mini Jeux"className="mini-jeu">
        <div className="mini-jeux-container"><img
          src="./src/img/Dead.jpg" // Chemin vers l'image dans le dossier public
          alt="Mini Jeux"
          className="mini-jeux-image"
        /></div>
          <h2 className="mini-jeux-image"
        >Recherche le message</h2>
          <p>Testez vos connaissances avec des questions captivantes.</p>
          <button onClick={handleclick}>Jouer</button>
        </div>
       
        
      </div>
    
  );
};

export default MiniJeux;