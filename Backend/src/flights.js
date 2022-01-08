// Constantes
const {Spanner} = require('@google-cloud/spanner');

// Cliente de Google Spanner

const spanner = new Spanner({

  projectId: 'bamboo-case-331602', // ID del proyecto aqui

});
// Initialize Spanner instance
const instance = spanner.instance('sbddg1'); // ID de la instancia aqui
const databaseId = 'aerolinea'; // ID de la base de datos aqui

// Initialize database
const database = instance.database(databaseId);

// Initialize Flights constructor

var Flights = function () {}

//-----------------------------------------------FUNCIONES---------------------------------------
// Get ALL
Flights.prototype.getAllFlights = async function() {
	
	try {
		const query = {
			sql: 'SELECT * FROM flight',
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener datos de la tabla Flight", err)
	}

}

// READ 
Flights.prototype.getFlight = async function(idflight) {
	
	try {
		const query = {
			sql: 'SELECT * FROM flight WHERE flightid=${idflight}',
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener datos de la tabla Flight", err)
	}

}

// CREATE
Flights.prototype.createFlight = async function(flightSource, flightDest, flightDate, flightSeat, ticketCost) {
	
	try {
		const query = {
		sql: 'INSERT INTO flight (flightSource, flightDest, flightDate, flightSeat, ticketCost) VALUES (${flightSource}, ${flightDest}, ${flightDate}, ${flightSeat}, ${ticketCost})',
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener datos de la tabla Flight", err)
	}

}


module.exports = Flights