function chunkArrayInGroups(arr, size) {
 let finalArray = [];
  for(var index = 0; index < arr.length; index += size){
    finalArray.push( arr.slice(index, index + size));
  }
  return finalArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
