/* eslint-disable strict */

function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age){
  if (name === undefined || age === undefined) {
    throw new Error ('Arguments not Valid');
  }
  if (typeof(age) !== 'number'){
    throw new TypeError('Needs to be a number')
  }
  if(typeof(name) !== 'string'){
    throw new TypeError('needs to be letters')
  }
  if(age < 0){
    throw new Error('Age can not be negative');}

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. 
    I was born in ${yob}`;
  
}

try {
  const greeting1 = createGreeting('joey',23);
  console.log(greeting1);}
catch(error){
  console.error(error);}

