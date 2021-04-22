import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import IgLogo from "../../assets/ig.png";
import FbLogo from "../../assets/fb.png";
export default function Footer() {
  return (
    <footer className="footer">
      <Nav>
        <Card>
          <Card.Title>Derechos reservados AV Regionales 2021</Card.Title>
          <Card.Footer>
            <div className="link-container">
              <p>Dirección: </p>
              <Card.Link href="https://goo.gl/maps/J4FKMVQH3Hmu6BbA8">
                Base Marambio 2203 - Maipú, Mendoza
              </Card.Link>
            </div>
            <div className="link-container">
              <p>Email:</p>
              <Card.Link href=""> angeltomasvera@gmail.com</Card.Link>
            </div>
            <div className="link-container">
              <Card.Link
                href="https://www.instagram.com/av.regionales/"
                className="imgLink"
              >
                <Card.Img src={IgLogo} alt="instagram logo"></Card.Img>
              </Card.Link>
              <Card.Link
                href="https://www.facebook.com/angeltomas.vera"
                className="imgLink"
              >
                <Card.Img src={FbLogo} alt="facebook logo"></Card.Img>
              </Card.Link>
            </div>
          </Card.Footer>
        </Card>
      </Nav>
    </footer>
  );
}
