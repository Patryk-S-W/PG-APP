const Pool = require('pg').Pool
const pool = new Pool({
	user: 'admin',
	host: 'localhost',
	database: 'api',
	password: 'admin',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
})


const getUsers = (request, response) => {
	pool.query('SELECT id, firstname as first_name, lastname as last_name, company, email, phone FROM users ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}
    
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {

		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createUser = (request, response) => {
	const { name, email } = request.body

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
		if (error) {
			throw error
		}
		response.status(201).send(`User added with ID: ${result.insertId}`)
	})
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
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
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	createProject,
	createRaport,
	createSchedule,
	getAvailableProjects,
	getParticipants,
	getProjects
}