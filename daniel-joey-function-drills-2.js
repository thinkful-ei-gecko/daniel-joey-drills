'use strict';
// JediName returns the first three characters in lastName and joins
// it with the first two characters in firstName

function jediName(firstName, lastName){
  return lastName.substring(0,3) + firstName.substring(0,2);
}
console.log(jediName('joseph', 'romo'));


// Beyond takes an argument (num) and returns a string
//based on it's value

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }
  if (num > 0 && num < Infinity) {
    console.log('To infinity');
  }
  if (num < 0 && num > -Infinity) {
    console.log('To negative infinity');
  }
  if (num === 0){
    console.log('Staying home');
  }
}

console.log(beyond(2));



//decode takes a sentence, splits the words into an array,
//and then pulls a character from each word based on the first 
//character in the word and pushes it to an array
//It then joins this array of characters to form the secret message.

let codedWords = 'craft block argon meter bells brown croon droop';

function decode(string){
  let array1 = string.split(' ');
  let results = [];
  for(let i=0; i < array1.length; i++){
    if(array1[i][0]=== 'a'){
      results.push(array1[i][1]);
    }
    else if(array1[i][0]=== 'b'){
      results.push(array1[i][2]);
    }
    else if(array1[i][0] === 'c'){
      results.push(array1[i][3]);
    }
    else if(array1[i][0] === 'd'){
      results.push(array1[i][4]);
    }
    else{ results.push(' ');}

  }
  return results.join('');
}

console.log(decode(codedWords));

//daysInMonth takes two arguments (month and leapYear(false by default))
//and returns a string that tells the number of days in the month.

function daysInMonth(month, leapYear = false){
  let result;
  switch(month) {
  case 'january':
  case 'march':
  case 'may' :
  case 'july':
  case 'august' :
  case 'october':
  case 'december':
    result = `${month} has 31 days.`;
    break;

  case 'april':
  case 'june' :
  case 'september':
  case 'november':
    result = `${month} has 30 days`;
    break;

  case 'february':
    result = `${month} has 28 days`;
    if (leapYear === true) {
      result = `${month} has 29 days`;
    }
    break;

  default: 
    throw new Error('must provide valid month');
  }
  return result;
}

console.log(daysInMonth('september', true));

//rockPaperScissors takes one argument(num) between one
//and three, and compares it to a randomly chosen value 
//between one and three (rock, paper, or scissors). If win
//conditions are met, the user is congratulated; else, they lose/draw.
function rockPaperScissors(num) {
  // 1 = rock, 2 = paper, 3 = scissors
  if (num > 3 || num < 1) {
    throw new Error ('choose a valid number');
  }
  let choice = Math.floor(Math.random()*3) + 1;
  if (choice === num) {
    return 'draw';
  }
  if (choice === 1 && num === 2) {
    return 'You win';
  }
  if (choice === 2 && num === 3) {
    return 'You win';
  } 
  if (choice === 3 && num === 1) {
    return 'You win';
  }
  return 'You lose';
}

console.log(rockPaperScissors(1));

