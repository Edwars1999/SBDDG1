import { Typography } from "@mui/material";
import Appbar from "../../src/components/Appbar";
import SelectComponent from "../../src/components/SelectComponent";

const agregar = () => {
  return (
    <div>
      <Appbar />
      <div>
        <Typography variant="h3" gutterBottom component="div" mt={4}>
          Agregar
        </Typography>
      </div>
      <SelectComponent />
    </div>
  );
};

export default agregar;
