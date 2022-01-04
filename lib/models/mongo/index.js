const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/apartmentDB');
}

const ApartmentIssues = new mongoose.Schema({
    description: String,
    status: Boolean,
    date: Date,
    tenant: {
        name: String,
        phone: String,
        email:String,
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
    }
});
