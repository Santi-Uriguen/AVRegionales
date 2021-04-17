import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ExpandedCard(props) {
  return (
    <div className={"ExpandedCard " + props.className} id={props.id}>
      {props.srcArray.map((source, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index} className="Card ">
            <Card.Img variant="top" src={Object.values(source.src)} />
            <Card.Body>
              <Card.Title>{source.title}</Card.Title>
              <Card.Text>{source.subtitle}</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
