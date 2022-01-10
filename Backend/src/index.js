// Constantes
const express = require('express');
const flights = require("./flights.js");
const bookings = require("./bookings.js");
const bookingdetailss = require("./bookingdetails.js");
const passengers = require("./passengers.js");

const app = express();
const port = 3000;

// Middlewares
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

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
app.get('/flights', (req, res) => {
	try {
		flight = new flights();
		let data = flight.getAllFlights()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/flights/:id', (req, res) => {
	const { id } = req.params;
	try {
		flight = new flights();
		let data = flight.getFlight(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.post('/flights/new', (req, res) => {
	const { flightSource, flightDest, flightDate, flightSeat, ticketCost } = req.body;
	try {
		flight = new flights();
		let data = flight.createFlight(flightSource, flightDest, flightDate, flightSeat, ticketCost)
		
		if (data == null) {
			res.status(404).send("No se pudo enviar la información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.put('/flights/:id', (req, res) => {
	const { id } = req.params;
	const { flightSource, flightDest, flightDate, flightSeat, ticketCost } = req.body;
	try {
		flight = new flights();
		let data = flight.modifyFlight(id, flightSource, flightDest, flightDate, flightSeat, ticketCost)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.delete('/flights/:id', (req, res) => {
	const { id } = req.params;
	try {
		flight = new flights();
		let data = flight.deleteFlight(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});








//--------------------------- Rutas de la tabla Booking ------------------------------
app.get('/bookings', (req, res) => {
	try {
		booking = new bookings();
		let data = booking.getAllBookings()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/bookings/:id', (req, res) => {
	const { id } = req.params;
	try {
		booking = new bookings();
		let data = booking.getBooking(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.post('/bookings/new', (req, res) => {
	const { flightId, bookdate } = req.body;
	try {
		booking = new bookings();
		let data = booking.createBooking(flightId, bookdate)
		
		if (data == null) {
			res.status(404).send("No se pudo enviar la información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.put('/bookings/:id', (req, res) => {
	const { id } = req.params;
	const { flightId, bookdate } = req.body;
	try {
		booking = new bookings();
		let data = booking.modifyBooking(id, flightId, bookdate)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.delete('/bookings/:id', (req, res) => {
	const { id } = req.params;
	try {
		booking = new bookings();
		let data = booking.deleteBooking(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});





//--------------------------- Rutas de la tabla Passenger ------------------------------
app.get('/passengers', (req, res) => {
	try {
		passenger = new passengers();
		let data = passenger.getAllPassengers()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/passengers/:id', (req, res) => {
	const { id } = req.params;
	try {
		passenger = new passengers();
		let data = passenger.getPassenger(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.post('/passengers/new', (req, res) => {
	const { passName, passEmail, passDob } = req.body;
	try {
		passenger = new passengers();
		let data = passenger.createPassenger(passName, passEmail, passDob)
		
		if (data == null) {
			res.status(404).send("No se pudo enviar la información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.put('/passengers/:id', (req, res) => {
	const { id } = req.params;
	const { passName, passEmail, passDob } = req.body;
	try {
		passenger = new passengers();
		let data = passenger.modifyPassenger(id, passName, passEmail, passDob)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.delete('/passengers/:id', (req, res) => {
	const { id } = req.params;
	try {
		passenger = new passengers();
		let data = passenger.deletePassenger(id)
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});





//------------------------ Rutas de la tabla BookingDetails ---------------------------
app.get('/bookingdetailss', (req, res) => {
	try {
		bookingdetails = new bookingdetailss();
		let data = bookingdetails.getAllBookingDetails()
		
		if (data == null) {
			res.status(404).send("No existe información")
		}
		res.send(data)
		
	}catch (err) {
		res.status(500).send({err})
	}
});

app.get('/bookingsdetailss/:id1/:id2', (req, res) => {
	const { id1, id2 } = req.params;
	try {
		bookingdetails = new bookingdetailss();
		let data = bookingdetails.getBookingDetails(id1, id2)
		
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