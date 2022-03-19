export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        description: String
    },
    computed: {},

    methods: {

        viewDetailArticle(article) {
            console.log(this.description)
        },

        // addArticle: function(event) {
        //     event.preventDefault();
        //     try {
        //         this.errorMessage = null;
        //         console.log(this.titleToAdd);
        //         console.log(this.descriptionToAdd);

        //         if (this.titleToAdd !== '' && this.titleToAdd !== DEFAULTTITLE && this.descriptionToAdd !== null && this.descriptionToAdd !== '') {
        //             this.articles.push({ title: this.titleToAdd, description: this.descriptionToAdd });
        //             this.titleToAdd = null;
        //             this.descriptionToAdd = null;
        //             this.validMessage = "Article ajouté";
        //             this.colorMessage = 'green';
        //         } else if (this.titleToAdd == '' || this.titleToAdd == DEFAULTTITLE) {
        //             this.errorMessage = "Le titre doit être renseigné";
        //             this.colorMessage = 'red';
        //         } else {
        //             this.errorMessage = "La description doit être renseignée";
        //             this.colorMessage = 'red';
        //         }

        //     } catch (e) {
        //         if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
        //             this.errorMessage = e.message;
        //         } else {
        //             this.errorMessage = 'Une erreur inconnue est survenue !';
        //             this.colorMessage = 'red';
        //         }b v
        //     }
        // },<article v-if="getNbArticles" v-for="article in articles">


        deleteNew() {
            this.$emit('remove');
        }
    },

    template: `
            <article>
                <h3 class="title"> {{title}}</h3>
                <p class="description"> {{description}}</p>
                <button @click="viewDetailArticle">View detail</button>
                <button @click="deleteNew">Delete</button>
            </article>
   `

}