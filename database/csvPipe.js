const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();
let writer2 = csvWriter();
let writer3 = csvWriter();



const dataGen = async () => {
  const createTenantsTable = async () => {
    writer.pipe(fs.createWriteStream('tenants.csv'));
    for (let i = 0; i < 5; i++) {
      writer.write({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone_number:faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
      });
    }
    writer.end();
    console.log('generated Tenants csv');
  }
  await createTenantsTable();
}

dataGen();

// const dataGen2 = async () => {
//   const createUserTable = async () => {
//     writer2.pipe(fs.createWriteStream('userInfo11.csv'));
//     for (let i = 0; i < 5000000; i++) {
//       let cap = faker.random.number({min:2, max: 12})
//       writer2.write({
//         first_name: faker.name.firstName(),
//         last_name: faker.name.lastName(),
//         phone_number: faker.phone.phoneNumberFormat(),
//         email: faker.internet.email(),
//         party_size: cap
//       });
//     }
//     writer.end();
//     console.log('generated user csv');
//   }
//   await createUserTable();
// }

// const dataGen3 = async () => {
//   const createReservationTable = async () => {
//     writer3.pipe(fs.createWriteStream('reservationInfo17.csv'));
//     for (let i = 0; i < 1000000; i++) {
//       writer3.write({
//         time_slot: `${timeHours[Math.floor(Math.random() * 12)]}:${timeMinutes[Math.floor(Math.random() * 4)]} ${dayNight[Math.floor(Math.random() * 2)]}`,
//         booking_date: `${months[Math.floor(Math.random() * 6)]} ${days[Math.floor(Math.random() * 30)]}, ${year}`,
//         // restaraunt_id: faker.random.number({min:1, max: 35000000}),
//         // user_id: faker.random.number({min:1, max: 50000000}),
//       });
//     }
//     writer.end();
//     console.log('generated reservation csv');
//   }
//   await createReservationTable();
// }
// dataGen();
// dataGen2();
//dataGen3();