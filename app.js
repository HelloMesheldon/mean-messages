var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	messages = require('./routes/messages'),
	Message,
	message,
	port = 5555;

/* DB Connection*/
mongoose.connect('mongodb://localhost:27017/messages', function mongooseConnection (err) {
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
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
});

/* Routes */
app.use('/messages', messages);

app.listen(port);

console.log('Messages listening on port', port);

/**
 * Lets define our Model for Message entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
//Message = mongoose.model('Message', {data: String});

// Lets create a new user
//message = new Message({data: 'Sample data'});

// Lets try to print and see it. You will see _id is assigned.
//console.log(message);

// Lets save it
/*message.save(function (err, object) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', object);
  }
  process.exit(0);
});*/