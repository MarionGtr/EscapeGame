import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return <>
        <Navbar collapseOnSelect expand="lg" className="Navbar">
            <Container className='d-flex gap-5'>
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
                            <Link className="nav-txt" href="#nosEscapes">Nos escapes</Link>
                            <Link className="nav-txt" href="#miniJeux">Mini-jeux</Link>
                            <Link className="nav-txt" href="#services">Nos services</Link>
                            
                            <Link to={"/login"} className="nav-txt" href="#login">Connexion</Link>
                            <Link to={"/signin"} className="nav-txt" href="#signin">Inscription</Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
}

export default NavBar;

