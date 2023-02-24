console.log("Hello, this is my firs info in js file");

const myName = 'Kristine';

let myHobby = 'Dancing';

let myHobby2 = 'watching K dramas'

const yearOfBirth = 1996;

let currentYear = 2023;

let iAmNotEmployed = false;

const thisWillBeMyNull = null;

let userEmail;

let myEmail = undefined;

console.log('type of myName is', typeof myName,'type of yearOfBirth is', typeof yearOfBirth,'type of iAmNotEmployed is', typeof iAmNotEmployed,'type of thisWillBeMyNull is', typeof thisWillBeMyNull,'type of userEmail is', typeof userEmail,'type of myEmail is also', typeof myEmail);

const myAge = currentYear - yearOfBirth;

console.log('let us try if modulo works')
let modulo = currentYear % yearOfBirth;
console.log('you get reminder of', modulo, 'when you devide', currentYear, 'by',  yearOfBirth)

console.log('My name is', myName, 'I am', myAge, 'years old and my hobbies are:', myHobby, 'and', myHobby2);

const textSecond = 'My name is ' + myName + ' I am ' + myAge + ' years old and my hobbies are: ' + myHobby + ' and ' +  myHobby2;

console.log(textSecond);


const thirdText = `My name is ${myName} I am ${currentYear - yearOfBirth} years old and my hobbies are: ${myHobby} and ${myHobby2}`;

console.log(thirdText);
