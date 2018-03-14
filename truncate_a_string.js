function truncateString(str, num) {
  if(num <= 3){
    return str.substr(0, num) + "...";
  }
  else if(num < str.length){
    return str.substr(0, num-3) +"...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
