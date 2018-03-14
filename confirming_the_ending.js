function confirmEnding(str, target) {
  let lengthOfTarget = target.length;
  let cutString = str.substr(-lengthOfTarget);
  return cutString === target;
}
