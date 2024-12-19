import axios from 'axios';

function getAllEscape(){
    return axios.get('http://127.0.0.1:3000/escapeGames/allEscapeGames')
}

function getEscapeById(id){
    return axios.get('http://127.0.0.1:3000/escapeGames/escapeGame/'+id)
}


export default {
    getAllEscape,
    getEscapeById
}