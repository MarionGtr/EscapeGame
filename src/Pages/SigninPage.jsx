import { Container, Form } from "react-bootstrap"

import Button from 'react-bootstrap/Button';

const Signin = () => {
    
    
    
    return<Container className="d-flex flex-column align-items-center">
   
    <h1>Créer un utilisateur</h1>
    
     <Form action="/createUser" method='POST' >
       <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Label>Nom</Form.Label>
         <Form.Control 
         type="text" 
         placeholder="Saisir un nom"
        //  onChange={handleChange} required
         name="nom"
         />
 
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Adresse mail</Form.Label>
         <Form.Control
          type="email"
          placeholder="Saisir une adresse mail" 
        //   onChange={handleChange} required
          name="mail"
          />
     
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Mot de passe</Form.Label>
         <Form.Control 
         type="password"
          placeholder="Mot de passe"
        //   onChange={handleChange} required
          name="mdp"
          />
       </Form.Group>
 
       <Button variant="primary" type="submit">
         Créer utilisateur
       </Button>
     </Form>
  </Container>
 

}
 
export default Signin