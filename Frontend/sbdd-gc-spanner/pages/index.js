import { Typography } from "@mui/material";
import Appbar from "../src/components/Appbar";
import EnhancedTable from "../src/components/Table";

const Home = () => {
  return (
    <div>
      <Appbar />
      <div>
      <Typography variant="h2" gutterBottom component="div" mt={4}>
          Vista de las tablas
        </Typography>
      </div>
      <div>
        <Typography variant="h4" gutterBottom component="div" mt={4}>
          Vuelos
        </Typography>
        <EnhancedTable />
      </div>
    </div>
  );
};

export default Home;
