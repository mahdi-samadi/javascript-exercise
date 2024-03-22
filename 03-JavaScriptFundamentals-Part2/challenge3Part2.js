const Mahdi = {
  fullName: "Mahdi Samadi",
  mass: 80,
  height: 1.72,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const Elnaz = {
  fullName: "Elnaz Alinezhad",
  mass: 65,
  height: 1.68,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mahdi.calcBMI();
Elnaz.calcBMI();
console.log(Mahdi.bmi, Elnaz.bmi);
