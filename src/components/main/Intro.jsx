import Map from "./components/Map.js";
import cucharas from "../../assets/CucharaBanner3.png";
import mates from "../../assets/MateBanner3.png";
import pin1 from "../../assets/PinBanner2.png";
import pin2 from "../../assets/PinBanner3.jpg";
import { Button, Card } from "react-bootstrap";

export default function Intro(props) {
  const showProducts = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelector(".header").className = "header";
    document.querySelector(".footer").className = "footer";
    document.querySelector(".main").className = "main";
    document.querySelector(".introSection").className = "introSection hide";
  };
  return (
    <Card className="introSection">
      <Card.Header className="introTitle">
        <Card.Title>AV REGIONALES</Card.Title>
        <p>
          Realizamos trabajos a pedido, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. In ducimus quo officiis voluptatum explicabo enim,
          vitae voluptatem eaque rem esse ex asperiores nemo aliquam, quidem
          doloribus perspiciatis vel, dolores atque.
        </p>
      </Card.Header>
      <Card.Body className="introContainer">
        <div className="infoSections">
          <div className="introProds">
            <h3>Navegar por productos</h3>
            <div className="introGallery">
              <img src={cucharas} alt="" />
              <img src={mates} alt="" />
              <img src={pin1} alt="" />
              <img src={pin2} alt="" />
            </div>
            <Button onClick={showProducts}>Navegar</Button>
          </div>
          <div className="introRegion">
            <h3>Navegar por región</h3>
            <Map byRegion={props.byRegion} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
