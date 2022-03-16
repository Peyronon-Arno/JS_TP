const newArticle = `<article v-if="getNbArticles >= 1" v-for="article in articles">
<h3 class="title" :style="clicked ? {'color' : 'green'} : {'color : 'red'}> {{article.title}}</h3>
<p class="description"> {{article.description}}</p>
<button @click="changeTitle(article.description)">View detail</button>
</article>`;

const newComposant = {
    props: ['article'],
    data: function() {
        return {
            clicked: false
        }
    },
    template: newArticle,
    methods: {
        changeTitle: function(desc) {
            this.clicked = !this.clicked
            console.log(desc);
        }
    },
};

const ArticleVue = {
    data() {
        let articles = JSON.parse(ALLNEWSJSON);
        let nbArticle = articles.length;
        let titre = 'article';

        if (nbArticle > 1) {
            titre = 'articles';
        }
        return {
            nbArticle: nbArticle,
            articles: articles,
            titre: titre,
        };
    }
};

Vue.createApp(ArticleVue).component('news-item', newComposant).mount('#newsVue');