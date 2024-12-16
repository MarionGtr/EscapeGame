import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

function setAxiosToken() {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers["Authorization"] = "Bearer " + token;
      // le token est valide
    }else{ 
        delete axios.defaults.headers["Authorization"];
    }
}

function logout() {
    localStorage.removeItem('token');
    delete axios.defaults.headers["Authorization"];
    // déconnecter l'utilisateur et supprimer le token de localStorage
}

function getUser() {
  const token = localStorage.getItem('token');
    if (token && isValid()) {
        const decodedToken = jwtDecode(token);
       
        // le token est valide et contient les informations de l'utilisateur
        
        return {
            id: decodedToken.id,
            email: decodedToken.email
        }
    } else {
        return{};
    }

}

function isValid() {
    const token = localStorage.getItem('token');
    if (token){
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        if (decodedToken.exp * 1000 < new Date().getTime()){
            logout();  // le token est expiré, déconnecter l'utilisateur et supprimer le token de localStorage
            return false;   
        }else{
            setAxiosToken();
            return true;   // le token est valide mais expiré
        }
       // verifier si le token est valide   
    }else{
        logout();
        return false;
    }
}

export default {isValid, setAxiosToken, getUser, logout}; 