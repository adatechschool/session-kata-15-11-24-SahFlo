import { latinToMorse } from './alphabet_latin_morse.js';
//presque... j'avais du mal à écrire la ligne pour l'import, je me suis fait aider...
//console.log(latinToMorse)
//console.log(latinToMorse.A)

// prend en paramètre du texte et retourne un tableau
function getLatinCharacterList (text){
 return text.split("")
}
//console.log(getLatinCharacterList("Hello World")) ok
//J'ai trouvé split grâce à la doc mdn mais j'ai galéré à l'appliquer

function translateLatinCharacter (letter){
    // j'ai essayé la boucle for of mais apparemment mauvaise idée pour un objet.
    // honnêtement sans chatGPT je ne sais pas combien de temps j'aurais mis à trouver cette syntaxe pour for of
    for (let [key, value] of Object.entries(latinToMorse)) {
        if (key === letter) {
            //console.log(value) OK
            return value
        }
    }
    }

translateLatinCharacter("G")