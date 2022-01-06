const {
  getIssue, AddIssue, UpdateIssue, DeleteIssue,
} = require('../controllers/index.js');

module.exports = function (app) {
  app.get('/issues', getIssue);

  app.post('/issues', AddIssue);

  app.put('/issues', UpdateIssue);

  app.delete('/issues', DeleteIssue);
  // other routes..
};
