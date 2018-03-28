//Hosang code
function destroyer(arr) {
 var args = Array.from(arguments);
  
  var array = args[0];
  var elementsToKill = args.slice(1);
  
  function filt(ele){
    for (var i = 0; i<elementsToKill.length; i++){
       if (ele === elementsToKill[i]){
         return false;
       }
    }
    return true;
  }
  
  var newArr = array.filter(filt);
 
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// My old code

function destroyer(arr) {
 var args = Array.prototype.slice.call(arguments);
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < args.length; j++){
      if(arr[i] === args[j]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
