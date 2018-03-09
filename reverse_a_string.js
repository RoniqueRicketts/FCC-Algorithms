// Challenged by Quincy Jones to reverse a string with a for loop for a YaadCode Interview in  February 25, 2018.
function reverseString(str) {
  var splitStr = str.split("");
  var arrayOfSplitItems = [];
  for (var i = splitStr.length ; i >= 0; i--){
    arrayOfSplitItems.push(splitStr[i]);
  }
  return arrayOfSplitItems.join("");
 
}
reverseString("hello");

// Solution 2

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
