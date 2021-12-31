var mysql = require('mysql')
const { config } = require("../bdpw.js");

var connection = mysql.createConnection(config);
