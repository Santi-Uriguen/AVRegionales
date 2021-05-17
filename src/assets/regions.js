import CucharaUno from "./cucharita 1.jpg";
import CucharaDos from "./cucharita 2.jpg";
import CucharaCuatro from "./cucharita 4.png";
import mate11 from "./Mate y bombilla 9.png";
import mate12 from "./Mates 2.png";
import mate13 from "./Mates 3.png";
import Pin1 from "./Pin guitarra.png";
import Pin3 from "./Pins patrios.png";
import Pin4 from "./Pins Universidad.jpg";
const regions = {
  mendoza: [
    {
      title: "cucharas",
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
      ],
    },
    {
      title: "mates",
      products: [
        { src: { mate11 }, title: "Mate y bombilla de Argentina" },
        { src: { mate12 }, title: "Mate madera, Mendoza" },
        { src: { mate13 }, title: "Mate Ruta 40, Argentina" },
      ],
    },
    {
      title: "pines",
      products: [
        { src: { Pin1 }, title: "Pin guitarra de Argentina" },
        { src: { Pin3 }, title: "Pins patrios" },
        { src: { Pin4 }, title: "Pins UNCuyo" },
      ],
    },
  ],
  buenosaires: [
    {
      title: "mates",
      products: [
        { src: { mate11 }, title: "Mate y bombilla de Argentina" },
        { src: { mate12 }, title: "Mate madera, Buenos Aires" },
        { src: { mate13 }, title: "Mate Ruta 40, Argentina" },
      ],
    },
    {
      title: "pines",
      products: [
        { src: { Pin1 }, title: "Pin guitarra de Argentina" },
        { src: { Pin3 }, title: "Pins patrios" },
        { src: { Pin4 }, title: "Pins UBA" },
      ],
    },
    {
      title: "cucharas",
      products: [
        {
          src: { CucharaUno },
          title: "Cucharas con logos de Buenos Aires",
        },
        {
          src: { CucharaDos },
          title: "cucharas con monumentos de Buenos Aires",
        },
        {
          src: { CucharaCuatro },
          title: "Cucharas con logos de Buenos Aires",
        },
      ],
    },
  ],
};

export default regions;
