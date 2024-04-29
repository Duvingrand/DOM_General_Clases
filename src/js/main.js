console.groupCollapsed("getElementBy");

let one = document.getElementById("botonPrimary");
let two = document.getElementsByClassName("btn");
let three = document.getElementsByName("three");
let four = document.getElementsByTagName("button");

console.log(one);
console.log(two[1]);
console.log(three[0]);
console.log(four[3]);

console.groupEnd();

console.group("querySelector");

let five = document.querySelector("#botonWarning")
let six = document.querySelector(".btn")
let seven = document.querySelector("[name='boton']")
let eight=document.querySelector("button")
let nine=document.querySelectorAll("button")

console.log(five)
console.log(six)
console.log(seven)
console.log(eight)
console.log(nine)