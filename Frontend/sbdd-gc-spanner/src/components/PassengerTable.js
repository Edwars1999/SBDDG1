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

function createData(passid, passname, passemail, passdob) {
  return {
    passid,
    passname,
    passemail,
    passdob,
  };
}

const rows = [
  createData(
    305,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    452,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    262,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    159,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    356,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    408,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    237,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    375,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    518,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    392,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    318,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    360,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
  createData(
    437,
    "Juan Perez",
    "juanperez@gmail.com",
    new Date().toDateString()
  ),
];

const headCells = [
  {
    id: "passid",
    label: "Passenger ID",
  },
  {
    id: "passname",
    label: "Passenger Name",
  },
  {
    id: "passemail",
    label: "Passenger Email",
  },
  {
    id: "passdob",
    label: "Passenger Date of Booking",
  },
];

export default function PassengerTable() {
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
                        key={row.passid}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          align="center"
                        >
                          {row.passid}
                        </TableCell>
                        <TableCell align="center">{row.passname}</TableCell>
                        <TableCell align="center">{row.passemail}</TableCell>
                        <TableCell align="center">{row.passdob}</TableCell>
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
