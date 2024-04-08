/**************************************
 * Variables and Data Types
 **************************************/

/*
var firstName = 'Amen';
console.log(firstName);

var lastName = 'Musingarimi';
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Sofware Developer';
console.log(job);
*/

/**************************************
 * Variable Mutation and Type Coercion
 **************************************/
/*
const firstName = 'Amen';
let age = 29;

console.log(firstName + ' ' + age);
const job = 'Sofware Developer';
const isMArried = false;

console.log(
  firstName +
    'is a ' +
    age +
    ' year old ' +
    job +
    '. Is he married? ' +
    ':' +
    isMArried
);
*/

/**************************************
 * Type Coercion
 **************************************/
/*
age = 'Twenty Nine';
console.log(age);
*/

/**************************************
 * Basic Operators
 **************************************/
const firstNameAmen = 'Amen';
const firstNameMark = 'Mark';
const ageAmen = 29;
const ageMark = 33;
const amenHeight = 1.65;
const currentYear = 2024;

// Math Operators
const yearAmen = currentYear - ageAmen;
const yearPalmer = currentYear - 33;

console.log(`${firstNameAmen} is ${ageAmen} and was born in ${yearAmen}.`);
console.log(currentYear * 2);
console.log(currentYear + 2);
console.log(currentYear / 2);

// Logical Operators
const amenOlder = ageAmen > ageMark;
console.log(amenOlder);

// Typeof Operators
console.log(typeof amenOlder);
console.log(typeof ageAmen);
console.log(typeof firstNameAmen);
console.log(typeof amenHeight);
