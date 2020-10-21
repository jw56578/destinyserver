import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

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
          {props.bizzes.map((bizz, id) => (
            <TableRow key={bizz.id}>
              <TableCell>
                <Link to={`/bizz/${bizz.id}`}>{bizz["name"]}</Link>
              </TableCell>
              <TableCell>{bizz["description"]}</TableCell>
              <TableCell>{bizz["hours"]}</TableCell>
              <TableCell>{bizz["address"]}</TableCell>
              <TableCell>
                <DeleteIcon
                  onClick={() => props.removeBizz(id)}
                  style={{ color: "red" }}
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
