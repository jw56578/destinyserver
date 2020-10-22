import React from "react";
import { Container, Typography } from "@material-ui/core";
import Map from "./Map";

const Details = (props) => {
  const id = props.match.params.id;
  const bizz = props.bizzes.find((bizz) => bizz.id == id);
  console.log(id);
  return (
    <Container maxWidth="sm" className="car-container">
      <Typography className="car-paper">
        <h2>{bizz.name}</h2>
        <h4>{bizz.address}</h4>
        <h4>{bizz.hours}</h4>
        <p>{bizz.description}</p>
      </Typography>
      <Map className="map" lat={bizz.lat} lng={bizz.lng} />
    </Container>
  );
};

export default Details;
