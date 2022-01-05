const mongoose = require('mongoose');

const Issues = new mongoose.Schema({
  description: String,
  status: Boolean,
  date: Date,
  tenant: {
    name: String,
    phone: String,
    email: String,
    unit: Number,
  },
  worker: {
    name: String,
    phone: String,
    email: String,
  },
  complex: {
    name: String,
    phone: String,
    email: String,
  },
});

module.exports = {
  Issues,
};
