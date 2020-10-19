import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import bizz from "../bizz.json";
import DeleteIcon from "@material-ui/icons/Delete";

const Listings = (props) => {
  return (
    <Container maxWidth="lg" className="car-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bizz.map((bizz, idx) => (
            <TableRow key={bizz.name}>
              <TableCell component="th" scope="row">
                {bizz.name}
              </TableCell>
              <TableCell>{bizz["description"]}</TableCell>
              <TableCell>{bizz["hours"]}</TableCell>
              <TableCell>{bizz["address"]}</TableCell>
              <TableCell>
                <DeleteIcon
                  // add onClick method here
                  onClick={() => props.removeCar(idx)}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
