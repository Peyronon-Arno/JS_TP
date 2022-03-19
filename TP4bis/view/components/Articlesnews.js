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