function isPalindrome(word) {
  return word == word.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("palindrome"));