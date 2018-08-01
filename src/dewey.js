// 800.9008
'use strict';

function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;
  value = value === undefined ? 0 : Number(value);
  console.log(array,value,start,end);
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];   
  if (Number(item) === value) {
    return 'found the book';
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

let resultant = {
  '005': [133,2762,44684],
  '220': [52081],
  '231': [7652],
  '623': [82509051],
  '796': [8092],
};

function findCode(code){
  const firstChars = code.substring(0,3);  
  Object.keys(resultant).filter(key => {
    if(key === firstChars){      
      let arr = resultant[key].sort((a,b) => a-b);
      let val = code.substring(4,code.length);      
      return binarySearch(arr,val,0,val.length - 1);
    }
  });  
}

console.log(findCode('005.133'));