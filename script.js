//Javascript function

const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};
//const age = calculateAge(2001);
//console.log(age);
const jobleft = function (birthYear) {
  const age = calculateAge(birthYear);
  return 65 - age;
};
const jobleftA = jobleft(2001);
console.log(jobleftA);

//Javascipt event
function displayText() {
  console.log("Display Text !");
}

function alertText() {
  alert("This is alert !");
}

function hoverText() {
  alert("This is hover !");
}

//Javascript string

const firstName = "Jatin";

const lastName = "Tripura";
console.log(firstName);
console.log(lastName);
//Example

const text='I love "Bangladesh"';
console.log(text);

//Example-2

const text_1="I love 'Bangladesh'";
console.log(text_1);

//Example-3

const text_2="I love \"Bangladesh\"";
console.log(text_2);

//Example-4

const text_3="I love \\ Bangladesh !";
console.log(text_3);

//Example-5

const text_4="I love \\\\ Bangladesh !";
console.log(text_4);

//String method--length

const a="Jatin Tripura";
console.log(a);
console.log(a.length);

//string --slice

const fruits ="Mango, Apple, Banana";
console.log(fruits);

const fruits_1=fruits.slice(0,5);
console.log(fruits_1);

const fruits_2=fruits.slice(7,12);
console.log(fruits_2);

const fruits_3=fruits.slice(14,21);
console.log(fruits_3);

// Nagetive slice

const fruits_4=fruits.slice(-6);
console.log(fruits_4);

const fruits_5=fruits.slice(-13,-8);
console.log(fruits_5);

const fruits_6=fruits.slice(-21,-15)
console.log(fruits_6);

//Substring

const book="Bangla, English, Math";
const book_1=book.substring(0,6);
console.log(book_1);

//string replace

const x ="I love Math";
console.log(x);
const X_1 = x.replace("Math","English");
console.log(X_1);

//String uppercase

const t="Bangladesh";
console.log(t);
console.log(t.toUpperCase());
console.log(t.toLowerCase());
console.log(t.toLocaleLowerCase());

//String trim

const s ="      Love math and physics   ";
console.log(s);
console.log(s.trim());

//String search

const detals="My name is Jatin Tripura";
console.log(detals.indexOf("Jatin"));
console.log(detals.indexOf("tin"));
console.log(detals.indexOf("Lioni"));

const detals_1="My name is Jatin Tripura.Jatin is my nickname";
console.log(detals_1.indexOf("Jatin"));
console.log(detals_1.lastIndexOf("Jatin"));
console.log(detals_1.search("Jatin"));