let marksWeight = 78,
  marksHeight = 1.69;
let jonhnsWeight = 92,
  johnsHeight = 1.95;

marksWeight = 95;
marksHeight = 1.88;
jonhnsWeight = 85;
johnsHeight = 1.76;
let BMImark = marksWeight / marksHeight ** 2;
let BMIjohn = jonhnsWeight / johnsHeight ** 2;
let BOTHavarage = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, BOTHavarage);
