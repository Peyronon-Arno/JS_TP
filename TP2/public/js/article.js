class Article {

    id;
    titre;
    description;

    constructor(id, titre, description) {
        this.id = id;
        this.titre = titre;
        this.description = description;
    }

    /**
     * Function which create a new article with descrpitoin button
     * @param {} title 
     */
    createHtmlArticle(title) {

        //Create article
        let nbArticle = bouttonArticleNb() + 1;
        let nArticle = document.createElement("article");
        nArticle.setAttribute('id', 'article-' + nbArticle);

        //Create h3
        let nh3 = document.createElement('h3');
        let news = document.querySelector('#news');
        nh3.innerHTML = title;
        nh3.classList.add('title');

        //Create button
        let btnArticle = document.createElement('button');
        btnArticle.classList.add('btnArticle');
        btnArticle.innerText = 'View detail';

        //Create p for description
        let p = document.createElement('p');
        let descriptionByInput = document.querySelector('input.inputDescription').value;
        p.innerText = descriptionByInput;
        // p.innerText = 'Description ' + nbArticle;

        //Add all the block
        nArticle.append(nh3, btnArticle, p);
        news.append(nArticle);

    }

    assertRequiredField(titre) {
        if (titre === '')
            throw new TitreVide('Appel de la classe TitreVide pour dire que le titre est trop vide');

        if (titre.length < 3)
            throw new TitreCours('Appel de la classe TitreCours pour dire que le titre est trop cours');
    }

    assertArticleUnicity(titre) {
        let h3s = document.querySelectorAll('h3.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === titre.toLowerCase().trim()) {
                throw new Exist('Appel de la classe Exist pour dire que le titre existe déjà');
            }
        }

        return true;
    }

    addArticle(titre) {
        try {
            clearErrors();
            this.assertRequiredField(titre);
            this.assertArticleUnicity(titre);
            this.createHtmlArticle(titre);
            return true;
        } catch (e) {
            let form = document.querySelector('#addNewsForm');
            addError(e.mess, form);

            return false;
        }
    }


}