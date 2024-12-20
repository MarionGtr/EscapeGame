import axios from "axios";

function login(user){
    return axios.post('http://localhost:3000/api/user/connexion', user)
}

function getUsersById(id){
    return axios.get('http://127.0.0.1:3000/user/user/'+id)
}


export default {login,
    getUsersById
}