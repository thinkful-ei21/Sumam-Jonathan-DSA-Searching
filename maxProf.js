'use strict';
let arr = [128, 97, 121, 123, 98, 97, 105];
let maxProf ={
  first: arr[0],
  second: arr[0],
  diff: 0
};

arr.forEach(eleOne => {
  arr.forEach(eleTwo => {
    let difference = Math.abs(eleOne - eleTwo);
    if( difference > Number(maxProf.diff)){
      maxProf = {eleOne,eleTwo, difference};
    }
  });
});
console.log(maxProf);