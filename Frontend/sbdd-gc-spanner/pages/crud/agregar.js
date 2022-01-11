import { Typography } from "@mui/material";
import Appbar from "../../src/components/Appbar";
import SelectComponentAdd from "../../src/components/SelectComponentAdd";

const agregar = () => {
  return (
    <div>
      <Appbar />
      <div>
        <Typography variant="h3" gutterBottom component="div" mt={4}>
          Agregar
        </Typography>
      </div>
      <SelectComponentAdd />
    </div>
  );
};

export default agregar;
