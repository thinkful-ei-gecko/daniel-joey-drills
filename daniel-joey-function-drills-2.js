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



