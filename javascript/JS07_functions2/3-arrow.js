// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

//* ORNEK: Silindir Hacmi
//******************************************/

//? hacim = Pi x r x r x h

// const r = +prompt("r:")
// const h = +prompt("h:")

// const volume = (r, h = 1) => Math.PI * r * r * h

// console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`)

// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toPrecision(4)}`)

// //? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak
// //? gosterimesi icin kullanilabilir. Aldigi parametre ise kesirli
// //? kisimlarinin basamak sayini gosterir.
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toExponential(4)}`)

// //! Alternatif olarak:
// const volumeLong = (r, h) => {
//   const result = Math.PI * r * r * h
//   console.log(result)
//   return result
// }

// console.log(`${r}, ${h} = Volume: ${volumeLong(r, h).toExponential(4)}`)

// //* ORNEK: Yas hesapla
// //************************************************/

let dogumYili = prompt("What is your birthday: ");
const calculateAge = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calculateAge(dogumYili));
