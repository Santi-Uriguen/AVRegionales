import CardContainer from "./CardContainer/CardContainer.js";
import ContactForm from "./Form/ContactForm.js";
import Whatsapp from "./Whatsapp/Whatsapp.js";
import InfoContainer from "./InfoContainer/InfoContainer.js";
export default function Main() {
  return (
    <main className="main" id="main">
      <CardContainer />
      <ContactForm />
      <InfoContainer />
      <Whatsapp />
    </main>
  );
}
