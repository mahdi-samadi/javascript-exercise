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

// const flight = 'LH234';
// const samadi = {
//   name: 'mahdi',
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;
//   if (passenger.passport === 123456789) {
//     alert('checked In');
//   } else {
//     alert('worng password');
//   }
// console.log(flightNum, passenger.name);
// };
// checkIn(flight, samadi);
// console.log(flight);
// console.log(samadi);

// const flightNum = flight;
// const passenger = samadi;
// console.log(flight, samadi);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10);
//   console.log(person.passport);
// };
// // console.log(samadi);
// newPassport(samadi);
// checkIn(flight, samadi);

// const high5 = function (str) {
//   return str.toUpperCase();
// };

// const high4 = function (str, fn) {
//   console.log(`${str} ${fn(str)} and ${fn.name}`);
// };
// high4('mahdi', high5);
// document.body.addEventListener('click', high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet('hey');
// greeter('mahdi');

// const greeter = greating => name => console.log(`${greating} ${name}`);
// greeter('hey')('mahdi');

// const lufthansa = {
//   airline: 'lufthansa',
//   iatacode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iatacode}${flightNum}`, name });
//   },
// };

// lufthansa.book(400, 'Mahdi');

// const mehrabad = {
//   airline: 'mehrabad',
//   iatacode: 'TV',
//   booking: [],
// };
// const booksss = lufthansa.book;
// booksss.call(mehrabad, 79, 'mahdi');

// const flightData = [23, 'elnaz'];
// booksss.apply(mehrabad, flightData);
// booksss.call(mehrabad, ...flightData);
// console.log(mehrabad);
// console.log(lufthansa);

// const bookBind = booksss.bind(lufthansa);
// bookBind(500, 'azam');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const textRate = function (rate) {
//   const moteqayer = value => console.log(value + value * rate);
// };

// textRate(0.23);

// console.log(moteqayer(100));

// challenged 1:
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')} \n(wirte option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers.length);
//     console.log(this.answers);
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll result are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [4, 2, 5] }, 'string');
// poll.displayResults.call({ answers: [4, 2, 5] });

// const runOnce = function () {
//   let mahdi = 0;
//   return function () {
//     mahdi++;
//     console.log(`${mahdi} :mahdi`);
//   };
// };
// const booker = runOnce();
// console.log(booker);
// booker();
// booker();
// booker();

// let f = 2;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// console.log(typeof f);
// g();
// f();
// console.log(f);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`there are 3 groups, each with ${perGroup} passengers`);
//   }, 1000 * wait);
//   console.log(`will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);
// const perGroup = 1000;
// console.log(perGroup);
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
