$.ajax({
        //url: "https://newsdata.io/api/1/news?apikey=pub_4627365ed0e1d1c0536016b89a969e1275ef&language=fr&category=technology",
        url: "ajax_request.JSON",
        method: "GET"

    })
    .done(function(data, textStatus, xhr) {

        logMessageWithDate('done');
        if (xhr.status >= 300 && xhr.status < 400) {
            logMessageWithDate('redirection en cours');
        }

        data.results.forEach(function(article) {
            let art = new Article("0", art.title, art.description);
            art.insertArticleHtml();
        });

    })
    .fail(function(xhr, textStatus, error) {
        logMessageWithDate('fail');
        logMessageWithDate(xhr.status);
        logMessageWithDate(textStatus);
    });