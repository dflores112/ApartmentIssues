const express = require('express')

const app = express()
const port = 3000
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"yourpassword",
    database : "apartmentDB"
});


app.get('/', (req, res) => {
    let sql = `SELECT * FROM apartmentDB`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  res.send(results)
  console.log(results);
});
        
         
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})