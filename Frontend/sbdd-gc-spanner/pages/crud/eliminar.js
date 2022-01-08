import { Typography } from "@mui/material";
import Appbar from "../../src/components/Appbar";
import SelectComponent from "../../src/components/SelectComponent";

const eliminar = () => {
  return (
    <div>
      <Appbar />
      <div>
        <Typography variant="h3" gutterBottom component="div" mt={4}>
          Eliminar
        </Typography>
      </div>
      <SelectComponent />
    </div>
  );
};

export default eliminar;
