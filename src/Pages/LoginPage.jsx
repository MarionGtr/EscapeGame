import { Button, Container, Form } from "react-bootstrap";


const Login = () => {




  return <Container className='formulaire'>

<h1>Connexion</h1>

    <Form>
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
    <div className="div-btn-create">
        <Button className="form-btn" type="submit">
          Créer utilisateur
        </Button>
      </div>
    </Form>
  </Container>

}

export default Login;