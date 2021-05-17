import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Check from "../../../../assets/check.svg";
import Fail from "../../../../assets/fail.svg";
import { useState } from "react";
export default function ContactForm() {
  const [state, setState] = useState({
    nombre: "",
    email: "",
    country: "",
    province: "",
    ccpp: "",
    message: "",
  });
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (event) => {
    const templateId = "template_9p66g0g";
    sendFeedback(templateId, {
      message: state.message,
      from_name: state.nombre,
      reply_to: state.email,
      from_country: state.country,
      from_state: state.province,
      from_CCPP: state.ccpp,
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_v1kasql", templateId, variables)
      .then(() => {
        document.getElementById("submitDiv").className = "submitDiv divCheck";
      })
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        document.getElementById("submitDiv").className = "submitDiv divFail";
      });
  };
  return (
    <section className="formSection" id="contact">
      <Form className="Form">
        <Form.Group controlId="formGroupEmail" className="datosContacto">
          <div className="dataForm">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@ejemplo.com"
              required
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="dataForm">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juan Alvarez"
              name="nombre"
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="city">
          <Form.Group controlId="formGridState">
            <Form.Label>País</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              name="country"
              onChange={handleChange}
            >
              <option>Choose...</option>
              <option>Argentina</option>
              <option>Chile</option>
              <option>Brasil</option>
              <option>Uruguay</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGridCity">
            <Form.Label>Provincia/Estado</Form.Label>
            <Form.Control name="province" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formGridZip">
            <Form.Label>Código postal</Form.Label>
            <Form.Control name="ccpp" onChange={handleChange} />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="ControlTextarea1" className="textareaContainer">
          <label htmlFor="textarea">Ingrese el mensaje:</label>
          <textarea
            type="text"
            className="textarea form-control"
            id="textarea"
            required
            name="message"
            onChange={handleChange}
          />
        </Form.Group>
        <div className="submitDiv divShow" id="submitDiv">
          <input
            type="button"
            value="Enviar"
            onClick={handleSubmit}
            className="btn sendBtnShow btn-primary"
          ></input>
          <Image fluid src={Check} id="checkImg" className="subImg"></Image>
          <Image fluid src={Fail} id="failImg" className="subImg"></Image>
        </div>
      </Form>
    </section>
  );
}
