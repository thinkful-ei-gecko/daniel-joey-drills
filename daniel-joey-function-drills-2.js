'use strict';

function jediName(firstName, lastName){
  return lastName.substring(0,3) + firstName.substring(0,2);
}
jediName('joseph', 'romo');

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

beyond(2)

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

decode(codedWords);


function daysInMonth(month, leapYear = false){
  let result;
  switch(month) {
  case 'january':
    result = 'January has 31 days';
    break;

  case 'march':
    result =  `${month} has 31 days`;
    break;

  case 'april':
    result = `${month} has 30 days`;
    break;

  case 'may':
    result =  `${month} has 31 days`;
    break;

  case 'june':
    result = `${month} has 30 days`;
    break;

  case 'july':
    result = `${month} has 31 days`;
    break;
  
  case 'august':
    result = `${month} has 31 days`;
    break;

  case 'september':
    result = `${month} has 30 days`;
    break;

  case 'october':
    result = `${month} has 31 days`;
    break;

  case 'november':
    result = `${month} has 30 days`;
    break;

  case 'december':
    result = `${month} has 31 days`;
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

rockPaperScissors(1);

