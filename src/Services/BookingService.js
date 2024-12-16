import axios from 'axios';

function getAllBooking(){
    return axios.get('http://127.0.0.1:3000/Booking/allBooking')
}


function addBooking(Booking){
    return axios.post('http://127.0.0.1:3000/Booking/addBooking', Booking)
}

function getUsers(users){
    return axios.post('http://127.0.0.1:3000/user/loginPage', users)
} 

function getSign(sign){
    return axios.post('http://127.0.0.1:3000/user/SigninPage', sign)
}

function getDeleteBooking(idBooking) {
    return axios.get("http://localhost:3000/Booking/deleteBooking/" + idBooking)
}


export default {getAllBooking, addBooking, getUsers, getSign, getDeleteBooking} 