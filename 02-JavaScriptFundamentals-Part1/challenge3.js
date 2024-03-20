const scoreDolphins = (96 + 158 + 89) / 3;
const scoreKoalas = (96 + 158 + 89) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphin barandas");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas barandas");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("hardotashon baranadan");
} else {
  console.log("hishki barande nis");
}