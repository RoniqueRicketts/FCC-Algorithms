function factorialize(num) {
  var arrayOfNumbers = [];
   if(num === 0){
    return 1;
  }
  else{
    
  for(var index = 1; index <= num; index++){
    arrayOfNumbers.push(index);
  }
  var result = arrayOfNumbers.reduce(function(firstNumber,secondNumber){
    return firstNumber * secondNumber;
  });
  return result;
  }
}
factorialize(5);
