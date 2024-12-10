
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
    
    
    
    
    return <Container className="d-flex flex-column align-items-center mt-3">
    <h1>Connexion</h1>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Saisir une adresse mail"
         
          // value={user.mail}
           required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          placeholder="Saisir le mot de passe"
         
          // value={user.mdp}
           required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
    </Form>
  </Container>

  
}
 
export default Login;