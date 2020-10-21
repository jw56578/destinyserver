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
            <TableCell>
              <h3>Name</h3>
            </TableCell>
            <TableCell>
              <h3>Description</h3>
            </TableCell>
            <TableCell>
              <h3>Hours</h3>
            </TableCell>
            <TableCell>
              <h3>Address</h3>
            </TableCell>
            <TableCell>
              <h3>Delete</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.bizzes.map((bizz, id) => (
            <TableRow key={bizz.id}>
              <TableCell style={{ color: "hotpink" }}>
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
