function bindButton(button) {
    button.onclick = function(event) {
        event.preventDefault();
        let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');

        let article = new Article(0, title.value, description.value);
        try {
            logMessageWithDate(title.value + ' ' + description.value);
            if (article.insertArticleHtml()) {
                title.value = '';
                description.value = '';
            }
        } catch (e) {
            clearErrors();
            let form = $('#addNewsForm');

            if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                addError(e.message, form);
            } else {
                addError('Une erreur inconnue est survenue !', form);
                console.error(e);
            }
        }
        return false;
    };
}

function clearErrors() {
    let errors = $('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

function addError(message, parent) {
    let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = this.$('p');
    logMessageWithDate(p.html());
}