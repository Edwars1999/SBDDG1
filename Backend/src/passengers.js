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