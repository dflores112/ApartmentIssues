const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apartmentDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
