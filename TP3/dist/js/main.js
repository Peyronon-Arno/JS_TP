iterate();


logMessageWithDate($('h1').html());
logMessageWithDate($('#titleNews').html());


$('.title').each(function() {
    console.log(this)
});


let button = $('input[name="addNewsBtn"]');
bindButton(button);

$('article button').each(function(element) {
    element.onclick = viewdetailClick;
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

        console.log('done');
        if (xhr.status >= 300 && xhr.status < 400) {
            console.log('redirection en cours');
        }
        console.log(xhr);
        console.log(xhr.status);
        console.log(textStatus);
        console.log(data);
        console.log(data.response.docs);

    })
    .fail(function(xhr, textStatus, error) {
        console.log('fail');
        console.log(xhr.status);
        console.log(textStatus);
        throw new Error(error);

    });*/