function largestOfFour(arr) {
  var newArray = [];
  arr.forEach((array)=>{
    let sortedArray = array.sort((firstNumber,secondNumber)=>{
      return secondNumber-firstNumber;
    });
    newArray.push(sortedArray[0]);
  });
  return newArray;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
