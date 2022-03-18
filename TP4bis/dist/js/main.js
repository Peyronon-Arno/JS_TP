import ArticleNews from '/view/components/ArticleNews.js'

Vue.createApp({
    data() {
        return {
            title: 'TP4 JS'
        }
    }
}).mount('h1');

Vue.createApp({}).component('ArticleNews', ArticleNews).mount('#app');
/*
//remplacer le code ci-dessous par le chargement en VueJS
let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

//remplacer le code ci-dessous par le chargement en VueJS
let buttons = document.querySelectorAll('article button');
buttons.forEach(function(element) {
    element.onclick = viewdetailClick;
});

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
            return this.articles.length;
        },
        checkHowManyArticle() {
            if (this.articles.length >= 1) {
                return 'articles';
            } else {
                return 'article';
            }
        }

    },
    methods: {

        getArticles() {
            return JSON.parse(ALLNEWSJSON);
        },
        viewDetailArticle(article) {
            console.log(article.description);
        },
        deleteNew(article) {
            let index = this.articles.indexOf(article);
            this.articles.splice(index, 1);
        },
        //autre syntaxe pour déclarer une fonction
        addArticle: function(event) {
            event.preventDefault();
            console.log(this.titleToAdd);
            console.log(this.descriptionToAdd);

            this.errorMessage = null;

            //this.titleToAdd équivalent de this.titleToAdd !== null
            if (this.titleToAdd && this.titleToAdd !== '' && this.titleToAdd !== DEFAULTTITLE) {
                if (this.descriptionToAdd !== '' && this.descriptionToAdd !== null) {
                    this.articles.push({ title: this.titleToAdd, description: this.descriptionToAdd });
                    this.titleToAdd = DEFAULTTITLE;
                    this.descriptionToAdd = null;
                    this.colorMessage = 'green';
                    this.errorMessage = 'Ajout réussi !';
                } else {
                    this.errorMessage = 'La description doit être renseignée';
                    this.colorMessage = 'red';

                }
            } else {
                this.errorMessage = 'Le titre doit être renseigné';
                this.colorMessage = 'red';
            }

        },

    }
}).mount('#news');

// Vue.createApp({
//     data() {
//         return {
//             counter: 1
//         }
//     },
//     methods: {
//         increment() {
//             this.counter++;
//         },
//         decrement() {
//             if (this.counter > 0)
//                 this.counter--;
//         }
//     }
// }).mount('#click');*/