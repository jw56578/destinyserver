import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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
              <TableCell style={{ color: "#592825" }}>
                <Link to={`/bizz/${bizz.id}`}>{bizz["name"]}</Link>
              </TableCell>
              <TableCell>{bizz["description"]}</TableCell>
              <TableCell style={{ color: "#592825" }}>
                {bizz["hours"]}
              </TableCell>
              <TableCell>{bizz["address"]}</TableCell>
              <TableCell>
                <HighlightOffIcon
                  onClick={() => props.removeBizz(id)}
                  style={{ color: "#B46746" }}
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
