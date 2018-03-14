function repeatStringNumTimes(str, num) {
 let string = "";
  if(num <= 0){
    return "";
  }
  else{
    for(let index = 0; index < num; index++ ){
      string += str;
    }
  }
  return string;
}
repeatStringNumTimes("abc", 3);
