require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const db = require('./database/queries');
const multer = require('multer')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const { body, check } = require('express-validator')

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(compression())
app.use(helmet())

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
})

app.use(limiter)

app.get('/test', db.getUsers)

// api routes
//app.use('/users', require('./users/users.controller'));
app.get('/', (request, response) => {
  response.json({ info: 'API' })
})
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

// file upload
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploadRaports')
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname)
	}
})

const upload = multer({
	storage: storage
}).single('file')


app.post('/uploadRaports', function(req, res) {
	upload(req, res, function(err) {
		if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
		} else if (err) {
			return res.status(500).json(err)
		}
		return res.status(200).send(req.file)
	})
});

// global error handler
app.use(errorHandler);

// start server

const isProduction = process.env.NODE_ENV === 'production'
const origin = {
  origin: isProduction ? 'https://projektygrupowe.ftims.pg.edu.pl' : '*',
}
app.use(cors(origin))
const port = isProduction ? 80 : 4000;
const server = app.listen(port, function() {
	console.log('Server listening on port ' + port);
});