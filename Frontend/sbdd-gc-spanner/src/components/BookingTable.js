import React, { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  const [bookings, setBookings] = React.useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:3000/bookings").then((response) => {
      console.log(response.data)
      setBookings(response.data);
    });
  }, []);

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
                {bookings
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-body-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        tabIndex={-1}
                        key={row.bookingId}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          align="center"
                        >
                          {row.bookingId}
                        </TableCell>
                        <TableCell align="center">{row.flightId}</TableCell>
                        <TableCell align="center">{row.bookDate}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={bookings.length}
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
