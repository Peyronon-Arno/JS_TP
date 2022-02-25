iterate();

/**
 * Log le h1
 */
logMessageWithDate($('h1').html());

/**
 * Log le h2
 */
logMessageWithDate($('#titleNews').html());

/**
 * Log tout les titles
 */
$('.title').each(function() {
    console.log($(this).html())
});


let button = $('input[name="addNewsBtn"]')[0];
bindButton(button);

/**
 * Quand le boutton view detail est cliqué on affiche la description
 */
let buttons = $('article button');
buttons.each(function() {
    $(this).click(viewdetailClick);
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