import ExpandedCard from "./components/ExpandedCard.js";
import products, {
  cucharasBanner,
  matesBanner,
  pinsBanner,
} from "../../../../assets/products.js";

export default function CardContainer(props) {
  return (
    <section className="cardContainer" id="cardContainer">
      <ExpandedCard
        name="cucharas"
        src={cucharasBanner}
        title="Cucharas"
        text=""
        srcArray={products.cucharas}
      />
      <ExpandedCard
        name="mates"
        src={matesBanner}
        title="Mates & bombillas"
        text=""
        srcArray={products.mates}
      />
      <ExpandedCard
        name="pines"
        src={pinsBanner}
        title="Pines"
        text=""
        srcArray={products.pins}
      />
      <ExpandedCard
        name="vasos"
        src=""
        title="Vasos"
        text=""
        srcArray={products.cucharas}
      />
      <ExpandedCard
        name="empresariales"
        src=""
        title="Productos empresariales"
        text=""
        srcArray={products.cucharas}
      />
    </section>
  );
}
