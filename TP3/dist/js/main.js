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
    console.log(this)
});


let button = $('input[name="addNewsBtn"]');
bindButton(button);

/**
 * Quand le boutton view detail est cliqué on affiche la description
 */
$(document).ready(function() {
    $('article button').click(function() {
        viewdetailClick();
    })
});

/*let articles = JSON.parse(ALLNEWJSON);
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
});*/

/*
$.ajax({
        url: "https://newsdata.io/api/1/news?apikey=pub_4627365ed0e1d1c0536016b89a969e1275ef&language=fr&category=technology",
        method: "GET"

    })
    .done(function(data, textStatus, xhr) {

        logMessageWithDate('done');
        if (xhr.status >= 300 && xhr.status < 400) {
            logMessageWithDate('redirection en cours');
        }
        logMessageWithDate(xhr);
        logMessageWithDate(xhr.status);
        logMessageWithDate(textStatus);
        logMessageWithDate(data);
        logMessageWithDate(data.response);

    })
    .fail(function(xhr, textStatus, error) {
        logMessageWithDate('fail');
        logMessageWithDate(xhr.status);
        logMessageWithDate(textStatus);
        throw new Error(error);

    });*/