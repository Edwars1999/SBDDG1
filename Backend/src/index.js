// Constantes
const express = require('express');
const flights = require("./flights.js");
const bookings = require("./bookings.js");
const bookingdetails = require("./bookingdetails.js");
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

//------------------------ Rutas de la tabla BookingDetails ---------------------------
app.get('/bookingdetails', (req, res) => {
	try {
		bookingdetails = new bookingdetails();
		let data = bookingdetails.getAllBookingDetails()
		
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


// Conexion a Google Spanner
app.listen(port, () => console.log('El servidor funciona en el puerto ', port));