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

// Initialize Bookings constructor

var BookingDetails = function () {}

// Expose getter function to get all bookings
BookingDetails.prototype.getAllBookingDetails = async function() {
	
	try {
		const query = {
			sql: 'SELECT * FROM bookingdetails',
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

module.exports = BookingDetails