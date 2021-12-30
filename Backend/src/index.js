// Constantes
const express = require('express');
const flights = require("./routes/flights.js");
const bookings = require("./routes/bookings.js");
const passengers = require("./routes/passengers.js");

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
		let data = await flight.getAllFlights()
		
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
		let data = await booking.getAllBookings()
		
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
		let data = await passenger.getAllPassengers()
		
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