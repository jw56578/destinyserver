import React from "react";
import { Container, Paper } from "@material-ui/core";

const Details = (props) => {
  const id = props.match.params.id;
  const bizz = props.bizz.find((b) => b.id == id);

  return (
    <Container maxWidth="lg" className="car-container">
      <Paper className="car-paper">
        <h2>{bizz.name}</h2>
        <h3>{bizz.address}</h3>
        <h3>{bizz.hours}</h3>
        <h4>{bizz.description}</h4>
      </Paper>
    </Container>
  );
};

export default Details;
