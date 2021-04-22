import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../assets/av.svg";
import { useEffect, useState } from "react";

export default function HeaderNavbar() {
  const [className, setClassName] = useState("navBarBig");
  const infoOpen = () => {
    document.getElementById("infoSection").className = "infoShow";
    document.getElementById("cardContainer").className = "infoHide";
    document.getElementById("contact").className = "infoHide";
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const infoClose = () => {
    document.getElementById("infoSection").className = "infoHide";
    document.getElementById("cardContainer").className = "cardContainer";
    document.getElementById("contact").className = "formSection";
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const scrollTo = () => {};
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setClassName("navBarShort");
      } else if (window.scrollY < 100) {
        setClassName("navBarBig");
      }
    });
  });
  return (
    <Navbar bg="light" expand="lg" className={"navBar " + className}>
      <Navbar.Brand href="#main" onClick={infoClose}>
        <img src={Logo} alt="AV logo" />
        <h1 className="title">AV Regionales</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#main" onClick={infoClose}>
            Inicio
          </Nav.Link>
          <Nav.Link href="#contact" onClick={infoClose}>
            Contacto
          </Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#cucharas" onClick={infoClose}>
              Cucharas
            </NavDropdown.Item>
            <NavDropdown.Item href="#mates" onClick={infoClose}>
              Mates & bombillas
            </NavDropdown.Item>
            <NavDropdown.Item href="#pines" onClick={infoClose}>
              Pines
            </NavDropdown.Item>
            <NavDropdown.Item href="#vasos" onClick={infoClose}>
              Vasos
            </NavDropdown.Item>
            <NavDropdown.Item href="#empresariales" onClick={infoClose}>
              Productos empresariales
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="quienesNav">
          <Nav.Link href="" onClick={infoOpen}>
            Quiénes somos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
