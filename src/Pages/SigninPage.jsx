import { Container, Form } from "react-bootstrap"

import Button from 'react-bootstrap/Button';

const Signin = () => {



  return <Container className="formulaire">

    <h1>Créer votre profil</h1>

    <Form className= "bloc-form">
    <div className="group">
      <input required="" type="text" className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Nom d'utilisateur</label>
    </div>

    <br />

    <div className="group">
      <input required="" type="text" className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
    </div>

        <br />

    <div className="group">
      <input required="" type="password" className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Mot de passe</label>
    </div>
    <br />

    <div className="group">
      <input required="" type="text" className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Nom</label>
    </div>
    <br />
    <div className="group">
      <input required="" type="text" className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Prénom</label>
    </div>
    <br />
    <div className="group">
      <input required="" type="text" className="input"></input>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Téléphone</label>
    </div>
    <br />
      <div className="div-btn-create">
        <Button className="form-btn" type="submit">
          Créer utilisateur
        </Button>
      </div>
    </Form>
  </Container>


}

export default Signin