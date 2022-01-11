import { Typography } from "@mui/material";
import Appbar from "../../src/components/Appbar";
import SelectComponentDelete from "../../src/components/SelectComponentDelete";

const eliminar = () => {
  return (
    <div>
      <Appbar />
      <div>
        <Typography variant="h3" gutterBottom component="div" mt={4}>
          Eliminar
        </Typography>
      </div>
      <SelectComponentDelete />
    </div>
  );
};

export default eliminar;
