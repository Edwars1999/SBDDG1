import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, Button, Input, InputAdornment } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import moment from "moment";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SelectComponentAdd = () => {
  const tblNames = ["flight", "booking", "passenger"];
  const [tblName, setTblName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  // booking
  const [date, setDate] = React.useState(new moment());
  // passenger
  const [passName, setpassName] = React.useState("");
  const [passEmail, setpassEmail] = React.useState("");
  //flights
  {
    /* flightSource, flightDest, flightDate, flightSeat, ticketCost */
  }
  const [flightSource, setflightSource] = React.useState("");
  const [flightDest, setflightDest] = React.useState("");
  const [flightSeat, setflightSeat] = React.useState(0);
  const [ticketCost, setticketCost] = React.useState(0.0);

  const handleChangeName = (event) => {
    setpassName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setpassEmail(event.target.value);
  };

  const handleflightSource = (event) => {
    setflightSource(event.target.value);
  };
  const handleflightDest = (event) => {
    setflightDest(event.target.value);
  };
  const handleflightSeat = (event) => {
    setflightSeat(event.target.value);
  };
  const handleticketCost = (event) => {
    setticketCost(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setDate(newValue.format("L"));
  };

  const handleChange = (event) => {
    setTblName(event.target.value);
  };

  return (
    <Container>
      <Box sx={{ minWidth: 120 }} mt={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Nombre de la tabla
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tblName}
            label="Nombre de la tabla"
            onChange={handleChange}
          >
            {tblNames.map((tableName, index) => (
              <MenuItem key={index} value={tableName}>
                {tableName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {tblName === "booking" && (
        <Box mt={4}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              label="Book date"
              // inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              Create Bookdate
            </Button>
            {open && (
              <Box mt={4}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Se creó el registro con éxito!
                </Alert>
              </Box>
            )}
          </Box>
        </Box>
      )}
      {tblName === "passenger" && (
        <Box mt={4}>
          {/* passName, passEmail, passDob */}
          <Box my={4}>
            <TextField
              id="passName"
              label="Passenger Name"
              variant="standard"
              onChange={handleChangeName}
            />
          </Box>
          {console.log(passName)}
          <Box my={4}>
            <TextField
              id="passEmail"
              label="Passenger Email"
              variant="standard"
              onChange={handleChangeEmail}
            />
          </Box>
          <Box mt={4}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="Passenger date of booking"
                // inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              Create Passenger
            </Button>
          </Box>
          {open && (
            <Box mt={4}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Se creó el registro con éxito!
              </Alert>
            </Box>
          )}
        </Box>
      )}
      {tblName === "flight" && (
        <Box mt={4}>
          {/* flightSource, flightDest, flightDate, flightSeat, ticketCost */}
          <Box my={4}>
            <TextField
              id="flightSource"
              label="Flight Source"
              variant="standard"
              onChange={handleflightSource}
            />
          </Box>
          <Box my={4}>
            <TextField
              id="flightDest"
              label="Flight Destination"
              variant="standard"
              onChange={handleflightDest}
            />
          </Box>
          <Box mt={4}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker
                label="Flight Date"
                // inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box my={4}>
            <TextField
              onChange={handleflightSeat}
              id="flightSeat"
              label="Flight Seat"
              variant="standard"
            />
          </Box>
          <Box my={4}>
            <InputLabel id="ticketCost" label="Ticket Cost">
              Ticket Cost
            </InputLabel>
            <Input
              onChange={handleticketCost}
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              Create Flight
            </Button>
          </Box>
          {open && (
            <Box mt={4}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Se creó el registro con éxito!
              </Alert>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default SelectComponentAdd;
