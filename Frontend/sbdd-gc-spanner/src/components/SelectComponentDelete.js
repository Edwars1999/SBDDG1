import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, Button } from "@mui/material";
import moment from "moment";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const SelectComponentDelete = () => {
  const tblNames = ["flight", "booking", "passenger"];
  const [tblName, setTblName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  // booking
  const [id, setId] = React.useState(0);

  const handleId = (event) => {
    setId(event.target.value);
  }

  const handleChange = (event) => {
    setTblName(event.target.value);
  };

  const deleteSubmit = async () =>{
    let params = {
       id
    }
    try{
      let response = await axios.delete(`http://localhost:3000/delete/flights/${id}`)
      .then(res => {
        console.log(res)
      })
      return response;
    }catch(e){
      console.log('Error al borrar el registro',e)
    }
  }

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
          {/* bookingId */}
          <Box my={4}>
            <TextField
              id={`${tblName}-id`}
              label={`${tblName}-id`}
              variant="standard"
              defaultValue={id}
              onChange={handleId}
            />
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              Delete Bookdate
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
                  Se eliminó el registro con éxito!
                </Alert>
              </Box>
            )}
          </Box>
        </Box>
      )}
      {tblName === "passenger" && (
        <Box mt={4}>
          {/* passId ,passName, passEmail, passDob */}
          <Box my={4}>
            <TextField
              id={`${tblName}-id`}
              label={`${tblName}-id`}
              variant="standard"
              defaultValue={id}
              onChange={handleId}
            />
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              Delete Passenger
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
                Se eliminó el registro con éxito!
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
              id={`${tblName}-id`}
              label={`${tblName}-id`}
              variant="standard"
              defaultValue={id}
              onChange={handleId}
            />
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={() => {
                deleteSubmit()
                setOpen(true);
              }}
            >
              Delete Flight
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
                Se eliminó el registro con éxito!
              </Alert>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default SelectComponentDelete;
