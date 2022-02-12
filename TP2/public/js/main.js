let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

/**
 * log each element of the ALLNEWJSON passed in Article
 */
json = JSON.parse(ALLNEWJSON);
json.forEach(element => {
    articleJSON = new Article(element.id, element.title, element.description)
    logMessage(articleJSON.id + ' // ' + articleJSON.titre + ' // ' + articleJSON.description);
})

addInput();