import CardTemplate from "./components/CardTemplate.js";
import cucharas from "../../../assets/cucharas.js";
const cucharasBanner = [
  "/static/media/cucharita 4.4f6c33a1.png",
  "/static/media/cucharita 7.c020fc69.png",
  "/static/media/cucharita 10.f6a271a9.png",
];
const pinesBanner = [
  "/static/media/cucharita 4.4f6c33a1.png",
  "/static/media/cucharita 7.c020fc69.png",
  "/static/media/cucharita 10.f6a271a9.png",
];
export default function CardContainer() {
  return (
    <section className="cardContainer">
      <CardTemplate
        name="cucharas"
        src={cucharasBanner}
        title="Cucharas"
        text=""
        srcArray={cucharas}
      />
      <CardTemplate
        name="pines"
        src={pinesBanner}
        title="Pines"
        text=""
        srcArray={cucharas}
      />
      <CardTemplate
        name="mates"
        src=""
        title="Mates & bombillas"
        text=""
        srcArray={cucharas}
      />
      <CardTemplate
        name="vasos"
        src=""
        title="Vasos"
        text=""
        srcArray={cucharas}
      />
      <CardTemplate
        name="empresariales"
        src=""
        title="Productos empresariales"
        text=""
        srcArray={cucharas}
      />
    </section>
  );
}
