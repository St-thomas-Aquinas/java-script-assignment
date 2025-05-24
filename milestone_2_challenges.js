//This function is used to create a line that will separate the results , helps to enhance apearance and readability.
function separator() {
  console.log(
    "______________________________________________________________________"
  );
}
separator();
//end


//chalenge 1: sum of positives
function sumOfpositives(array) {
  console.log("Iam the function sum of positive numbers");
  let len = array.length;
  let sum = 0;
  for (let i = 0; i <= len; i++) {
    if (array[i] > 0) {
      sum = array[i] + sum;
    }
  }
  //console.log(sum);
  return sum;
}
console.log(sumOfpositives([1, -2, -3, 4, 5]));
separator();
//end


//challenge 2: find maximum value
function findMax(array) {
  console.log("Iam the function find maximum value");
  //console.log("Iam the function sum of positive numbers")
  let len = array.length;
  let sum = 0;

  for (let i = 0; i <= len; i++) {
    if (array[i] > sum) {
      sum = array[i];
    }
  }
  return sum;
}
console.log(findMax([3, 7, 2, 9, 5]));
separator();
//end


//Challenge 3:Election Winner
function findwinner() {
  console.log("Iam the function excuting challenge 3,Election Winner");
  const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
  ];
  let len = candidates.length;
  let winner = 0;
  let index = -1;

  for (let i = 0; i < len; i++) {
    let ret = candidates[i].votes;

    if (ret > winner) {
      winner = ret;
      index = i;
    }
  }
  return candidates[index];
}

console.log(findwinner());
separator();
//end


//challenge 4: longest word.
function findlongest() {
  console.log("Iam the function excuting challenge 4,longest word");
  const fruits = ["apple", "banana", "pear", "grapefruit"];
  let len = fruits.length;
  let longestword = " ";
  let index = -1;

  for (let i = 0; i < len; i++) {
    let ret = fruits[i];

    if (ret.length > longestword.length) {
      longestword = ret;
      index = i;
    }
  }
  return fruits[index];
}

console.log(findlongest());
separator();
//end

//Challenge 5: counting properties
function countProperties() {
  console.log("Iam the function excuting challenge 5,counting properties/keys");
  const countProperties = { name: "Alice", age: 25, city: "Paris" };
  const numberofkeys = Object.keys(countProperties);
  const count = numberofkeys.length;

  console.log("Number of keys/properties is ", count);
}
countProperties();
separator();
//end


//challenge 6: filterByLength
function filterByLength() {
  console.log("Iam the function excuting challenge 6,filter by lenght");
  const animals = ["cat", "giraffe", "hippo", "dog", "elephant"];

  let len = animals.length;

  let minlen = 5;
  let array = [];

  for (let i = 0; i < len; i++) {
    let ret = animals[i];

    if (ret.length >= minlen) {
      array.push(ret);
    }
  }
  return array;
}
console.log(filterByLength());
separator();
//end


//challenge 7: sum of even numbers
function sumEvennumbers() {
  console.log("Iam the function excuting challenge 7,sum of even numbers");
  const array = [1, 2, 3, 4, 5, 6];

  let len = array.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];
    let num = ret % 2;

    if (num == 0) {
      sum = ret + sum;
    }
  }
  return sum;
}

console.log(sumEvennumbers());
separator();
//end



//change 8 :differenceEvenOdd
function differenceEvenOdd() {
  console.log("Iam the function excuting challenge 8,diffrence between even and odd numbers");
  const array = [1, 2, 3, 4, 5, 6];

  let len = array.length;
  let sumofeven = 0;
  let sumofodd = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];
    let num = ret % 2;

    if (num == 0) {
      sumofeven = ret + sumofeven;
    } else {
      sumofodd += ret;
    }
  }
  return (diffrence = sumofeven - sumofodd);
}

console.log(differenceEvenOdd());
separator();
//end


//Challenge 9:count truth vales
function countTruthy() {
  console.log("Iam the function excuting challenge 9");
  const countTruthy = { a: 0, b: "hello", c: false, d: 42, e: null };
  let array = Object.values(countTruthy);
  let ret;
  let len = array.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    let bool = Boolean(array[i]);

    if (bool === true) {
      count++;
    }
  }
  return count;
}

console.log(countTruthy());
separator();
//end


//change 10 : avarange of numbers
function average() {
  console.log("Iam the function excuting challenge 10");
  const array = [2, 4, 6, 8];

  let len = array.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];
    sum = ret + sum;
  }
  return sum / len;
}
console.log(average());
separator();
//end


//challenge 11: linear search
function linearSearch() {
  console.log("Iam the function excuting challenge 11");
  const array = [1, 4, 6, 8, 0];

  let len = array.length;
  let item = 2;
  let index = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];
    if (item == ret) {
      i;
      index++;
      return "your item found at index", i;
    }
  }
  if (index == 0) {
    return -1;
  }
}
console.log(linearSearch());
separator();
//end


//challenges 12: reverse linear search
function reverlinearSearch() {
  console.log("Iam the function excuting challenge 12,rever linear search");
  const array = [2, 1, 4, 6, 8, 0, 2];

  let len = array.length;
  let item = 2;
  let index = 0;
  let lastindex = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];
    if (item == ret) {
      index++;
      lastindex = i;
      if (i == len) {
        console.log("your item found at last index", lastindex);
      }
    }
  }
  if (index == 0) {
    return "-1";
  }
}
console.log(reverlinearSearch());
separator();
//end


//challenge 13: linear search all items
function linearSearchAll() {
  console.log("Iam the function excuting challenge 13,linear search all");
  const array = [2, 1, 4, 6, 8, 0, 2];

  let len = array.length;
  let item = 2;
  let index = 0;
  let lastindex = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];
    if (item == ret) {
      index++;
      lastindex = i;
      console.log("your item found at last index", lastindex);
    }
  }
  if (index == 0) {
    return "-1";
  }
}
console.log(linearSearchAll());
separator();
//end 


//challenge 14:count occurrences
function countOccurrences() {
  console.log("Iam the function excuting challenge 14,counting occurrence of items");
  const array = ["apple", "banana", "apple", "orange", "banana", "apple"];

  let count = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  console.log(count);
}
countOccurrences();
separator();
//end


//challenge 15:remove duplicates
function removeDuplicates() {
  console.log("Iam the function excuting challenge 15, removing duplicates");
  const array = [1, 2, 3, 2, 4, 1, 5];

  let len = array.length;
  let newarray = [];
  let index = 0;
  let lastindex = 0;

  for (let i = 0; i < len; i++) {
    let ret = array[i];

    if (newarray.includes(array[i]) == false) {
      newarray.push(array[i]);
    }
  }
  console.log(
    "I have removed all the duplicate this is the new array",
    newarray
  );
}
removeDuplicates();
separator();
//end

//challenge 16; most frequent 
function mostFrequent() {
  console.log("Iam the function excuting challenge 14,Most frequent");
  const array = ["apple", "banana", "apple", "orange", "banana", "apple"];

  let count = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let larges = 0;
  let largestindex = 0;
  let len = array.length;
  let ret = Object.values(count);
  for (let i = 0; i < len; i++) {
    if (ret[i] > larges) {
      larges = ret[i];
      largestindex = i;
    }
  }
  console.log(
    "The most frequent of the values of the array provide is",
    array[largestindex]
  );
}
mostFrequent();
separator();
//end
