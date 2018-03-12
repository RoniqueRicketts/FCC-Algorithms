function titleCase(str) {
  let splitString = str.split(" ");
  let newStr = [];
  splitString.forEach((word)=>{
    let firstLetter = word.slice(0, 1).toUpperCase();
    let ending = word.slice(1).toLowerCase();
    newStr.push(firstLetter + ending);
  });
  return newStr.join(" ");
}
titleCase("I'm a little tea pot");
