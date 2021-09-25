function onlyVowelsOf(word) {
  return word.split('').filter(vowel => ['a', 'e', 'i', 'o', 'u'].includes(vowel)).join('');
}

console.log(onlyVowelsOf("hello"));