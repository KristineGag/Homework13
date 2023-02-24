console.log("Hello, this is my info in js file");

const myName = 'Kristine';

let myHobby = 'Dancing';

let myHobby2 = 'watching K dramas'

const yearOfBirth = 1996;

let currentYear = 2023;

let iAmNotEmployed = false;

const thisWillBeMyNull = null;

let userEmail;

let myEmail = undefined;

console.log(typeof myName, typeof yearOfBirth, typeof iAmNotEmployed, typeof thisWillBeMyNull, typeof userEmail, typeof myEmail);

const myAge = currentYear - yearOfBirth;

console.log('My name is', myName, 'I am', myAge, 'years old and my hobbies are:', myHobby, 'and', myHobby2,);

const textSecond = 'My name is ' + myName + ' I am ' + myAge + ' years old and my hobbies are: ' + myHobby + ' and ' +  myHobby2;

console.log(textSecond);


const thirdText = `My name is ${myName} I am ${currentYear - yearOfBirth} years old and my hobbies are: ${myHobby} and ${myHobby2}`;

console.log(thirdText);
