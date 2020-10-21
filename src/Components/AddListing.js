import { Button, Container, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Map from "./Map";

const AddListing = (props) => {
  const [listing, setListing] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
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
        </form>
        <Map width={400} height={500} address={listing.address} />
      </Container>
    </div>
  );
};

export default AddListing;
