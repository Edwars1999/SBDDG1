import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, source, destination, date, seat, cost) {
  return {
    id,
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
    id: "id",
    label: "flightid",
  },
  {
    id: "source",
    label: "flightsource",
  },
  {
    id: "destination",
    label: "flightdest",
  },
  {
    id: "date",
    label: "flightdate",
  },
  {
    id: "seat",
    label: "flightseat",
  },
  {
    id: "cost",
    label: "flightcost",
  },
];

export default function EnhancedTable() {
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
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  {headCells.map((header, index) => {
                    const labelId = `enhanced-table-header-${index}`;
                    return (
                      <TableCell
                        labelId={labelId}
                        align="right"
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
                        onClick={(event) => handleClick(event, row.name)}
                        tabIndex={-1}
                        key={row.name}
                      >
                        <TableCell component="th" id={labelId} scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.source}</TableCell>
                        <TableCell align="right">{row.destination}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.seat}</TableCell>
                        <TableCell align="right">{row.cost}</TableCell>
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
