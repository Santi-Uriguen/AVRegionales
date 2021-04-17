import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ExpandedCard from "./ExpandedCard.js";

import { useState } from "react";
export default function CardTemplate(props) {
  const [state, setState] = useState("show");
  const [hideState, changeHidState] = useState("hide");
  const handleClick = () => {
    state === "show" ? setState("hide") : setState("show");
    hideState === "hide" ? changeHidState("show") : changeHidState("hide");
  };
  return (
    <Card className="text-center CardTemplate">
      <Card.Header className={state}>{props.title}</Card.Header>
      <div className={"cardBanner" + state}>
        <Image src={props.src[0]} className={"bannerImg"} />
        <Image src={props.src[1]} className={"bannerImg"} />
        <Image src={props.src[2]} className={"bannerImg"} />
      </div>

      <Card.Body className="CardBody">
        <Card.Text className={state}>{props.text}</Card.Text>
        <ExpandedCard srcArray={props.srcArray} className={hideState} />
        <Button
          variant="primary"
          onClick={handleClick}
          className={"button" + state}
        >
          Expandir
        </Button>
        <Button
          variant="secondary"
          onClick={handleClick}
          className={"button" + hideState}
        >
          Ocultar
        </Button>
      </Card.Body>
    </Card>
  );
}
