function isPalindrome(num) {
  let rev = 0;
  let temp = num;
  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  if (rev === num) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
