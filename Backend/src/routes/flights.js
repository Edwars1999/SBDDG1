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

// Initialize Flights constructor

var Flights = function () {}

// Expose getter function to get all users
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

module.exports = Flights