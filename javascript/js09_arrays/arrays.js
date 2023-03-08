// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const names = ["Mehmet", "Merve", "Zeynep", "Sümeyye", "Muhammed"];
console.log(names);
console.log(names.length);

const x = 5.424435;
console.log(x.toFixed(2));

console.log(typeof names);

const emptyArray = [];
emptyArray.push(3);
console.log(emptyArray);

const codeLanguages = new Array("c++", "JAVA", "JS", "Go");
console.log(codeLanguages);

const numbers = new Array(1, 2, 3, 4, 5);
const numbers1 = new Array(10);
console.log(numbers);
console.log(numbers1);

const numbers3 = Array.of(5);
console.log(numbers3);
console.log(names[1]);

const merve = names[1];
console.log(merve);
console.log(names[names.length - 1]);
console.log(names.at(-1));
names[2] = "Ali";
names[2] = names[2].toUpperCase;
console.log(names);

const ageArr = [22, 44, 55];
const people = ["John", "Deep", new Date().getFullYear() - 1992, true, ageArr];
console.log(people);
console.log(++people[4][1]);

console.log(codeLanguages.pop());

const cars = ["Mercedes", "BMW", "Ford", "VW"];
console.log("LENGTH:", cars.push("Toyota"));
console.log(cars);

cars.sahibi = "Merve";
console.log(cars);

console.log(cars.unshift("TOGG"));
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1, 0, "AUDI");
console.log(cars);

cars.splice(3, 1, "VOLVO");
console.log(cars);

cars.reverse();
console.log(cars);
console.log(cars.sort());
console.log(cars.toString());

const nums = [1, 2, 3, 55, 23, 18];
console.log(nums.sort());
nums.sort((a, b) => a - b);
console.log(nums);
