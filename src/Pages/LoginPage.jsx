import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import AuthService from "../Services/AuthService";
import BookingService from "../Services/BookingService";
const Login = () => {

  const navigate = useNavigate();
const [email, setemail] = useState(''); 
const [password, setpassword] = useState('');
const {setIsAuthenticated,setUser} = useContext(AuthContext);
const handleSubmit = async (e) => {
 console.log('test');
 
  e.preventDefault();
  
  try {
  
      const response = await BookingService.getUsers({email,password})
      localStorage.setItem('token', response.data.token);
      console.log(response);
      setIsAuthenticated(true)
      setUser(AuthService.getUser())
    
     navigate ('/')
   } catch (error) {
      console.log(error);
      
   }
}



  return <Container className='formulaire'>

<h1>Connexion</h1>

    <Form onSubmit={handleSubmit}>
    <div className="group">
      <input required={true} type="text"
       onChange={(e) => setemail(e.target.value)}
       name="email"
       value={email} className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
    </div>
    <br />
    <div className="group">
      <input required={true} type="password"
       onChange={(e) => setpassword(e.target.value)}
       name="password"
       value={password} className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Mot de passe</label>
    </div>
    <div className="div-btn-create">
        <Button className="form-btn" type="submit">
          SE CONNECTER
        </Button>
      </div>
    </Form>
  </Container>

}

export default Login;