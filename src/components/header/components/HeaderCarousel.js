import Carousel from "react-bootstrap/Carousel";
import Mate from "../../../assets/MateBanner3.png";
import Cucharita from "../../../assets/CucharaBanner1.png";
import Pins from "../../../assets/PinBanner3.jpg";
export default function HeaderCarousel() {
  return (
    <Carousel className="banner">
      <Carousel.Item>
        <img className="d-block w-100" src={Mate} alt="Mate" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Cucharita} alt="Cucharita" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Pins} alt="Pins" />
      </Carousel.Item>
    </Carousel>
  );
}
