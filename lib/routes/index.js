const {
  getIssue, AddIssue, UpdateIssue, DeleteIssue,
} = require('../controllers/index.js');

module.exports = function (app) {
  app.get('/issues/:issueId', getIssue);

  app.post('/issues', AddIssue);

  app.put('/issues/:issueId', UpdateIssue);

  app.delete('/issues/:issueId', DeleteIssue);
  // other routes..
};
