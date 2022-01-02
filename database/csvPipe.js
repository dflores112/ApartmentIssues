const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();
let writer2 = csvWriter();
let writer3 = csvWriter();
let writer4 = csvWriter();
let writer5 = csvWriter();

const dataGen = async () => {
  const createTenantsTable = async () => {
    writer.pipe(fs.createWriteStream('Tenants.csv'));
    for (let i = 1; i < 1000000; i++) {
      writer.write({
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone_number:faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
      });
    }
    writer.end();
    console.log('Generated Tenants CSV');
  }
  await createTenantsTable();
}



const dataGen2 = async () => {
  const createBuildingsTable = async () => {
    writer2.pipe(fs.createWriteStream('Buildings.csv'));
    for (let i = 1; i < 33334; i++) {
      
      writer2.write({
        id: i,
        phone_number: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        name: faker.company.companyName(),
      });
    }
    writer.end();
    console.log('Generated Buildings CSV');
  }
  await createBuildingsTable();
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
const temp1 = [0,1]


const dataGen3 = async () => {
  const createApartmentsTable = async () => {
    writer3.pipe(fs.createWriteStream('Apartments.csv'));
    const temp = {
      unit_number:1,
      building_id: 1,
    }
    for (let i = 1; i < 1000000; i++) {
      writer3.write({
        id: i,
        unit_number: temp.unit_number++,
        occupant_id: getRandomIntInclusive(0,1000000),
        building_id:temp.building_id,
      });
      if(temp.unit_number === 31){
        temp.unit_number = 1;
        temp.building_id++;
      }
      if(temp.building_id === 33334){
        break;
      }
    }
    writer.end();
    console.log('Generated Apartments csv');
  }
  await createApartmentsTable();
}




const dataGen4 = async () => {
  const createWorkersTable = async () => {
    writer4.pipe(fs.createWriteStream('Workers.csv'));
    
    for (let i = 1; i < 10000; i++) {
      writer4.write({
        id: i,
        name: faker.name.findName(),
        phone: faker.phone.phoneNumberFormat(),
        email: faker.internet.email()
      });
      
    }
    writer.end();
    console.log('Generated Workers csv');
  }
  await createWorkersTable();
}




const dataGen5 = async () => {
  const createMaintenanceTable = async () => {
    writer5.pipe(fs.createWriteStream('Maintenance_Issues.csv'));
    
    for (let i = 1; i < 10000; i++) {
      writer5.write({
        id: i,
        status: temp1[getRandomIntInclusive(0,1)],
        date: faker.date.past().toJSON().slice(0,10),
        worker_id: getRandomIntInclusive(0,10000),
        apt_id: getRandomIntInclusive(0,30),
        building_id: getRandomIntInclusive(0,33334)
      });
      
    }
    writer.end();
    console.log('Generated Maintenance Issues csv');
  }
  await createMaintenanceTable();
}


/*
console.log(faker.name.firstName()); size 11
console.log(faker.name.lastName()); size 13
console.log(faker.name.findName()); size 30
console.log(faker.phone.phoneNumberFormat()); 12
console.log(faker.date.past().toJSON().slice(0,10));
console.log(faker.internet.email()); 31
console.log(faker.company.companyName()); 42
*/


/* 


EXAMPLE INSERT QUERIES PER TABLE 

1 INSERT INTO TENANTS (FIRST_NAME,LAST_NAME,PHONE_NUMBER,EMAIL) VALUES("Allison", "Schultz", "4982847412", "ahshd@gmail.com");
2 INSERT INTO BUILDINGS (PHONE, EMAIL, NAME) VALUES("1234538513", "AK@gmail.com","llc bean This");
3 INSERT INTO WORKERS (NAME, PHONE,EMAIL) VALUES("Doug", "2342342111" ,"doug@gmail.com");
4 INSERT INTO APARTMENTS (UNIT_NUMBER,OCCUPANT_ID,PARKING,BUILDING_ID) VALUES(1,879932,true,1);
5 INSERT INTO MAINTENANCE_ISSUES (STATUS,DATE, WORKER, APT_ID, BUILDING_ID) VALUES(true, "2021-08-18",1,1,2);


-- mysql -u root -p < database/SqlSchema.sql
*/

dataGen(); 
dataGen2();
dataGen3();
dataGen4();
dataGen5();
