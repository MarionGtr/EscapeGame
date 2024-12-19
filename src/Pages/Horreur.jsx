import { useState } from "react";

const Horreur = () => {
    const [isFound, setIsFound] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [score, setScore] = useState(0);

    const handleclick = () => {
        if (!isFound) {
            setClickCount(clickCount + 1);

            if (clickCount + 1 >= 3) {
                alert("Perdu ! Vous avez utilisé vos 3 essais.");
                setClickCount(0); // Réinitialisation du compteur de clic
                setIsFound(false); // Réinitialisation de la recherche
                setScore(0); // Réinitialisation du score
            } else {
                setIsFound(true);
                setScore(score + 1); // Incrémenter le score en cas de succès
            }
        }
    };

    return (
        <div className="game-container">
            <h1>Escape Game : Trouvez l'objet caché</h1>
            <p>Score : {score}</p>
            <p>Essais restants : {3 - clickCount}</p>

            {!isFound && <p>Indice : Chercher près de la lumière...</p> }

            <div className="image-container">
                <img src="./src/img/Dead.jpg" alt="Dead" className="background-image" />
                <div 
                    className="zone" 
                    onClick={handleclick} 
                    title="Cliquez ici !"
                    style={{ width: '50px', height: '50px', background: 'transparent', position: 'absolute', left: '50%', top: '50%', zIndex: 1 }}
                ></div>

                {isFound && (
                    <div className="victory-message">
                        <p>Bravo ! Vous avez trouvé le message caché </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Horreur;
