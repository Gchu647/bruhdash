var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    for (let i = 0; i < 1 ; i ++) {
      return arr[i];
    }   
  },

  // returns the last element of an array
  last: function (arr) {
    let i = 0;
    let element;
    
    while (arr[i]) {
      element = arr[i];
      i ++;
    }

    return element;
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
    let i = 0;
    let index = false;
    
    while (arr[i]) {
      if (arr[i] === val) {
        index = i;
        break;
      }

      i ++;
    }
    
    if(!index) {
        index = -1;
    }
  
    return index;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, val) {
    let i = 0;
    let index = false;
    
    while (arr[i]) {
      if (arr[i] === val) {
        index = i;
      }

      i ++;
    }
    
    if(!index && index !== 0) {
        index = -1;
    }
  
    return index;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    let i = 0;
    let newArr = [];

    while (arr[i+1]) {
      newArr[i] = arr[i];
      i++;
    }

    return newArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    let length = 0; // to caculate arr.length
    let indexNew = 0;
    let newArr = [];

    while (arr[length] !== undefined) {
      length++;
    }
  
    for ( let index  = 0; index < length; index ++) {
      if (arr[index] !== null && arr[index] !== false && arr[index] !== 0 && arr[index] !== '' && !isNaN(arr[index])) {
        newArr[indexNew] = arr[index];
        indexNew ++;
      }
    }

    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, initVal, endVal) {
    let indexNew = 0;
    let newArr = [];

    for (let i = initVal; i < endVal; i++) {
      newArr[indexNew] = arr[i];
      indexNew++;
    }
    
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if (n === 0) {
      return arr;
    }

    let index = n || 1;
    let indexNew = 0;
    let newArr = [];

    while (arr[index]) {
      newArr[indexNew] = arr[index];
      index++;
      indexNew++;
    }

    return newArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === 0) {
      return arr;
    }
  
    let index = 0
    let indexNew = 0;
    let newArr = [];
    let dropAmount = n || 1;

    while (arr[index + dropAmount]) {
      newArr[indexNew] = arr[index];
      index++;
      indexNew++;
    }

    return newArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined) {
      return [arr[0]];
    }
    
    let newArr = [];

    for (let i = 0; i < n; i++) {
      if (arr[i]) { // just in case n is greater then arr.length
        newArr[i] = arr[i];
      }
    }

    return newArr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    let index = 0;
    let maxLength = 0;
    let indexNew = 0;
    let newArr = [];

    while (arr[index]) { // checking for max length
      maxLength = index + 1;
      index ++;
    }

    if (n === undefined) {
      return [arr[maxLength - 1]]; // return the last arr if n is undefined
    } else if (n === 0) {
      return []; // return empty arr if n is 0
    }

    for (let i = n-1; i < maxLength; i++) {
      newArr[indexNew] = arr[i];
      indexNew++;
    }

    return newArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, index, endIndex) {
    index = index || 0;

    while (arr[index]) { 
      if (endIndex && index === endIndex) { // endIndex is not undefined
        break;
      } else {
        arr[index] = val;
        index ++;
      }
    }

    return arr;
  },

  // removes all given values from an array
  pull: function (arr) { //2nd, 3rd params so on
    let newArr = [];
    let valMatch = false;
    
    for (let i = 0; i < arr.length; i++) { // loop arr
       for (let j = 1; j < arguments.length; j++) { // true or false test
         if (arr[i] === arguments[j]){
           valMatch = true;
         }
       }
      
      if (!valMatch) { // if no matching val, add it to newArr
        newArr.push(arr[i]);
      }
      valMatch = false;
    }
    
    return newArr;
  },

  // removes elements of an array corresponding to the given indexes
  pullAt: function (arr, indexes) {
    let newArr = [];
  
    for (let i = 0; i < indexes.length; i ++) { // Use each index at least once
      let index = indexes[i];
      newArr.push(arr[index]);
    }
    
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function(arr) {
    let newArr = [];
    let match = false;
    
    for (let i = 0; i < arr.length; i++) { //Looping through all arr first
      for (let j = 0; j < arguments.length; j++) { // Comparing with arguments
        if (arr[i] === arguments[j]) {
          match = true;
        }
      }
      
      if (!match) {
        newArr.push(arr[i]);
      }
      
      match = false;
    }
    
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr, excludeArr) {
    let newArr = [];
    let match = false;
    
    for (let i = 0; i < arr.length; i++) { //Looping through all arr first
      for (let j = 0; j < excludeArr.length; j++) { // Comparing with arguments
        if (arr[i] === excludeArr[j]) {
          match = true;
        }
      }
      
      if (!match) {
        newArr.push(arr[i]);
      }
      
      match = false;
    }

    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {
    let newArr = [];
   
    // Make arrays inside of newArr
    for (let i = 0; i < arguments[0].length; i++) {
      newArr.push([]);
    }
    
    // Push values in to newArr elements
    for (let j = 0; j < arguments.length; j++) {
      for (let k = 0; k < arguments[0].length; k++) {
        newArr[k].push(arguments[j][k]);
      }
    }
    
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    let newArr = [];
  
    //Create arrays inside newArr
    for (let i = 0; i < arr[0].length; i++) {
      newArr.push([]);
    }
    
    // Go through each index of each array
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[0].length; k++) {
        newArr[k].push(arr[j][k]);  
      }
    }
    
    return newArr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
