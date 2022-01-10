// Constantes
const {Spanner} = require('@google-cloud/spanner');

// Cliente de Google Spanner

const spanner = new Spanner({

  projectId: 'sbda-337622', // ID del proyecto aqui

});
// Initialize Spanner instance
const instance = spanner.instance('proyectodba2g1'); // ID de la instancia aqui
const databaseId = 'aerolinea'; // ID de la base de datos aqui

// Initialize database
const database = instance.database(databaseId);

// Initialize Bookings constructor

var Bookings = function () {}

// Get All
Bookings.prototype.getAllBookings = async function() {
	
	try {
		const query = {
			sql: `SELECT * FROM booking`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener datos de la tabla Booking", err)
	}

}

// READ 
Bookings.prototype.getBooking = async function(bookingId) {
	
	try {
		const query = {
			sql: `SELECT * FROM booking WHERE bookingId=${bookingId} AND passId=${passId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener el elemento Booking", err)
	}

}

// CREATE
Bookings.prototype.createBooking = async function(flightId, bookdate) {
	
	try {
		const query = {
			sql: `INSERT INTO booking (flightId, bookdate) VALUES (${flightId}, ${bookdate})`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al crear el elemento Booking", err)
	}

}

// UPDATE
Bookings.prototype.modifyBooking = async function(bookingId, flightId, bookdate) {
	
	try {
		const query = {
			sql: `UPDATE booking SET flightId=${flightId}, bookdate=${bookdate} WHERE bookingId=${bookingId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al modificar el elemento Booking", err)
	}

}

// DELETE 
Bookings.prototype.deleteBooking = async function(bookingId) {
	
	try {
		const query = {
			sql: `DELETE FROM booking WHERE bookingId=${bookingId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al eliminar el elemento Booking", err)
	}

}


module.exports = Bookings