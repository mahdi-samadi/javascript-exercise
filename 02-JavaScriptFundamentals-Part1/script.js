// let js = "amazing";
// if (js === "amazing") alert("javascript is Fund!!");

// console.log(50 + 15 + 66 + 11 - 9);

// let myNames = "mahdi";
// console.log(myNames);
// console.log(typeof myNames);

// myNames = 13;
// console.log(myNames);
// console.log(typeof myNames);

// var myNumber = 4343;
// console.log(myNumber);

// mahdi = "samadi";  // behtare ke injuri bdone tarife var / let / const/ moteqayer nasazim
// console.log(mahdi);

// const now = 2025;
// const ageMahdi = now - 1995;
// const ageElnaz = now - 1994;
// console.log(ageElnaz * 2, ageMahdi / 3, 2 * 2.4);

// console.log(ageElnaz > ageMahdi);
// console.log(ageElnaz >= 40);

// const inFullAge = ageElnaz >= 45;
// console.log(inFullAge / 2, inFullAge);

// let x, y;
// x = y = 25 - 10;
// console.log(x, y);
// const averageAge = (ageMahdi - ageElnaz) / 2;
// console.log(averageAge);

//  TODO part 2 session 17
// const favorites = prompt(`what's your favorites number?`);
// console.log(favorites);
// console.log(typeof favorites);
// if (favorites == 7) {
//   console.log("das khush ajab shomarei");
// }else {
//   console.log("namana???")
// }

//season 3 episode 3
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//   return juice;
// }
// const appleJuice = fruitProcessor(2, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 5);
// console.log(appleOrangeJuice);

//season 3 episode 4
//function declaration :
// const age1 = calcAge1(1995);
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// function expression
// const age2 = calcAge2(1995);  // nemitonim to in model qabl az tabe ono seda bznim !!!!!
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// console.log(age1, age2);

// arrow function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = 2024 - birthYear;
//   const retirement = 39 - age;
//   return `${firstname} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1995, "mahdi"));

// const family = ["mahdi", "elnaz", "azam", "siyamak"];

// for (let i = 0; i <= 7; i++) {
//   console.log(family[i]);
// }

// const dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);

// const temperetures = [3, -2, -5, 'error', 2, 6, 165];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperetures);
// console.log(amplitude);

// const calcTempAmplitudeNEW = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNEW = calcTempAmplitudeNEW([1, 3, 99], [-1, 3, 66, 88 + 11]);
// console.log(amplitudeNEW);

// const a = 'mahdi ';
// first();
// function first() {
//   const b = 'hello ';
//   second();

//   function second() {
//     const c = 'me ';
//     third();
//   }
//   // console.log(b + a + c + d);
// }
// function third() {
//   const d = 'samadi ';
//   console.log('mame', b);
// }

'use strict';

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     let output = `${firsName} , you are ${age} , born in ${birthYear}`;

//     const mamal = `your are soo goood ${firsName}`;
//     if (birthYear > 1990) {
//       var millenia = true;
//       const firsName = 'elnaz';
//       const namana = `namanaaaa ${firsName}`;
//       const output = 'INEEEEE';
//       function add(a, b) {
//         return a + b;
//       }
//       console.log(output);
//       console.log(namana);
//       console.log(mamal);
//     }
//     console.log(output);
//     // console.log(millenia);
//     // console.log(add(3, 3));
//   }
//   printAge();
//   return age;
// }

// const firsName = 'mahdi';
// calcAge(1995);

// var x = 1;
// let xy = 2;
// const xz = 3;

// var firstName = 'mili';
// const mahid = {
//   firstName: 'mahdi',
//   year: 1995,
//   calcAge: () => {
//     console.log(this);
//     console.log(2025 - this.year);
//   },
// };
// console.log(mahid.firstName);

// const mahdi = (a, b) => {
//   console.log(arguments);
//   console.log(a + b);
// };

// mahdi(2, 5);
// mahdi(2, 4, 11, 13);

// const arr = [2, 3, 4, 5];
// const [x, y, z] = arr;
// console.log([x, y, z]);

// let tepm = ['mahdi', 'elnaz'];
// let [main, second] = tepm;
// console.log(main, second);
// let [samadi, alinezhad] = [main, second];

// console.log(samadi, alinezhad);

// [samadi, alinezhad] = [second, main];
// console.log(samadi, alinezhad);

// 'use strict';

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// // Data needed for a later exercise

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`${weekdays[5]}`]: {
//     open: 0, // Open 24 hours
//     close: 24 / 3,
//   },
// };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:20', address }) {
//     console.log(
//       `order recived : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to ${address}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   // console.log(`on ${day}, we open at ${open}`);
// }
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderrisstoo?.(0, 1) ?? 'method does not exist');

// const entries = Object.entries(openingHours);
// console.log(entries);
// console.log(openingHours);

// console.log(restaurant.openingHours);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const a = 100;
// const adj = { a: 22, b: 33, c: 44 };
// let b = 99;
// ({ a, b } = adj);
// console.log(a, b);

//Nested objects
// const { fri } = restaurant.openingHours;
// console.log(fri);

// const {
//   fri: { open: m, close: e },
// } = restaurant.openingHours;
// console.log(e, m);

// const { menu = [], starterMenu = [], openingHours = [] } = restaurant;
// console.log(menu, starterMenu, openingHours);

// const newMenu = [...restaurant.mainMenu];
// console.log(newMenu);

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const add = function (...mahdi) {
//   console.log(mahdi);
//   let sum = 0;
//   for (let i = 0; i < mahdi.length; i++) sum += mahdi[i];
//   console.log(sum);
// };

// add(7, 5, 2);
// // add([3, 5]);
// const x = [2, 543];
// add(...x);

// console.log(undefined || '' || null || 0);

// console.log('mahdi' && 9);

// restaurant.azam = null;
// const guest = restaurant.azam ?? 'madhi';
// console.log(guest);
// const family = ['mahdi', 'azam', 'siyamak'];
// const myFamily = new Set(family).size;
// // myFamily.add('elnaz');
// console.log(myFamily);
// console.log(new Set('azam').size);

// session 9 part 17
const rest = new Map();
rest.set('name', 'Mahdi');
rest.set('name', 'Mahdis');
rest.set(1, 'samadi', 'Iranian');
rest.set('categories', ['Italian', 'Pizzeria', 'vegeterian', 'Organic']);
rest.set('open', 11);
rest.set('close', 23);
rest.set(true, 'we are open :D');
rest.set(false, 'we are close :(');

console.log(rest.size);

const task = {
  task: 'code',
  code: 'taskam',
  100: 'to',
  true: 'mahdi',
  '': 'samadi',
};
console.log(task);
// console.log([...rest]); //SAME  // console.log([...rest.entries()]);
// console.log([...rest.keys()]);
// console.log(rest.values());
// console.log(rest.get(true));

// const time = 114;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has(1));
// rest.delete(1);
// console.log(rest);
// // rest.clear();
// rest.set([1, 2], 'test');
// console.log(rest);

// session 9 part 18
// const question = new Map([
//   ['question', "what's the best language programing in the world???"],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'correct😍'],
//   [false, 'try again'],
// ]);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Aswer ${key} : ${value}`);
// }
// const answer = Number(prompt('your answer'));
// console.log(answer);

// if (answer == 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
// OR ANSWER JONAS
// console.log(question.get(question.get('correct') === answer));
