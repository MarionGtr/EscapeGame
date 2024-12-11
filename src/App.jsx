import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SigninPage from './Pages/SigninPage'
import LoginPage from './Pages/LoginPage'
import Navbar from './Components/Navbar'
import './App.css'

function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signin' element={<SigninPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  </>

}

export default App
