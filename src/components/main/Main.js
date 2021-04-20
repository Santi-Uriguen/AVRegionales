import CardContainer from "./CardContainer/CardContainer.js";
import ContactForm from "./Form/ContactForm.js";
import Whatsapp from "./Whatsapp/Whatsapp.js";
export default function Main() {
  return (
    <main className="main">
      <h1>AV Regionales</h1>
      <CardContainer />
      <ContactForm />
      <Whatsapp />
    </main>
  );
}
