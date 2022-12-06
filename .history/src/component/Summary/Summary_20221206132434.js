/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}



const Summary = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading="Enrollment Summary" />

      <TableContainer component={Paper} style={{marginTop : '5%' , width : '90%' , marginLeft : '5%'}}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
         >
          <TableHead>
            <TableRow >
              <TableCell style={{ fontSize: "18px" }}>
              Course Name
              </TableCell>
              <TableCell align="right" style={{ fontSize: "18px" }}>No. of users enrolled weekly</TableCell>
              <TableCell align="right " style={{ fontSize: "18px" }}>Fat&nbsp;(g)</TableCell>
              <TableCell align="right" style={{ fontSize: "18px" }}>Carbs&nbsp;(g)</TableCell>
              <TableCell align="right" style={{ fontSize: "18px" }}>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ fontSize: "18px" }}>
                 
                </TableCell>
                <TableCell align="right" style={{ fontSize: "18px" }}> </TableCell>
                <TableCell align="right" style={{ fontSize: "18px" }}> </TableCell>
                <TableCell align="right" style={{ fontSize: "18px" }}> </TableCell>
                <TableCell align="right" style={{ fontSize: "18px" }}> </TableCell>
              </TableRow>
         
          </TableBody>
        </Table>
      </TableContainer>
   
    </>
  );
};

export default Summary;