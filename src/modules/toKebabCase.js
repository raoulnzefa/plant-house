export const toKebabCase = (word) => {
   return word.split('').map((letter, index) => {
      if(letter.toUpperCase() === letter) {
        return index === 0 ? letter.toLowerCase() : '-' + letter.toLowerCase();
      }
      return letter;
    }).join('').replaceAll(' ', '');
}