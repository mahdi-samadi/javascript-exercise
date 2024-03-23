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
