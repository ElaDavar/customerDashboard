import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import "./table.css";


function createData(name, net, tax, gross) {
  return { name, net, tax, gross };
}

const rows = [
  createData('Item1', 1000, 160, 1160),
  createData('Item2', 1000, 160, 1160),
];

function ItemsTable() {

  return (
    <TableContainer className="container" component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Net&nbsp;(€)</TableCell>
            <TableCell align="right">Tax&nbsp;(€)</TableCell>
            <TableCell align="right">Gross&nbsp;(€)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.net}</TableCell>
              <TableCell align="right">{row.tax}</TableCell>
              <TableCell align="right">{row.gross}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemsTable;