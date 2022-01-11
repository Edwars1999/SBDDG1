import { Typography } from "@mui/material";
import Appbar from "../../src/components/Appbar";
import SelectComponentEdit from "../../src/components/SelectComponentEdit";

const editar = () => {
  return (
    <div>
      <Appbar />
      <div>
        <Typography variant="h3" gutterBottom component="div" mt={4}>
          Editar
        </Typography>
      </div>
      <SelectComponentEdit />
    </div>
  );
};

export default editar;
