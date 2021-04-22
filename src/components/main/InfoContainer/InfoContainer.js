import Card from "react-bootstrap/Card";
import Img from "react-bootstrap/Image";
import taller1 from "../../../assets/taller1.jpg";
import taller2 from "../../../assets/taller2.jpg";
import taller3 from "../../../assets/taller3.jpg";
export default function InfoContainer() {
  return (
    <section className="infoHide" id="infoSection">
      <Card>
        <Card.Header>Quiénes somos</Card.Header>
        <Card.Body>
          <Card.Title>AV Regionales</Card.Title>
          <Card.Img variant="top" src="" />
          <Card.Text>
            Somos una empresa familiar radicada en Mendoza, Argentina, que
            trabaja desde **** con taller propio y manejada por sus dueños.
          </Card.Text>
          <Card.Text>
            Nuestros principios son la responsabilidad, compromismo...
          </Card.Text>
          <Card.Text>
            {
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos, molestias aliquam autem hic voluptatibus quas iusto sequi! Praesentium rerum culpa autem nam distinctio maxime provident blanditiis aut mollitia sapiente"
            }
          </Card.Text>
          <Card.Subtitle>Conocé nuestro taller!</Card.Subtitle>
          <div className="imgContainer">
            <div className="minicard">
              <Img src={taller1} alt="taller 1" fluid />
              <p>Conjunto de maquinarias para aluminio</p>
            </div>
            <div className="minicard">
              <Img src={taller2} alt="taller 2" fluid />
              <p>Máquinas cortadoras</p>
            </div>
            <div className="minicard">
              <Img src={taller3} alt="taller 3" fluid />
              <p>Angel trabajando</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}
