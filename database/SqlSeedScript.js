var mysql = require('mysql')
var faker = require('faker');
const { config } = require("../bdpw.js");

var connection = mysql.createConnection(config);

/*
console.log(faker.name.firstName());
console.log(faker.name.lastName());
console.log(faker.name.findName());
console.log(faker.phone.phoneNumberFormat());
console.log(faker.date.past().toJSON().slice(0,10));
console.log(faker.internet.email());
console.log(faker.company.companyName());
*/


/* 

4 INSERT INTO APARTMENTS (UNIT_NUMBER,OCCUPANT,PARKING,WASHER_DRYER,APT_COMPLEX) VALUES(1,1,true,false,1);
1 INSERT INTO TENANTS (FIRST_NAME,LAST_NAME,PHONE_NUMBER,EMAIL) VALUES("Allison", "Schultz", "4982847412", "ahshd@gmail.com");
2 INSERT INTO APT_COMPLEXS (PHONE, EMAIL) VALUES("1234538513", "AK@gmail.com");
3 INSERT INTO WORKERS (NAME, PHONE,EMAIL) VALUES("Doug", "2342342111" ,"doug@gmail.com");
5 INSERT INTO APARTMENT_PROBLEMS (STATUS,DATE, WORKER, APT_ID) VALUES(true, "2021-08-18",1,1 );

*/

connection.connect(function(err) {
    if(err){
      console.log("Error in the connection")
      console.log(err)
    }
    else{
      console.log(`Database Connected`)
      insertStatement();
    }
})

function insertStatement(){
    
    for(let i = 0; i < 1; i++){
    connection.query(`INSERT INTO TENANTS (FIRST_NAME,LAST_NAME,PHONE_NUMBER,EMAIL) VALUES(${faker.name.firstName()}, ${faker.name.lastName()}, ${faker.phone.phoneNumberFormat()}, ${faker.internet.email()})`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result: ",result) 
      })
    }

    for(let i = 0; i < 5; i++){ 
        connection.query(`INSERT INTO APT_COMPLEXS (PHONE, EMAIL, NAME) VALUES(${faker.phone.phoneNumberFormat()}, ${faker.internet.email()}, ${faker.company.companyName()})`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result: ",result) 
      })
    }

    for(let i = 0; i < 5; i++){ 
        connection.query(`INSERT INTO WORKERS (NAME, PHONE,EMAIL) VALUES(${faker.name.findName()}, ${faker.phone.phoneNumberFormat()} ,${faker.internet.email()})`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result: ",result) 
      })
    }

}

