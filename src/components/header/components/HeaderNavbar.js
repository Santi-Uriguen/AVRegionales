import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../assets/av.svg";

export default function HeaderNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="AV logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#cucharas">Cucharas</NavDropdown.Item>
            <NavDropdown.Item href="#mates">Mates & bombillas</NavDropdown.Item>
            <NavDropdown.Item href="#pines">Pines</NavDropdown.Item>
            <NavDropdown.Item href="#vasos">Vasos</NavDropdown.Item>
            <NavDropdown.Item href="#empresariales">
              Productos empresariales
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
