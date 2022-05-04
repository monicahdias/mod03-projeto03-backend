const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(process.env.URI_DATABSE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas connected'))
    .catch((error) =>
      console.log(`Error to connect to MongoDB Atlas, error ${error}`),
    );
}

module.exports = connectToDatabase;
