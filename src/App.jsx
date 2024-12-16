import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SigninPage from './Pages/SigninPage'
import LoginPage from './Pages/LoginPage'
import Navbar from './Components/Navbar'
import './App.css'
import AuthService from './Services/AuthService'
import AuthContext from './Context/AuthContext'
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isValid());
  const [user, setUser] = useState(AuthService.getUser());
  
  return <>
  <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/SigninPage' element={<SigninPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  </>

}

export default App
