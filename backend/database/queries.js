const Pool = require('pg').Pool
const pool = new Pool({
	user: 'admin',
	host: 'localhost',
	database: 'api',
	password: 'admin',
	port: 5432,
})


const getUsers = (request, response) => {
	pool.query('SELECT id, firstname as first_name, lastname as last_name, company, mail, phone FROM users ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createUser = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createProject = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createRaport = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createSchedule = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const getAvailableProjects = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const getParticipants = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const getProjects = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

module.exports = {
	getUsers,
	createUser,
	createProject,
	createRaport,
	createSchedule,
	getAvailableProjects,
	getParticipants,
	getProjects
}