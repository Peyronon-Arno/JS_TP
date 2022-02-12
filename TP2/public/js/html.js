function bindButton(button) {
    button.onclick = function(event) {
        event.preventDefault();
        let champ = document.querySelector('input[name="titleToAdd"]');

        article = new Article(setId() + 1, champ.value, setDescription());
        if (article.addArticle(champ.value)) {
            champ.value = '';
            logMessage("Mon article créer " + article.id + ' ' + article.titre + article.description);
        }

        return false;
    }
}

/**
 * Show that clicking on the article button do something
 * @param {*} btnArticle 
 */
function bindButtonArticle(btnArticle) {
    btnArticle.onclick = function(e) {
        e.preventDefault();
        logMessage('Clic sur le boutton de l\'article');
        return false;
    }
}

/**
 * Function which count all article and return the number 
 */
function bouttonArticleNb() {
    let element = document.querySelectorAll('[id^="article"]');
    let nbElmt = 0;

    element.forEach(function() {
        nbElmt = nbElmt + 1;
    });

    for (i = 1; i <= nbElmt; i++) {
        let btnArticle = document.querySelector('#article-' + i);
        bindButtonArticle(btnArticle);
    }
    return nbElmt;
}

/**
 * Function which gives to new Article the description
 * @returns string
 */
function setDescription() {

    let nbDescritpion = bouttonArticleNb();
    let p = document.createElement('p');
    return p.innerText = 'Description ' + (nbDescritpion + 1);
}

/**
 * Fonction which set the id of the new article
 * @returns the id of the article
 */
function setId() {
    let nbId = bouttonArticleNb();
    return nbId;
}

/**
 * Function which clear error before inserting new article
 */
function clearErrors() {
    let errors = document.querySelectorAll('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

/**
 * Function which add a new error just before form
 * @param {} message 
 * @param {*} parent 
 */
function addError(message, parent) {
    let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

/**
 * Function to add input to form
 */
function addInput() {
    let input = document.createElement('input');
    input.classList.add('inputDescription');
    input.type = 'text';
    input.style.width = '30%';
    input.placeholder = "Entrez une description";
    input.required;

    let setterInput = document.querySelector('input[type=submit]');
    setterInput.before(input);

}