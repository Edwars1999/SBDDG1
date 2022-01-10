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

var BookingDetails = function () {}

// Get All
BookingDetails.prototype.getAllBookingDetails = async function() {
	
	try {
		const query = {
			sql: `SELECT * FROM bookingdetails`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener datos de la tabla BookingDetails", err)
	}

}

// READ 
BookingDetails.prototype.getBookingDetails = async function(bookingId, passId) {
	
	try {
		const query = {
			sql: `SELECT * FROM bookingdetails WHERE bookingId=${bookingId} AND passId=${passId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener el elemento BookingDetails", err)
	}

}


module.exports = BookingDetails