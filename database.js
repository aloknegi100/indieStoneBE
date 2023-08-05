const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb+srv://aditya100:AlokAditya100@cluster0.s4mx3pj.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});