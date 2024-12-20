import { useState, useEffect } from "react";
import MiniGameService from '../Services/MiniGameService'; // Importation du service pour récupérer le mini-jeu

const Horreur = () => {
    const [gameData, setGameData] = useState(null); // Pour stocker les données du mini-jeu
    const [isFound, setIsFound] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [score, setScore] = useState(0);
    const [reward, setReward] = useState('');

    useEffect(() => {
        try {
            MiniGameService.getJeuxId(gameId)
                .then(response => {
                    console.log(response.data)
                    setGameData(response); // Enregistrer les données récupérées
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération du mini-jeu :", error);
                });
        } catch (error) {
            console.error( error);
        }
    }, []);

    const handleClick = (event) => {
        if (clickCount >= 3 || isFound) return;
        setClickCount(clickCount + 1);
        
        // Détection du clic dans la zone
        const clickX = event.clientX;
        const clickY = event.clientY;
        const element = document.elementFromPoint(clickX, clickY);

        if (element && element.classList.contains('zone')) {
            setIsFound(true);
            setScore(score + 1);
            const randomReward = gameData?.reward || 'Récompense aléatoire'; // Utiliser la récompense du jeu
            setReward(`Bravo ! Vous avez gagné ${randomReward} !`);
        }

        if (clickCount + 1 >= 3 && !isFound) {
            alert("Perdu ! Vous avez utilisé vos 3 essais.");
        }
    };

    const resetGame = () => {
        setClickCount(0);
        setIsFound(false);
        setScore(0);
        setReward('');
    };

    // if (!gameData) {
    //     return <div>Chargement du jeu...</div>;
    // }

    return (
        <div className="game-container">
            {/* <h1>{gameData.name}</h1> Nom du jeu */}
            {/* <p>{gameData.description}</p> Description du jeu */}
            {/* <p>Diffusion : {gameData.difficulty_level}</p> Niveau de difficulté */}
            
            <div className="image-container" onClick={handleClick}>
                <img src= './src/img/Dead.jpg' alt="Dead" className="background-image" />
                {!isFound && (
                    <div 
                        className="zone" 
                        title="Cliquez ici !" 
                        style={{ 
                            width: '10px', 
                            height: '10px', 
                            background: 'rgba(255, 0, 0, 0.5)', 
                            position: 'absolute', 
                            left: '56%', 
                            top: '57%', 
                            transform: 'translate(-50%, -50%)' 
                        }}
                    ></div>
                )}
                {isFound && (
                    <div className="victory-message">
                        <p>Bravo ! Vous avez trouvé l'objet caché</p>
                        <p>{reward}</p> {/* Afficher la récompense */}
                    </div>
                )}
            </div>

            <div className="score-container">
                <p>Score : {score}</p>
                <p>Essais restants : {3 - clickCount}</p>
            </div>

            {clickCount >= 3 || isFound ? (
                <button onClick={resetGame}>Recommencer</button>
            ) : null}
        </div>
    );
};

export default Horreur;