const data1 = [17, 21, 23];
const data2 = [-9, 4, 5, -2];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} 0c in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data1);
printForecast(data2);
