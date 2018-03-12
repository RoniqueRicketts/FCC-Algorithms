function palindrome(str) {
return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
palindrome("eye");

// I learnt how to do palindrome
function palindrome(str) {
  let regexp = /[A-Za-z0-9]/g;
  let matchedStr = str.match(regexp);
  let string = matchedStr.join('');
  return string.toLowerCase() === matchedStr.reverse().join('').toLowerCase();
palindrome("eye");
