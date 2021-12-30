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

// Initialize Passengers constructor

var Passengers = function () {}

// Expose getter function to get all passengers
Passengers.prototype.getAllPassengers = async function() {
	
	try {
		const query = {
			sql: 'SELECT * FROM passenger',
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener datos de la tabla Passenger", err)
	}

}

module.exports = Passengers