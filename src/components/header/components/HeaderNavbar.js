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
  };
  const scrollTo = (e) => {
    const id = e.target.getAttribute("index");
    let height = document.getElementById(id).offsetTop;
    height = height - 75;
    window.scroll({
      top: height,
      behavior: "smooth",
    });
  };
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
      <Navbar.Brand>
        <img
          src={Logo}
          alt="AV logo"
          index="main"
          onClick={(e) => {
            scrollTo(e);
            infoClose();
          }}
        />
        <h1
          className="title"
          index="main"
          onClick={(e) => {
            scrollTo(e);
            infoClose();
          }}
        >
          AV Regionales
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            index="main"
            onClick={(e) => {
              scrollTo(e);
              infoClose();
            }}
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            index="contact"
            onClick={(e) => {
              infoClose();
              scrollTo(e);
            }}
          >
            Contacto
          </Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item
              index="cucharas"
              onClick={(e) => {
                infoClose();
                scrollTo(e);
              }}
            >
              Cucharas
            </NavDropdown.Item>
            <NavDropdown.Item
              index="mates"
              onClick={(e) => {
                infoClose();
                scrollTo(e);
              }}
            >
              Mates & bombillas
            </NavDropdown.Item>
            <NavDropdown.Item
              index="pines"
              onClick={(e) => {
                infoClose();
                scrollTo(e);
              }}
            >
              Pines
            </NavDropdown.Item>
            <NavDropdown.Item
              index="vasos"
              onClick={(e) => {
                infoClose();
                scrollTo(e);
              }}
            >
              Vasos
            </NavDropdown.Item>
            <NavDropdown.Item
              index="empresariales"
              onClick={(e) => {
                infoClose();
                scrollTo(e);
              }}
            >
              Productos empresariales
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="quienesNav">
          <Nav.Link onClick={infoOpen}>Quiénes somos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
