function bouncer(arr) {
  let filtered = arr.filter((item)=>{
    return Boolean(item);
  });
  return filtered;
}

bouncer([7, "ate", "", false, 9]);
