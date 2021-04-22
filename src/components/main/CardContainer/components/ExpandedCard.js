import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Products from "./Products.js";

import { useState } from "react";
export default function ExpandedCard(props) {
  const [state, setState] = useState("show");
  const [hideState, changeHidState] = useState("hide");
  const handleClick = () => {
    state === "show" ? setState("hide") : setState("show");
    hideState === "hide" ? changeHidState("show") : changeHidState("hide");
  };
  const moveOver = () => {
    let sectionY = document.getElementById(props.name).offsetTop;
    sectionY = sectionY - sectionY * 0.3;
    window.scrollTo({ top: sectionY, behavior: "smooth" });
  };
  return (
    <Card
      className={
        state === "show"
          ? "text-center ExpandedCard collapsed"
          : "text-center ExpandedCard expanded"
      }
      id={props.name}
    >
      <Card.Header className={state}>{props.title}</Card.Header>
      <div className={"cardBanner" + state}>
        <Image src={props.src[0]} className={"bannerImg"} />
        <Image src={props.src[1]} className={"bannerImg"} />
        <Image src={props.src[2]} className={"bannerImg"} />
      </div>
      <Card.Body>
        <Products srcArray={props.srcArray} className={hideState} />
        <Button
          variant="primary"
          onClick={handleClick}
          className={"button" + state}
        >
          Expandir
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            handleClick();
            moveOver();
          }}
          className={"button" + hideState}
        >
          Ocultar
        </Button>
      </Card.Body>
    </Card>
  );
}
