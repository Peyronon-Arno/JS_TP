/*PEYRONON ARNO 2A GROUPE A3*/


//Récupère le h1 et le log
let h1 = document.querySelector('h1');
logMessage(h1);

//Récupère le h2 et le log
let h2 = document.querySelector('h2#titleNews');
logMessage(h2);

//Récupère tout les h3 et les log
let h3 = document.querySelectorAll('h3.title');
logMessage(h3);

let btn = document.getElementById('buttonClick');

//Récupère l'input et l'endroit ou sera écrit le texte
let texte = document.getElementById('titleToAdd');
let output = document.querySelector('article#news h3');

//Get la liste des h3
let h3Content = document.querySelectorAll('article h3').value;

//Fonction lorsque l'input va être cliqué
function addTexte() {

    try {
        //Check si la nouvelle news est déjà incluse dans h3Content
        // if (h3Content.includes(texte)) {
        //     throw new Error("Cette news existe deja");
        // }

        //Si champ rempli, set le texte, autrement erreur
        if (texte != null) {
            output.innerHTML = '';
            output.innerHTML = texte.value;
        } else {
            throw new Error('Le champ doit être rempli');
        }
    } catch (exception) {
        logMessage(exception.message);
    }

}