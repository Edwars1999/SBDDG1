import { Typography } from "@mui/material";
import Appbar from "../src/components/Appbar";
import FlightTable from "../src/components/FlightTable";
import BookingTable from "../src/components/BookingTable";
import PassengerTable from "../src/components/PassengerTable";



const Home = () => {
  return (
    <div>
      <Appbar />
      <div>
      <Typography variant="h2" gutterBottom component="div" mt={4}>
          Vista de las tablas
        </Typography>
      </div>
      <div id='vuelos-data'>
        <Typography variant="h4" gutterBottom component="div" mt={4}>
          Vuelos
        </Typography>
        <FlightTable />
      </div>
      <div id='booking-data'>
        <Typography variant="h4" gutterBottom component="div" mt={4}>
          Booking
        </Typography>
        <BookingTable />
      </div>
      <div id='passenger-data'>
        <Typography variant="h4" gutterBottom component="div" mt={4}>
          Passenger
        </Typography>
        <PassengerTable />
      </div>
    </div>
  );
};

export default Home;
