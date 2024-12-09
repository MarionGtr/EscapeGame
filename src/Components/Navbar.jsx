import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="Navbar">
            <Container>

                <Navbar.Brand>
                    <img
                        alt="logo"
                        src="src/img/logo.png"
                        width="80"
                        height=""
                        className="logoNavbar" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="navbar-txt">
                        <Nav className='nav-all-txt'>
                            <Nav.Link className="nav-txt" href="#nosEscapes">Nos escapes</Nav.Link>
                            <Nav.Link className="nav-txt" href="#miniJeux">Mini-jeux</Nav.Link>
                            <Nav.Link className="nav-txt" href="#services">Nos services</Nav.Link>
                        </Nav>
                        <Nav className='login-txt'>
                            <Nav.Link className="nav-txt" href="login">Connexion</Nav.Link>
                            <Nav.Link className="nav-txt" href="login">Inscription</Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

