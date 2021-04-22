import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Products(props) {
  return (
    <div className={"products " + props.className} id={props.id}>
      {props.srcArray.map((source, index) => {
        return (
          <Card key={index} className="categoryCard">
            <Card.Title>{props.srcArray[index].title}</Card.Title>
            {source.products.map((prods, i) => {
              return (
                <Card key={i}>
                  <Card.Img variant="top" src={Object.values(prods.src)} />
                  <Card.Body>
                    <Card.Title>{prods.title}</Card.Title>
                    <Button variant="primary">Comprar</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Card>
        );
      })}
    </div>
  );
}
