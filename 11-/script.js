'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [-200, -200, -340, -300, -20, -50, -400, -460, 10],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  // console.log(movements);
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  console.log(interest);
  labelSumInterest.textContent = `${interest} €`;
};

const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
creatUserName(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovement(acc.movements);
  // display balanec
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// EVENT Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('login');
    // display UI and message
    labelWelcome.textContent = `Welcom back, ${currentAccount.owner.split(' ')[0]}`;
    inputLoginPin.blur();
    containerApp.style.opacity = 100;

    // display movements
    displayMovement(currentAccount.movements)
  // clear fields:
  inputLoginUsername.value = inputLoginPin.value = '';

  updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {

    // Delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
    // doning the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value)

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value= '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // delete account
    const me = accounts.splice(index, 1)
    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////
/////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value} and ${map}`);
// });

// const mecurrencies = new Set([
//   'mahdi',
//   'mahdi',
//   'enlanz',
//   'azam',
//   'siyamak',
//   'siyamak',
//   1,
// ]);
// mecurrencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value} and ${map}`);
// });
/////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(3));
// console.log(arr.at(-1));
// console.log(arr[1]);
// const arr2 = arr.reverse();
// console.log(arr);
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(letters.join('+'));
// console.log(letters);

// CODING CHALLENGED
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const max = movements.reduce((acc, mov) => {if } )
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals)

// const balance = movements.reduce(function (acc, mov, i, arr) {
//   // console.log(`${acc} ${cur}`);
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(balance);
// console.log(balance);
// const eurToUsd = 1.1;
// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsDescriptions = movements.map(
//   (mov, i , arr) =>
//   `movement ${ i + 1 } : you ${(mov > 0) ? 'deposit' : 'withdrawal'} ${Math.abs(mov)}`);
// console.log(movementsDescriptions);

// const user = 'MAHDI SAMADI';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0];
//   })
//   .join('');
// console.log(username);

// const calcAverageHumanAge = function (ages) {
//   const humaneAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humaneAges);
//   const adult = humaneAges.filter(age => age >= 18);
//   console.log(adult);
//   const average = adult.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(average);
//   return average;
// };
// const age1 = calcAverageHumanAge([20, 2, -400, 3000, -650, -130, 70, 1300]);
// console.log(age1);



// const z = Array.from({length: 7} , (cur,i) => i+5);
// console.log(z);


// var numbers = [200, 450, -400, 3000, -650, -130, 70, 1300]
// var sum = numbers.reduce((acc, cur, index) => (cur >= 1000 ? ++acc : acc),10);
  // console.log('Accumulator is:' + acc)
  // console.log('currentValue is:' + cur)
  // console.log('index is:' + index)
  // console.log(sum);

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
//   ];

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** .75 * 28)));
// console.log(dogs)

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);


// const ownerTooMuch = dogs.filter(dog => (dog.curFood > dog.recFood)).flatMap(dog => dog.owners)
// console.log(ownerTooMuch);

// const dogSorted = dogs.slice().sort((a , b) => a.recFood - b.recFood);
// console.log(dogSorted);
