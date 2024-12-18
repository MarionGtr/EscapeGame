import axios from 'axios';

function getAllEscape(){
    return axios.get('http://127.0.0.1:3000/escapeGames/allEscapeGames')
}

export default {
    getAllEscape
}