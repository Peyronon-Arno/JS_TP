export default {
    data() {
        return {
            articles: this.getArticles(),
            errorMessage: null,
            titleToAdd: DEFAULTTITLE,
            descriptionToAdd: null,
            colorMessage: null,
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
            console.log(article.description)
        },

        addArticle: function(event) {
            event.preventDefault();
            try {
                this.errorMessage = null;
                console.log(this.titleToAdd);
                console.log(this.descriptionToAdd);

                if (this.titleToAdd !== '' && this.titleToAdd !== DEFAULTTITLE && this.descriptionToAdd !== null && this.descriptionToAdd !== '') {
                    this.articles.push({ title: this.titleToAdd, description: this.descriptionToAdd });
                    this.titleToAdd = null;
                    this.descriptionToAdd = null;
                    this.validMessage = "Article ajouté";
                    this.colorMessage = 'green';
                } else if (this.titleToAdd == '' || this.titleToAdd == DEFAULTTITLE) {
                    this.errorMessage = "Le titre doit être renseigné";
                    this.colorMessage = 'red';
                } else {
                    this.errorMessage = "La description doit être renseignée";
                    this.colorMessage = 'red';
                }

            } catch (e) {
                if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                    this.errorMessage = e.message;
                } else {
                    this.errorMessage = 'Une erreur inconnue est survenue !';
                    this.colorMessage = 'red';
                }
            }
        },


        deleteNew(article) {
            let index = this.articles.indexOf(article);
            this.articles.splice(index, 1);
        }
    },

    template: `
    <section id="news">
        <div v-if="getNbArticles">

            <h2 id="titleNews" class="text-center"> {{getNbArticles}}  </h2>
            <article v-if="getNbArticles" v-for="article in articles">
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