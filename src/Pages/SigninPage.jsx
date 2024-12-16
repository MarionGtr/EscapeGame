import { useState } from "react";
import { Container, Form } from "react-bootstrap"
import BookingService from "../Services/BookingService";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const SigninPage = () => {

  const navigate = useNavigate();
  //   const [Users, setUsers] = useState([]);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  
    const [last_name, setlast_name] = useState("");
    const [phone, setphone] = useState("");
    
   
    const handleSubmit = async (e) => {
      console.log("test");
  
      e.preventDefault();
  
      try {
        console.log(username,email,password, first_name,last_name,phone,);
  //  mettre a la place de booking service page profil ?
        const response = await BookingService.getSign({
          username,
          email,
          password,
          first_name,
          
          last_name,
          phone,
          
        });
        console.log(response);
        // mettre la navigate vers profil
        navigate("/"); 
      } catch (error) {
        console.log(error);
      }
    };

  return <Container className="formulaire">

    <h1>Créer votre profil</h1>

    <Form onSubmit={handleSubmit}>
    <div className="group">
      <input required={true} type="text" className="input"
       onChange={(e) => setusername(e.target.value)}
       name="Username"
       value={username}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Nom d'utilisateur</label>
    </div>

    <br />

    <div className="group">
      <input required={true} type="email" className="input"
      onChange={(e) => setemail(e.target.value)}
      name="email"
      value={email}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
    </div>

        <br />

    <div className="group">
      <input required={true} type="password" className="input"
      name="password"
      onChange={(e) => setpassword(e.target.value)}
      value={password}>
        
      </input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Mot de passe</label>
    </div>
    <br />

    <div className="group">
      <input required={true} type="text" className="input"
      name="first_name"
      onChange={(e) => setfirst_name(e.target.value)}
      value={first_name}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Nom</label>
    </div>
    <br />
    <div className="group">
      <input required={true} type="text" className="input"
      name="last_name"
      onChange={(e) => setlast_name(e.target.value)}
      value={last_name}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Prénom</label>
    </div>
    <br />
    <div className="group">
      <input required={true} type="text" className="input"
      name="phone"
      onChange={(e) => setphone(e.target.value)}
      value={phone}></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Téléphone</label>
    </div>
    <br />
      <div className="div-btn-create">
        <Button className="form-btn" type="submit" >
          Créer utilisateur
        </Button>
      </div>
    </Form>
  </Container>


}

export default SigninPage