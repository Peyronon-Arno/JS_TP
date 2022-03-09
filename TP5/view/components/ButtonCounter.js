export default {
    // data() {
    //     return {
    //         counter: 0
    //     }
    // },
    props: {
        btnTitle: String
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            if (this.counter > 0)
                this.counter--;
        }
    },
    template: `
        <div class="button-counter">
            <button @click="increment">
                {{ counter }} click
            </button>
            <button @click="decrement">
                {{ btnTitle }}
            </button>
        </div>`
}