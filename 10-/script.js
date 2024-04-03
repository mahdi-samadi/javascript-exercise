'use strict';

// const bookings = [];
// const creatBooking = function (flightNum, numPassengers, price) {
//   const booking = {
//     numPassengers,
//     flightNum,
//     price,
//   };
//   console.log(booking);
// };
// creatBooking('mahdi');

const flight = 'LH234';
const samadi = {
  name: 'mahdi',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 123456789) {
    alert('checked In');
  } else {
    alert('worng password');
  }
  // console.log(flightNum, passenger.name);
};
// checkIn(flight, samadi);
// console.log(flight);
// console.log(samadi);

// const flightNum = flight;
// const passenger = samadi;
// console.log(flight, samadi);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10);
  console.log(person.passport);
};
// console.log(samadi);
newPassport(samadi);
checkIn(flight, samadi);
