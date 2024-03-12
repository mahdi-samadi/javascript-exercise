let marksWeight = 78,
  marksHeight = 1.69;
let jonhnsWeight = 92,
  johnsHeight = 1.95;

let BMImark = marksWeight / marksHeight ** 2;
let BMIjohn = jonhnsWeight / johnsHeight ** 2;
console.log(BMImark, BMIjohn);
// let BOTHavarage = BMImark > BMIjohn;
if (BMImark > BMIjohn) {
  console.log(`Mark's BMI (${BMImark}) is higher than John's! (${BMIjohn})`);
} else {
  console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`);
}
