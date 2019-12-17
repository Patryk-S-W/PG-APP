const config = require('config.js');

const Pool = require('pg').Pool
const pool = new Pool({
	user: config.dbUser,
	host: config.dbHost,
	database: config.dbDatabase,
	password: config.dbPassword,
	port: config.dbPort,
	max: 10,
	idleTimeoutMillis: 30000,
})


const getUsers = (request, response) => {
	pool.query('SELECT uid, firstname, lastname, company, email, phone, role FROM users ORDER BY uid ASC', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}
    
const getUserById = (request, response) => {
    const uid = parseInt(request.params.uid)

    pool.query('SELECT * FROM users WHERE uid = $1', [uid], (error, results) => {

		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}


const getUserByRole = (request, response) => {
    const role = parseInt(request.params.role)

    pool.query('SELECT * FROM users WHERE role = $1', [role], (error, results) => {

		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}


const getUserByUsernameAndPassword = (request, response) => {
    const username = parseInt(request.params.username)
    const password = parseInt(request.params.password)

    pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], (error, results) => {

		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}


const getUserByUsername = (request, response) => {
    const username = parseInt(request.params.username)

    pool.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {

		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

const createUser = (request, response) => {
	const { name, email } = request.body

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(201).send(`User added with ID: ${result.insertId}`)
	})
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE uid = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        response.status(400).json({error})
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE uid = $1', [id], (error, results) => {
    if (error) {
      response.status(400).json({error})
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

const createProject = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

const createRaport = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

const createSchedule = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

const getAvailableProjects = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

const getParticipants = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

const getProjects = (request, response) => {
	pool.query('', (error, results) => {
		if (error) {
			response.status(400).json({error})
		}
		response.status(200).json(results.rows)
	})
}

module.exports = {
	pool,
	getUsers,
	getUserById,
	getUserByRole,
	getUserByUsername,
	getUserByUsernameAndPassword,
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