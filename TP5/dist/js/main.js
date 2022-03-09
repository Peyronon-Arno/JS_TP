import ButtonCounter from '/view/components/ButtonCounter.js';

Vue.createApp({
    data() {
        return {
            title: 'TP5 JS'
        }
    }
}).mount('h1');

Vue.createApp({
    data() {
        return {
            articles: this.getArticles(),
            errorMessage: null,
            titleToAdd: TITLEPLACEHOLDER,
            descriptionToAdd: null,

        }
    },
    computed: {
        /**
         * 
         * @returns le nombre d'article que l'on a 
         */
        getNbArticles() {
            return this.articles.length;
        }
    },
    methods: {
        /**
         * 
         * @returns toutes les news contenues dans la constante ALLNEWJSON
         */
        getArticles() {
            return JSON.parse(ALLNEWJSON)
        },
        /**
         * Lorsqu'on clic sur le bouton, ca va afficher la description de la news
         * @param {*} article 
         */
        viewDetailArticle(article) {
            console.log(article.description);
        },
        /**
         * Lorsqu'on ajoute une news, sur le submit, on vient ajouter à la liste articles la nouvelle news et on la log, sinon on lève une erreur 
         * @param {} event 
         */
        addArticle: function(event) {
            console.log(this.titleToAdd);
            console.log(this.descriptionToAdd);
            this.errorMessage = null;

            if (this.titleToAdd != null && this.titleToAdd !== TITLEPLACEHOLDER) {
                this.articles.push({ title: this.titleToAdd, description: this.descriptionToAdd });
                this.titleToAdd = TITLEPLACEHOLDER;
                this.descriptionToAdd = null;
            } else {
                this.errorMessage = "Le titre doit etre renseigné";
            }
            event.preventDefault();
        }
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
// }).mount('#click');

Vue.createApp({})
    .component('ButtonCounter', ButtonCounter)
    .mount('#click');