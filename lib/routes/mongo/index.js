const express = require('express');

const app = express();

const {
  getIssue, AddIssue, UpdateIssue, DeleteIssue,
} = require("../../controllers/mongo/index.js");

app.get('/issues', getIssue);

app.post('/issues', AddIssue);

app.put('/issues', UpdateIssue);

app.delete('/issues', DeleteIssue);
