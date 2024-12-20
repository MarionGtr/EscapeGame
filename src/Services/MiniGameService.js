import axios from 'axios';

function getAllMiniJeux(){
    return axios.post('http://127.0.0.1:3000/minijeux/AllMiniJeux')
} 
function addMiniJeux(MiniJeux){
    return axios.post('http://127.0.0.1:3000/minijeux/addMiniJeux', MiniJeux)
} 

function getDeleteMiniJeux(id) {
    return axios.get("http://localhost:3000/minijeux/deleteMiniJeux/" + id)
}
function getJeuxId(id) {
    return axios.get("http://localhost:3000/minijeux/miniJeux/" + id)
}


export default {
    getAllMiniJeux, addMiniJeux, getDeleteMiniJeux,getJeuxId
}