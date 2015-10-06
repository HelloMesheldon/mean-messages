var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	messages = require('./routes/messages'),
	Message,
	message,
	mongoUrl = process.env.MONGO_URL,
	port = process.env.PORT || 5555;

/* DB Connection*/
mongoose.connect(mongoUrl, function mongooseConnection (err) {
	if (err) {
		console.log('Mongo DB connection error', err);
	} else {
		console.log('Mongo DB connection successful');
	}
});

/* Middleware */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS');
 	next();
});

/* Routes */
app.use('/messages', messages);

app.listen(port);

console.log('Messages listening on port', port);