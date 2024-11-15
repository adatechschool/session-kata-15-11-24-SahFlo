import { latinToMorse } from './alphabet_latin_morse.js';
//presque... j'avais du mal à écrire la ligne pour l'import, je me suis fait aider...
console.log(latinToMorse)

// prend en paramètre du texte et retourne un tableau
function getLatinCharacterList (text){
 return text.split("")
}

console.log(getLatinCharacterList("Hello World"))
//ok retourne bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]
//J'ai trouvé split grâce à la doc mdn mais j'ai galéré à l'appliquer


