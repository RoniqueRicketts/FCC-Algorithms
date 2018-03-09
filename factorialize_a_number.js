function factorialize(num) {
  var a = [];
   if(num === 0){
    return 1;
  }
  else{
    
  for(var i = 1; i <= num; i++){
    a.push(i);
  }
  var next = a.reduce(function(a,b){
    return a * b;
  });
  return next;
  }
}
factorialize(5);
