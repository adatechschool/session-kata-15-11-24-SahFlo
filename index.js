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
    // honnêtement sans chatGPT je n'aurais pas trouvé cette syntaxe pour for of avec un objet
    for (let [key, value] of Object.entries(latinToMorse)) {
        if (key === letter) {
            //console.log(value) OK
            return value
        }
    }
    }

function encode(text){
    //dans cette fonction j'ai besoin d'un paramètre d'entrée
    let items = getLatinCharacterList (text)
    //console.log(getLatinCharacterList(text))
    //ok à ce stade ma fonction renvoie mon texte en caractères latins
    items.forEach(item => {
        console.log(translateLatinCharacter(item))
 })
}
    encode("GG")

 //je peux découper un mot ou une phrase en lettres
 //j'obtiens un tableau dont je veux parcourir les index pour créer la correspondance
 