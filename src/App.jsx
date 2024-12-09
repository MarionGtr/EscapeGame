import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import './App.css'


function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      
      </Routes>


    </BrowserRouter>
  </>

}

export default App
