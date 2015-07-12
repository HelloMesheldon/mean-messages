//Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost:27017/messages');

/**
 * Lets define our Model for Message entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Message = mongoose.model('Message', {data: String});

/**
 * Lets Use our Models
 * */

// Lets create a new user
var message = new Message({data: 'Sample data'});

// Lets try to print and see it. You will see _id is assigned.
console.log(message);

// Lets save it
message.save(function (err, object) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', object);
  }
  process.exit(0);
});