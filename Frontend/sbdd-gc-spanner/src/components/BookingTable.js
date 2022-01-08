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

function createData(bookingid, flightid, bookdate) {
  return {
    bookingid,
    flightid,
    bookdate,
  };
}

const rows = [
  createData(305, 3.7, new Date().toDateString()),
  createData(452, 25.0, new Date().toDateString()),
  createData(262, 16.0, new Date().toDateString()),
  createData(159, 6.0, new Date().toDateString()),
  createData(356, 16.0, new Date().toDateString()),
  createData(408, 3.2, new Date().toDateString()),
  createData(237, 9.0, new Date().toDateString()),
  createData(375, 0.0, new Date().toDateString()),
  createData(518, 26.0, new Date().toDateString()),
  createData(392, 0.2, new Date().toDateString()),
  createData(318, 0, new Date().toDateString()),
  createData(360, 19.0, new Date().toDateString()),
  createData(437, 18.0, new Date().toDateString()),
];

const headCells = [
  {
    label: "Booking ID",
    id: "bookingid",
  },
  {
    label: "Flight id",
    id: "flightid",
  },
  {
    label: "Book Date",
    id: "bookdate",
  },
];

export default function BookingTable() {
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
      <Box sx={{ width: "50%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} size="small">
              <TableHead>
                <TableRow>
                  {headCells.map((header, index) => {
                    const labelId = `enhanced-table-header-${index}`;
                    return (
                      <TableCell id={labelId} align="center" key={header.id}>
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
                        key={row.bookingid}
                      >
                        <TableCell component="th" id={labelId} scope="row" align="center">
                          {row.bookingid}
                        </TableCell>
                        <TableCell align="center">{row.flightid}</TableCell>
                        <TableCell align="center">{row.bookdate}</TableCell>
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
