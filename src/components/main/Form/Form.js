import Form from "react-bootstrap/Form";
export default function ContactForm() {
  return (
    <section>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Row>
          <Form.Group /*as={Col} */ controlId="formGridState">
            <Form.Label>Provincia</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group /*as={Col} */ controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group /*as={Col} */ controlId="formGridZip">
            <Form.Label>Código postal</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      </Form>
    </section>
  );
}
