import ButtonCounter from '/view/components/ButtonCounter.js';

Vue.createApp({
    data() {
        return {
            title: 'TP6 JS'
        }
    }
}).mount('h1');

Vue.createApp({
    data() {
        return {
            articles: this.getArticles(),

            errorMessage: null,
            titleToAdd: DEFAULTTITLE,
            descriptionToAdd: null
        }
    },
    computed: {
        getNbArticles() {
            return this.articles.length;
        }
    },
    methods: {
        getArticles() {
            return JSON.parse(ALLNEWSJSON);
        },
        viewDetailArticle(article) {
            console.log(article.desc);
        },
        //autre syntaxe pour déclarer une fonction
        addArticle: function(event) {
            event.preventDefault();
            console.log(this.titleToAdd);
            console.log(this.descriptionToAdd);

            this.errorMessage = null;

            //this.titleToAdd équivalent de this.titleToAdd !== null
            if (this.titleToAdd && this.titleToAdd !== '' && this.titleToAdd !== DEFAULTTITLE) {
                this.articles.push({ title: this.titleToAdd, desc: this.descriptionToAdd });
                this.titleToAdd = DEFAULTTITLE;
                this.descriptionToAdd = null;
            } else
                this.errorMessage = 'Le titre doit être renseigné';

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
/**
 * Dans un premier temps on a counter qui vaut 1 par défaut
 * Increment va ajouter +1
 * Decrement va enlever -1
 */
Vue.createApp({
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            if (this.counter > 0)
                this.counter--;
        }
    }
}).mount('#click');