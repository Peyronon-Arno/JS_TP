import ArticleNews from '../../view/components/ArticlesNews.js';
Vue.createApp({
    data() {
        return {
            title: 'TP4 JS'
        }
    }
}).mount('h1');

Vue.createApp({

    data() {
        return {
            articles: this.getArticles(),
            errorMessage: null,
            titleToAdd: DEFAULTTITLE,
            descriptionToAdd: null,
            colorMessage: null,
        }
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

        deleteNew() {
            let index = this.articles.indexOf(article);
            this.articles.splice(index, 1);
        },

        addArticle: function(event) {
            event.preventDefault();

            try {
                this.errorMessage = null;
                console.log(this.titleToAdd);
                console.log(this.descriptionToAdd);

                console.log(this.articles.length);
                if (this.titleToAdd !== '' && this.titleToAdd !== DEFAULTTITLE && this.descriptionToAdd !== null && this.descriptionToAdd !== '') {
                    console.log('Ajout');
                    // this.articles.push({ title: this.titleToAdd, description: this.descriptionToAdd });
                    let art = new Article(this.titleToAdd, this.descriptionToAdd);
                    this.articles.push(art);
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
        }
    }
}).component('ArticleNews', ArticleNews).mount('#app');
/*
Vue.createApp({}).component('ArticleNews', ArticleNews).mount('#app')*/