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

/**************************************
 * Variable Mutation and Type Coercion
 **************************************/
age = 'Twenty Nine';
console.log(age);
