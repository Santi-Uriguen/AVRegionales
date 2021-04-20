import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function ContactForm() {
  return (
    <section className="FormSection" id="contact">
      <Form className="Form">
        <Form.Group controlId="formGroupEmail" className="datosContacto">
          <div className="dataForm">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@ejemplo.com"
              required
            />
          </div>
          <div className="dataForm">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Juan Alvarez" />
          </div>
        </Form.Group>
        <Form.Group className="city">
          <Form.Group controlId="formGridState">
            <Form.Label>País</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGridCity">
            <Form.Label>Provincia/Estado</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="formGridZip">
            <Form.Label>Código postal</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="ControlTextarea1" className="textareaContainer">
          <label htmlFor="textarea">Ingrese el mensaje:</label>
          <textarea
            type="text"
            className="textarea form-control"
            id="textarea"
            required
          />
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>
    </section>
  );
}
