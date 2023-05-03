console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const list = document.querySelector("li");
console.log(list);

console.log(list.parentElement); //? ul
console.log(list.parentNode); // ? ul
console.log(list.parentNode.parentNode.parentNode); //?main
console.log(
  list.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    .parentNode
); //?null

//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer
console.log(list.closest("section")); //? item-list
console.log(list.closest("body").querySelector("#header h1"));

//*2- Asagi Yonde traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item");
console.log(addItem.children);
addItem.children[0].style.color = "red";
addItem.children[1].style.backgroundColor = "yellow";
