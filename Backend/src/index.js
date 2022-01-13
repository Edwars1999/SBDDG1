// Constantes
const express = require('express');
var cors = require('cors')
const flights = require("./flights.js");
const bookings = require("./bookings.js");
const bookingdetailss = require("./bookingdetails.js");
const passengers = require("./passengers.js");

const app = express();
const port = 3000;

// Middlewares
app.use(cors())
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.json());


// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la aplicacion de gestión de vuelos!');
});






//--------------------------- Rutas de la tabla Flight ------------------------------
app.get('/flights', async (req, res) => {
	try {
		flight = new flights();
		let data = await flight.getAllFlights()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/flights/:id', async (req, res) => {
	const { id } = req.params;
	try {
		flight = new flights();
		let data = await flight.getFlight(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.post('post/flights/new', async (req, res) => {
	const { flightSource, flightDest, flightDate, flightSeat, ticketCost } = req.body;
	try {
		flight = new flights();
		let data = await flight.createFlight(flightSource, flightDest, flightDate, flightSeat, ticketCost)
		
		if (data == null) {
			res.status(404).send("No se pudo enviar la información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.put('update/flights/:id', async (req, res) => {
	const { id } = req.params;
	const { flightSource, flightDest, flightDate, flightSeat, ticketCost } = req.body;
	try {
		flight = new flights();
		let data = await flight.modifyFlight(id, flightSource, flightDest, flightDate, flightSeat, ticketCost)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.delete('/delete/flights/:id', async (req, res) => {
	const { id } = req.params;
	try {
		flight = new flights();
		let data = await flight.deleteFlight(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});








//--------------------------- Rutas de la tabla Booking ------------------------------
app.get('/bookings', async (req, res) => {
	try {
		booking = new bookings();
		let data = await booking.getAllBookings()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/bookings/:id', async (req, res) => {
	const { id } = req.params;
	try {
		booking = new bookings();
		let data = await booking.getBooking(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.post('/bookings/new', async (req, res) => {
	const { flightId, bookdate } = req.body;
	try {
		booking = new bookings();
		let data = await booking.createBooking(flightId, bookdate)
		
		if (data == null) {
			res.status(404).send("No se pudo enviar la información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.put('/bookings/:id', async (req, res) => {
	const { id } = req.params;
	const { flightId, bookdate } = req.body;
	try {
		booking = new bookings();
		let data = await booking.modifyBooking(id, flightId, bookdate)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.delete('/bookings/:id', async (req, res) => {
	const { id } = req.params;
	try {
		booking = new bookings();
		let data = await booking.deleteBooking(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});





//--------------------------- Rutas de la tabla Passenger ------------------------------
app.get('/passengers', async (req, res) => {
	try {
		passenger = new passengers();
		let data = await passenger.getAllPassengers()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/passengers/:id', async (req, res) => {
	const { id } = req.params;
	try {
		passenger = new passengers();
		let data = await passenger.getPassenger(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.post('/passengers/new', async (req, res) => {
	const { passName, passEmail, passDob } = req.body;
	try {
		passenger = new passengers();
		let data = await passenger.createPassenger(passName, passEmail, passDob)
		
		if (data == null) {
			res.status(404).send("No se pudo enviar la información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.put('/passengers/:id', async (req, res) => {
	const { id } = req.params;
	const { passName, passEmail, passDob } = req.body;
	try {
		passenger = new passengers();
		let data = await passenger.modifyPassenger(id, passName, passEmail, passDob)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.delete('/passengers/:id', async (req, res) => {
	const { id } = req.params;
	try {
		passenger = new passengers();
		let data = await passenger.deletePassenger(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});





//------------------------ Rutas de la tabla BookingDetails ---------------------------
app.get('/bookingdetailss', async (req, res) => {
	try {
		bookingdetails = new bookingdetailss();
		let data = await bookingdetails.getAllBookingDetails()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/bookingsdetailss/:id1/:id2', async (req, res) => {
	const { id1, id2 } = req.params;
	try {
		bookingdetails = new bookingdetailss();
		let data = await bookingdetails.getBookingDetails(id1, id2)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});





// Conexion a Google Spanner
app.listen(port, () => console.log('El servidor funciona en el puerto ', port));