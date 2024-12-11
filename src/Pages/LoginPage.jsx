import { Container, Form } from "react-bootstrap";


const Login = () => {




  return <Container className='formulaire-login'>
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
    </Form>
  </Container>

}

export default Login;