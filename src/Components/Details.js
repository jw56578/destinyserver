import React from "react";
import { Container, Typography } from "@material-ui/core";
import bizzes from "../bizz.json";

const Details = (props) => {
  const id = props.match.params.id;
  const bizz = bizzes.find((bizz) => bizz.id == id);

  console.log(bizzes);
  console.log(id);
  return (
    <Container maxWidth="sm" className="car-container">
      <Typography className="car-paper">
        <h2>{bizz.name}</h2>
        <h4>{bizz.address}</h4>
        <h4>{bizz.hours}</h4>
        <h5>{bizz.description}</h5>
      </Typography>
    </Container>
  );
};

export default Details;
