const { Issue } = require('../models/mongo/Issues.js');

function getIssue(req, res) {
  Issue.findById(req.params.issueId, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
}
function AddIssue(req, res) {
  function saveIssue(ticket) {
    const { description, status, date } = ticket;
    const issue = new Issue({
      description,
      status,
      date,
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
        res.send(err);
      } else {
        res.send('Saved Issue');
      }
    });
  }
  return saveIssue(req.body);
}
function UpdateIssue() {

}
function DeleteIssue() {

}

module.exports = {
  getIssue, AddIssue, UpdateIssue, DeleteIssue,
};
