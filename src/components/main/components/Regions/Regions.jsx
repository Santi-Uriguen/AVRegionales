import React, { useState, useEffect } from "react";
import Map from "../Map.js";
import regions from "../../../../assets/regions.js";
import { Card, Button } from "react-bootstrap";

export default function Regions(props) {
  const [status, setStatus] = useState(false);
  const [prov, setProv] = useState("");
  useEffect(() => {
    console.log(props);
    let provincia = props.provincia;
    if (provincia !== undefined) {
      provincia = provincia.replace(" ", "");
      provincia = provincia.toLowerCase();
      provincia = provincia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    regions[provincia] != undefined ? setStatus(true) : setStatus(false);
    setProv(provincia);
  }, [props.provincia]);
  return (
    <section className="regionsContainer hide" id="regionsContainer">
      <h2>Productos por provincia</h2>
      {status ? (
        <div className="provincia">
          <h4>{props.provincia}</h4>
          <div className="provinceProducts">
            {regions[prov].map((source, index) => {
              return (
                <Card key={index} className="regionCard">
                  <Card.Title>{source.title}</Card.Title>
                  <Card.Body>
                    {source.products.map((prods, i) => {
                      return (
                        <Card key={i}>
                          <Card.Img
                            variant="top"
                            src={Object.values(prods.src)}
                          />
                          <Card.Body>
                            <Card.Title>{prods.title}</Card.Title>
                            <Button variant="primary">Comprar</Button>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="provincia">
          <h4>{props.provincia}</h4>
          <p>
            Por el momento no tenemos ningún cliente en esta provincia.
            Contactanos para ser el primero!
          </p>
        </div>
      )}
      <Map byRegion={props.byRegion} />
    </section>
  );
}
