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
    console.log('To negative infinity')
  }
  if (num === 0){
    console.log('Staying home');
  }
}

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



