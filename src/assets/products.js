import mate2 from "./Mate y bombilla 1.png";
import mate3 from "./Mate y bombilla 2.png";
import mate4 from "./Mate y bombilla 3.png";
import mate5 from "./Mate y bombilla 4.png";
import mate6 from "./Mate y bombilla 5.png";
import mate7 from "./Mate y bombilla 6.png";
import mate8 from "./Mate y bombilla 7.png";
import mate9 from "./Mate y bombilla 8.png";
import mate10 from "./Mate y bombilla 9.png";
import mate11 from "./Mate y bombilla 9.png";
import mate12 from "./Mates 2.png";
import mate13 from "./Mates 3.png";
import mate14 from "./Mates 4.png";
import CucharaUno from "./cucharita 1.jpg";
import CucharaDos from "./cucharita 2.jpg";
import CucharaTres from "./cucharita 3.png";
import CucharaCuatro from "./cucharita 4.png";
import CucharaCinco from "./cucharita 5.png";
import CucharaSeis from "./cucharita 6.png";
import CucharaSiete from "./cucharita 7.png";
import CucharaOcho from "./cucharita 8.png";
import CucharaNueve from "./cucharita 9.png";
import CucharaDiez from "./cucharita 10.png";
import Pin1 from "./Pin guitarra.png";
import Pin2 from "./Pin Malvinas.png";
import Pin3 from "./Pins patrios.png";
import Pin4 from "./Pins Universidad.jpg";

const products = {
  cucharas: [
    {
      title: "Regionales",
      products: [
        {
          src: { CucharaUno },
          title: "Cucharas con logos de Mendoza",
        },
        {
          src: { CucharaDos },
          title: "cucharas con monumentos de Mendoza",
        },
        {
          src: { CucharaCuatro },
          title: "Cucharas con logos de Mendoza",
        },
        {
          src: { CucharaCinco },
          title: "Cucharas con escudos de Mendoza",
        },
        {
          src: { CucharaSeis },
          title: "cucharas con monumentos de Mendoza",
        },
        {
          src: { CucharaSiete },
          title: "cucharas con monumentos de Mendoza",
        },
      ],
    },
    {
      title: "Empresariales",
      products: [
        {
          src: { CucharaTres },
          title: "Cucharas Mendoza Rugby Club",
        },
        {
          src: { CucharaOcho },
          title: "Cucharas Tesla, Inc",
        },
        {
          src: { CucharaNueve },
          title: "Cucharas Globant",
        },
        {
          src: { CucharaDiez },
          title: "Cucharas MercadoLibre",
        },
      ],
    },
  ],
  mates: [
    {
      title: "genéricos",
      products: [
        { src: { mate2 }, title: "mate madera liso, claro" },
        {
          src: { mate3 },
          title: "Mate madera oscuro, con detalles",
        },
        {
          src: { mate4 },
          title: "Mate madera claro, con detalles",
        },
        {
          src: { mate5 },
          title: "Mate madera claro, con detalles",
        },
        {
          src: { mate6 },
          title: "Mate madera claro, con detalles",
        },
        { src: { mate7 }, title: "Mates madera y acero, lisos" },
        { src: { mate8 }, title: "Mates madera claro, liso" },
        {
          src: { mate9 },
          title: "Mate madera oscuro, con detalles",
        },
      ],
    },
    {
      title: "fútbol",
      products: [{ src: { mate10 }, title: "Bokita" }],
    },
    {
      title: "regionales",
      products: [
        { src: { mate11 }, title: "Mate y bombilla de Argentina" },
        { src: { mate12 }, title: "Mate madera, Mendoza" },
        { src: { mate13 }, title: "Mate Ruta 40, Argentina" },
        { src: { mate14 }, title: "Mate Ruta 7, Mendoza" },
      ],
    },
  ],
  pins: [
    {
      title: "Genéricos",
      products: [{ src: { Pin3 }, title: "Pins patrios" }],
    },
    {
      title: "Patrios",
      products: [
        { src: { Pin1 }, title: "Pin guitarra de Argentina" },
        { src: { Pin2 }, title: "Pin Islas Malvinas" },
        { src: { Pin3 }, title: "Pins patrios" },
        { src: { Pin4 }, title: "Pins UNCuyo" },
      ],
    },
    {
      title: "Privados",
      products: [{ src: { Pin4 }, title: "Pins UNCuyo" }],
    },
    {
      title: "Musicales",
      products: [{ src: { Pin1 }, title: "Pin guitarra de Argentina" }],
    },
  ],
};
export default products;

export const cucharasBanner = [CucharaCuatro, CucharaSiete, CucharaDiez];
export const matesBanner = [mate2, mate4, mate5];
export const pinsBanner = [Pin3, Pin2, Pin4];

// template del array:
// "": [
//     {
//       title: "",
//       products: [
//         { src: {  }, title: "" },
//         {
