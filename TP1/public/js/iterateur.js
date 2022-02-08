/*PEYRONON ARNO 2A GROUPE A3*/

//Iterate i et le log + log la couleur en fonction de la valeur de i 
function iterate() {
    for (let i = 0; i < 5; i++) {
        logMessage(i);

        if (i === 0) {
            logMessage(VERT);
        }
        if (i === i % 2) {
            logMessage(ROUGE);
        }
        if (i === i % 2) {
            logMessage(BLEU);
        }
    }
}