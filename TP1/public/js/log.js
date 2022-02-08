/*PEYRONON ARNO 2A GROUPE A3*/

//Récupère la date courante
let currentdate = new Date();
let datetime = currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear() + " ||  " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ' ';

//Méthode pour log la date courante et le message donné
function logMessage(message) {

    console.log(datetime + message);
    console.log(message);
}