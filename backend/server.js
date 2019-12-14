require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const db = require('./database/queries');
const multer = require('multer')

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/users', db.getUsers);

// api routes
app.use('/users', require('./users/users.controller'));


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
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function() {
	console.log('Server listening on port ' + port);
});