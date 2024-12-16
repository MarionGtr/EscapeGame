import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return <>
        <Navbar collapseOnSelect expand="lg" className="Navbar">
            <Container className='container-navbar'>
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            alt="logo"
                            src="src/img/logo.png"
                            width="80"
                            height=""
                            className="logoNavbar"
                        /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar">
                    <div className="navbar-txt">
                        <Nav className='nav-all-txt'>

                            <NavDropdown title="Nos escapes" className="nav-dropdown" >
                                <NavDropdown.Item href="#escape1">Escape 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Escape 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Escape 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Escape à domicile
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-txt" href="#miniJeux">Mini-jeux</Link>
                            <Link className="nav-txt" href="#services">Nos services</Link>
                            <Link className="nav-txt" href="#profil">Profil</Link>

                            <Link to={"/login"} className="nav-txt" href="#login">Connexion</Link>
                            <Link to={"/SigninPage"} className="nav-txt" href="#signin">Inscription</Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;

