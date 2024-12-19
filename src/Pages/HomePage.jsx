
import React, { useContext, useEffect, useState } from "react";
import MyCarousel from "../Components/Carousel";
import EscapeCard from "../Components/EscapeCard";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import EscapeService from "../Services/EscapeService";


const HomePage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [data, setData] = useState([])

  const fetchEscapeGame = async () => {
    try {
      const response = await EscapeService.getAllEscape()
      setData(response.data)
        console.log(response.data)
    } catch (error) {
      console.log("error")
    }
  }

  useEffect(() => {
    fetchEscapeGame()
}, [])



  //---------FONCTION TITRE FLOU-----------//
  React.useEffect(() => {
    function setStyle(element, styles) {
      if (!element) return; // Vérifie si l'élément existe
      for (const property in styles) {
        element.style[property] = styles[property];
      }
    }

    // Détecter les mouvements de la souris
    function detectMouseMove() {
      const containerTitre = document.querySelector(".container-titre");
      if (!containerTitre) return; // Vérifie si le conteneur existe

      const containerWidth = containerTitre.offsetWidth;
      const hover = document.querySelector(".hover");
      const leftSide = document.querySelector(".left-side");
      const rightSide = document.querySelector(".right-side");

      containerTitre.addEventListener("mousemove", (e) => {
        const rect = containerTitre.getBoundingClientRect();
        const pageX = e.clientX - rect.left; // Position relative au conteneur

        setStyle(hover, { left: pageX + "px" });
        setStyle(leftSide, { left: pageX + 75 + "px" });
        const rightSideLeft = containerWidth - pageX;
        setStyle(rightSide, { right: rightSideLeft + "px" });
      });
    }

    detectMouseMove(); // Appliquer la détection


    return () => {
      const containerTitre = document.querySelector(".container-titre");
      if (containerTitre) {
        containerTitre.removeEventListener("mousemove", detectMouseMove);
      }
    };
  }, []);

  //--------------------------------------

  return (
    
      <div className="body-homepage">
        <div className="div-main-title">
          <div id="focus-container" className="container-titre">
            <div className="left-side"></div>
            <div className="right-side"></div>
            <div className="hover">
              <div className="tri-1">
                <div className="bit-top"></div>
                <div className="bit-top-left"></div>
              </div>
              <div className="tri-2">
                <div className="bit-top-right"></div>
                <div className="bit-top-right-2"></div>
              </div>
              <div className="tri-3">
                <div className="bit-bottom-left"></div>
                <div className="bit-bottom-left-2"></div>
              </div>
              <div className="tri-4">
                <div className="bit-bottom-right"></div>
                <div className="bit-bottom-right-2"></div>
              </div>
            </div>
            <p className="blur">ENIGMES EVADEES</p>
            <p className="focus">ENIGMES EVADEES</p>
          </div>
        </div>

        <div className="bloc-description">
          <div className="div-carousel">
            <MyCarousel />
          </div>

          <div className="div-description">
            <div className="div-apropos">
              <h1>À PROPOS DE NOUS</h1>
            </div>
            <div className="div-para">
              <p>"Énigmes Évadées" a été créée avec une passion commune pour les défis intellectuels et les
                aventures captivantes. Notre équipe dévouée travaille sans relâche pour concevoir des Escape Games
                originaux, stimulants et divertissants qui transportent les participants dans des univers
                extraordinaires</p>
            </div>
          </div>

        </div>
        <div className="div-card">
          <div className="div-titre-card">
            <h1>NOS ESCAPES GAMES</h1>
          </div>
          <div className="div-bloc-card">
          {data.map((item) => {
            return <EscapeCard key={item.id_escape_game} escapeGame={item} />
            })}
          </div>
        </div>
      
      </div>
    
  );
};

export default HomePage;
