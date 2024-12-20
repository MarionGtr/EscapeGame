import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import AuthService from "../Services/AuthService";
import { jwtDecode } from "jwt-decode";

function NavBar() {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 

  //-------------------------------décodé le username a partir du token----------------------------
  
  const username = token ? jwtDecode(token).username : null;

  //-------------------------------Fonction pour se déco-------------------------------------------
 
  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

//----------------Fonction pour toruver le username a partir du token en le décodant------------
  function getUsernameFromToken(token) {
    if (!token) return null;
    try {
      const decoded = jwtDecode(token);
      return decoded.username; // Retourne le nom d'utilisateur
    } catch (error) {
      console.error("Erreur lors du décodage du token:", error);
      return null;
    }
  }
  getUsernameFromToken();
//-------------------------------NavBar-------------------------------------------
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="Navbar">
        <Container className="container-navbar">
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="logo"
                src="src/img/logo.png"
                width="80"
                className="logoNavbar"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar">
            <div className="navbar-txt">
              <Nav className="nav-all-txt">
                <NavDropdown title="Nos escapes" className="nav-dropdown">
                  <NavDropdown.Item href="#escape1">Escape 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Escape 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Escape 3
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Escape à domicile
                  </NavDropdown.Item>
               
                  <NavDropdown.Item href="/Booking">
                   Réservation
                  </NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-txt" href="#miniJeux" to="/Horreur">
                  Mini-jeux
                 
                </Link>
                <Link className="nav-txt" href="#services">
                  Nos services
                </Link>
                {!isAuthenticated ? (
                  <>
                    <Link to="/login" className="nav-txt" href="#login">
                      Connexion
                    </Link>
                    <Link to="/SigninPage" className="nav-txt" href="#signin">
                      Inscription
                    </Link>
                  </>
                ) : (
                  <>
                   {username && <Link to="/Profil" className="nav-txt">Profil de {username}</Link>}
                   <Link to='/' className="nav-txt" onClick={handleLogout}>
                      Déconnexion
                    </Link>
                  </>
                )}     
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
