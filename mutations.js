//Needs refactoring
function mutation(arr) {
  
  let secondElement = arr[1].toLowerCase().split("");
  let secondIndex = [];
   secondElement.forEach(function(index){
   secondIndex.push(arr[0].toLowerCase().indexOf(index));
  });
  if(secondIndex.includes(-1)){
    return false;
  }
  else{
    return true;
  }
}
mutation(["hello", "hey"]);
