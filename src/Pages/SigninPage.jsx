import { Container, Form } from "react-bootstrap"

import Button from 'react-bootstrap/Button';

const Signin = () => {



  return <Container className="formulaire">

    <h1>Créer votre profil</h1>

    <Form action="/createUser" method='POST' >
      <Form.Group className="mb-3 mt-4" controlId="formBasicName">
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control
          type="text"
          placeholder="Saisir un nom/pseudo"
          //  onChange={handleChange} required
          name="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Saisir une adresse mail"
          //   onChange={handleChange} required
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          placeholder="Mot de passe"
          //   onChange={handleChange} required
          name="password"
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicLastName">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Saisir un nom"
          //  onChange={handleChange} required
          name="last_name"
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicFirstName">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Saisir un prénom"
          //  onChange={handleChange} required
          name="first_name"
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicTel">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="0123456789"
          //  onChange={handleChange} required
          name="phone"
        />
      </Form.Group>
      <div className="div-btn-create">
        <Button className="form-btn" type="submit">
          Créer utilisateur
        </Button>
      </div>
    </Form>
  </Container>


}

export default Signin