function findLongestWord(string) {
  let stringSplit = string.split(" ");
  let longestWordLength = 0;
  stringSplit.forEach((word)=>{
    if(word.length > longestWordLength){
      longestWordLength = word.length;
    }
  });
  return longestWordLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
