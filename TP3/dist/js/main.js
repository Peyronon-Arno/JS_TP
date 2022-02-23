iterate();

let h1 = $('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.innerHTML);

$('.title').each(function() {
    console.log(this)
});


let button = $('input[name="addNewsBtn"]');
bindButton(button);

// let buttons = $('article button');
$('article button').each(function(element) {
    element.onclick = viewdetailClick;
});

let articles = JSON.parse(ALLNEWJSON);
articles.forEach(function(element) {
    console.log(element);

    try {
        let a = new Article(element.id, element.title, element.description);
        a.insertArticleHtml();
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
});