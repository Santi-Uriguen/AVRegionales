import CardContainer from "./components/CardContainer/CardContainer.js";
import ContactForm from "./components/Form/ContactForm.js";
import Whatsapp from "./components/Whatsapp/Whatsapp.js";
import InfoContainer from "./components/InfoContainer/InfoContainer.js";
import Regions from "./components/Regions/Regions.jsx";
import Intro from "./Intro.jsx";
import { useState } from "react";

export default function Main() {
  const [provincia, setProvincia] = useState();
  const byRegion = (provincia) => {
    setProvincia(provincia);
  };
  return (
    <main className="main intro" id="main">
      <Intro byRegion={byRegion} />
      <CardContainer />
      <Regions provincia={provincia} byRegion={byRegion} />
      <ContactForm />
      <InfoContainer />
      <Whatsapp />
    </main>
  );
}
