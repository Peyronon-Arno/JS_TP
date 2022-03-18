export default {
    data() {
        return {
            articles: this.getArticles(),
            errorMessage: null,
            titleToAdd: DEFAULTTITLE,
            descriptionToAdd: null,
            colorError: ROUGE,
            colorValid: VERT
        }
    },
    props: {

    },

    computed: {
        getNbArticles() {
            if (this.articles.length > 1) {
                return this.articles.length + " articles";
            } else if (this.articles.length == 1) {
                return this.articles.length + " article";
            }
        }
    },

    methods: {
        getArticles() {
            return JSON.parse(ALLNEWSJSON);
        },

        viewDetailArticle(article) {
            console.log(article.desc)
        },

        addArticle: function(event) {
            event.preventDefault();
            try {
                this.errorMessage = null;
                this.validMessage = null;
                console.log(this.titleToAdd);
                console.log(this.descriptionToAdd);

                this.errorMessage = null;

                let article = new Article(calculIdArticle, this.titleToAdd, this.descriptionToAdd);

                if (this.titleToAdd !== '' && this.titleToAdd !== DEFAULTTITLE && this.descriptionToAdd !== null) {
                    this.articles.push({
                        title: article.title,
                        desc: article.description
                    });
                    this.titleToAdd = DEFAULTTITLE;
                    this.descriptionToAdd = null;
                    this.validMessage = "Article ajouté avec succès";
                    article = null;
                } else if (this.titleToAdd == '' || this.titleToAdd == DEFAULTTITLE) {
                    this.errorMessage = "Le titre doit être renseigné";
                } else {
                    this.errorMessage = "La description doit être renseignée";
                }

            } catch (e) {
                if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                    this.errorMessage = e.message;
                } else {
                    addError('Une erreur inconnue est survenue !', form);
                    console.error(e);
                }
            }
        },


        deleteArticle(article) {
            let index = this.articles.indexOf(article);
            this.articles.splice(index, 1);
        }
    },

    template: `
    <section id="news">
        <div v-if="getNbArticles">

            <h2 id="titleNews" class="text-center"> {{getNbArticles}} {{checkHowManyArticle}} </h2>
            <article v-if="getNbArticles >= 1" v-for="article in articles">
                <h3 class="title"> {{article.title}}</h3>
                <p class="description"> {{article.description}}</p>
                <button @click="viewDetailArticle(article)">View detail</button>
                <button @click="deleteNew">Delete</button>
            </article>
        </div>
        <form @submit="addArticle" id="addNewsForm">
            <p :style="{ color : colorMessage}">{{ errorMessage }}</p>
            <label>Nom de la news : </label><br>
            <input v-model="titleToAdd" name="titleToAdd" type="text" /> <br>
            <label>Description de la news </label><br>
            <textarea v-model="descriptionToAdd" name="descriptionToAdd"></textarea><br>
            <input type="submit" name="addNewsBtn" />
        </form>
    </section>`

}