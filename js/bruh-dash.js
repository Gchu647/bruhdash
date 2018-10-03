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
    let index = 0;
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
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

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
