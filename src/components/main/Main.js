import CardContainer from "./CardContainer/CardContainer.js";
import ContactForm from "./Form/Form.js";
import Whatsapp from "./Whatsapp/Whatsapp.js";
export default function Main() {
  return (
    <main className="main">
      <CardContainer />
      <ContactForm />
      <Whatsapp />
    </main>
  );
}
