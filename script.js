function sentenceToUpperCase(sentence) {
  let words = sentence.split(" ");

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
