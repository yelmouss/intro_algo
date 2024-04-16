function ReadSentence(phrase) {
  let LongueurePhrase = 0;
  let VowelsCount = 0;
  let WordCount = 0;
  let Vowels = ["a", "o", "u", "i", "e"];

//je verifie si de dernier caractère est un point avant de poursuivre mon traitement 
  if (phrase[phrase.length -1] !== ".") {
    return "Veuillez finir la phrase avec un point";
  }

  for (char in phrase) {
    if (phrase[char] === " ") {
      WordCount++;
    }
    for (mavoyelle in Vowels) {
      if (phrase[char] === Vowels[mavoyelle]) {
        VowelsCount++;
      }
    }
    LongueurePhrase++;
  }

  return `La phrase contient ${LongueurePhrase} caractères, ${VowelsCount} voyelles et ${WordCount} mots`;
}

const maphrase = "Bonjour, je suis une phrase .";

console.log(ReadSentence(maphrase))