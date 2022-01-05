const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apartmentDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const { Issue } = require('../../models/mongo/Issues.js');

function getIssue() {

}
function AddIssue(req, callback) {
  function saveIssue(ticket) {
    const issue = new Issue({
      description: ticket.description,
      status: ticket.status,
      date: ticket.date,
      tenant: {
        name: ticket.tenant.name,
        phone: ticket.tenant.phone,
        email: ticket.tenant.email,
        unit: ticket.tenant.unit,
      },
      worker: {
        name: ticket.worker.name,
        phone: ticket.worker.phone,
        email: ticket.worker.email,
      },
      complex: {
        name: ticket.complex.name,
        phone: ticket.complex.phone,
        email: ticket.complex.email,
      },
    });
    issue.save((err) => {
      if (err) {
        callback(err);
      } else {
        callback("Saved Issue");
      }
    });
  }
  return saveIssue(req);
}
function UpdateIssue() {

}
function DeleteIssue() {

}