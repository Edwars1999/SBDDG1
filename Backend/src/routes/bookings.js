// Constantes
const Spanner = require('@google-cloud/spanner');

// Cliente de Google Spanner

const spanner = new Spanner({

  projectId: process.env.projectId, // Environment variable assigned here

});
// Initialize Spanner instance
const instance = spanner.instance(process.env.instanceId); // Environment variable assigned here
const databaseId = process.env.databaseId; // Environment variable assigned here

// Initialize database
const database = instance.database(databaseId);

// Initialize Bookings constructor

var Bookings = function () {}

// Expose getter function to get all bookings
Bookings.prototype.getAllBookings = async function() {
	
	try {
		const query = {
			sql: 'SELECT * FROM booking',
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

module.exports = Bookings