function sentenceToUpperCase(sentence) {
  let words = sentence.split(" ");

  if (words.length === 1) {
    return words[0].toUpperCase();
  }

  let transformedWords = words.map((word, index) => {
    if (index % 2 !== 0) {
      return word.toUpperCase();
    } else {
      return word;
    }
  });

  return transformedWords.join(" ");
}

console.log(sentenceToUpperCase("test"));
console.log(sentenceToUpperCase("Ala ma kota"));
console.log(sentenceToUpperCase("Raz dwa trzy cztery"));
