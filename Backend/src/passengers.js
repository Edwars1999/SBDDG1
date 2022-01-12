require('dotenv').config()
// Constantes
const {Spanner} = require('@google-cloud/spanner');



// Cliente de Google Spanner

const spanner = new Spanner({

  projectId: 'sbda-337622', // ID del proyecto aqui
  keyFilename: process.env.keyFilename

});
// Initialize Spanner instance
const instance = spanner.instance('proyectodba2g1'); // ID de la instancia aqui
const databaseId = 'aerolinea'; // ID de la base de datos aqui

// Initialize database
const database = instance.database(databaseId);

// Initialize Passengers constructor

var Passengers = function () {}

// Get All
Passengers.prototype.getAllPassengers = async function() {
	
	try {
		const query = {
			sql: `SELECT * FROM passenger`,
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

// READ 
Passengers.prototype.getPassenger = async function(passId) {
	
	try {
		const query = {
			sql: `SELECT * FROM passenger WHERE passId=${passId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener el elemento Passenger", err)
	}

}

// CREATE 
Passengers.prototype.createPassenger = async function(passName, passEmail, passDob) {
	
	try {
		const query = {
			sql: `INSERT INTO passenger (passName, passEmail, passDob) VALUES (${passName}, ${passEmail}, ${passDob})`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al crear el elemento Passenger", err)
	}

}

// UPDATE
Passengers.prototype.modifyPassenger = async function(passId ,passName, passEmail, passDob) {
	
	try {
		const query = {
			sql: `UPDATE passenger SET passName=${passName}, passEmail=${passEmail}, passDob=${passDob} WHERE passId=${passId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al modificar el elemento Passenger", err)
	}

}

// DELETE 
Passengers.prototype.deletePassenger = async function(passId) {
	
	try {
		const query = {
			sql: `DELETE FROM passenger WHERE passId=${passId}`,
		};
		
		let result = await database.run(query);
		if (result[0]) {
			var rows = result[0].map((row) => row.toJSON());
			return rows;
		
		}else {
			return null
		}

	}catch (err) {
		throw("Error al obtener el elemento Passenger", err)
	}

}


module.exports = Passengers