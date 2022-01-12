import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';

function createData(flightid, source, destination, date, seat, cost) {
  return {
    flightid,
    source,
    destination,
    date,
    seat,
    cost,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0, 4.3),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 4.3),
  createData("Honeycomb", 408, 3.2, 87, 6.5, 4.3),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0, 4.3),
  createData("KitKat", 518, 26.0, 65, 7.0, 4.3),
  createData("Lollipop", 392, 0.2, 98, 0.0, 4.3),
  createData("Marshmallow", 318, 0, 81, 2.0, 4.3),
  createData("Nougat", 360, 19.0, 9, 37.0, 4.3),
  createData("Oreo", 437, 18.0, 63, 4.0, 4.3),
];

const headCells = [
  {
    label: "Flight ID",
    id: "flightid",
  },
  {
    label: "Source",
    id: "flightsource",
  },
  {
    label: "Destination",
    id: "flightdest",
  },
  {
    label: "Date",
    id: "flightdate",
  },
  {
    label: "Seat",
    id: "flightseat",
  },
  {
    id: "flightcost",
    label: "Cost",
  },
];

export default function FlightTable() {

  useEffect(async ()=>{
    await axios.get('http://localhost:3000/flights')
    .then((response)=>{
      console.log(response.data)
    })
  },[])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event, rowName) => {
    console.log(rowName);
  };

  return (
    <>
      <Box sx={{ width: "80%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              size="small"
            >
              <TableHead>
                <TableRow>
                  {headCells.map((header, index) => {
                    const labelId = `enhanced-table-header-${index}`;
                    return (
                      <TableCell
                        id={labelId}
                        align="center"
                        key={header.id}
                      >
                        {header.label}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-body-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        tabIndex={-1}
                        key={row.flightid}
                      >
                        <TableCell component="th" id={labelId} align="center" scope="row">
                          {row.flightid}
                        </TableCell>
                        <TableCell align="center">{row.source}</TableCell>
                        <TableCell align="center">{row.destination}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">{row.seat}</TableCell>
                        <TableCell align="center">{row.cost}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
