var mysql = require('mysql')
var faker = require('faker');
const { config } = require("../bdpw.js");

var connection = mysql.createConnection(config);
