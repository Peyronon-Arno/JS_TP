bouton1 = document.querySelector("#article-1 button");
bouton2 = document.querySelector("#article-2 button");
bouton3 = document.querySelector("#article-3 button");

bouton1.onclick = function() {
    description1 = document.querySelector("#article-1 p").innerHTML;
    logMessage(description1);
}

bouton2.onclick = function() {
    description2 = document.querySelector("#article-2 p").innerHTML;
    logMessage(description2);
}

bouton3.onclick = function() {
    description3 = document.querySelector("#article-3 p").innerHTML;
    logMessage(description3);
}