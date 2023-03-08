const num = prompt("Please enter a number");

if (num > 0) {
  console.log(`${num} is a postive number`);
} else if (num < 0) {
  console.log(`${num} is a negative number`);
} else {
  console.log(`${num} is equal to zero`);
}

const num1 = +prompt("Number1:");
const num2 = +prompt("Number2:");
const num3 = +prompt("Number3:");
//1.yöntem
if (num1 > num2 && num1 > num2) {
  console.log(`${num1} is biggest`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is biggest`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`${num3} is biggest`);
}

//2.yöntem
let biggest = num1;
if (num2 >= biggest) {
  biggest = num2;
}

if (num3 >= biggest) {
  biggest = num3;
}
console.log(`${biggest} is the biggest number`);

//3.yöntem MATh.max()
console.log(`${Math.max(num1, num2, num3)} is the biggest`);

const year = 11;
const kidsCount = 3;
const graduate = true;
const langCount = 3;

const increase =
  year >= 10 && kidsCount >= 2 && graduate == true && langCount >= 2;

if (increase === true) {
  console.log("He deserved an increased salary");
}
// if (increase) {
//   console.log("He deserved an increased salary");
// }

const s1 = prompt("1.sayiyi girniz");
const islem = prompt("Islemi giriniz +,-,*,/");
const s2 = prompt("2.sayiyi girniz");

let sonuc = 0;

switch (islem) {
  case "+":
    sonuc = s1 + s2;
    break;
  case "-":
    sonuc = s1 - s2;
    break;
  case "*":
    sonuc = s1 * s2;
    break;
  case "/":
    sonuc = s1 / s2;
    break;

  default:
    alert("Yanlis islem girisi");
    break;
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

//**************** TERNARY *******************

//? ORNEK5: Kaldi-Gecti

const grade = +prompt("Enter your grade");
let result = grade >= 50 ? "Successfull" : "Failed";
console.log(`${result} with ${grade}`);

const gender = "Male";
const age = 20;
healthy = true;
const status = "teacher";

age >= 18 && gender === "Male" && healthy === true && status !== "student"
  ? alert("Military service is required")
  : alert("Militar service is not required");
