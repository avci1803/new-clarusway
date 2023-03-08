console.log("#######Data Types#####");

//Const ve let ECMA6 ile geldi. VAR eskiden kullanildi
const s1 = "Hello ";
const s2 = "Merhaba";
const s3 = 5;
console.log(s1 + s3);
console.log(s1 + s2); //String concatination

const n1 = "5";
const n2 = 2;
console.log(n1 + n2);

// =======================   LET  =====================

let dil = "javascript";
console.log(dil);

dil = "java";
console.log(dil);

dil = true;
console.log(typeof dil);

dil = 3.14;
console.log(typeof dil);

let cohort;
console.log(cohort); //undefined tanimsiz
cohort = 5;
console.log(typeof cohort);

//let cohort = "mehmet" ayni scope icinde ayni isimle ayni degisken tanimlanamaz.

let num1 = 5;
let num2 = 8;

let result = num1 + num2;
console.log(++result);

count = 55; //var olarak tanimladi.
console.log(count, typeof count);

//==================   VAR   ================
var x = 11;
console.log(x, typeof x);
//mümk+n oldugunca local variable kullan, global kullanma. program acilinca global tüm varibaler bellege yüklenir. kullanmasamda orda durur-bu da bellegi gererksiz sisirir.

{
  let a = 5;
  const b = 2;
  console.log(a + b);
}
//console.log(a + b); a ve b bu scope da tanimli degiil. Local scope da tanimli
{
  var c = 99;
  console.log(c);
}
console.log(c); // burda da calisir. Cünkü var ile tanimlanan bir degisken her zaman global olur. Her yerden erisilir. Bu yizden modern JS de var kullanmak cok mantikli degildir. Bellek kullanimi acsiindan uygun degildir.
