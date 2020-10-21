import { Button, Container, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const AddListing = (props) => {
  const [listing, setListing] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
    lat: 0,
    lng: 0,
    redirect: false,
  });

  const handleTextChange = (e) => {
    const newListing = { ...listing };
    newListing[e.target.id] = e.target.value;
    setListing(newListing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...listing };
    payload.id = props.bizzes.length + 1;
    props.addBizz(payload);
    setListing({
      redirect: true,
    });
  };

  return (
    <div>
      <Container maxWidth="sm" className="add-form">
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleTextChange}
            placeholder={"Name"}
            fullWidth={true}
            id="name"
          />
          <TextField
            onChange={handleTextChange}
            placeholder={"Address"}
            fullWidth={true}
            id="address"
          />
          <TextField
            onChange={handleTextChange}
            placeholder={"Hours"}
            fullWidth={true}
            id="hours"
          />
          <TextField
            onChange={handleTextChange}
            placeholder={"Description"}
            fullWidth={true}
            id="description"
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="small"
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              marginTop: 25,
              marginBottom: 30,
              marginLeft: 100,
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
          {listing.redirect && <Redirect to="/" />}
        </form>
      </Container>
    </div>
  );
};

export default AddListing;
