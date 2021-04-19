import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function HeaderNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Navbar.Brand href="#home">AV Regionales</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cucharas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pines</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Mates & bombillas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Vasos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Productos empresariales
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
