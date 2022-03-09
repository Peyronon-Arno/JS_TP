<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            if (this.counter > 0)
                this.counter--;
        }
    }
}
</script>

<template><!-- La balise template attend 1 balise racine obligatoirement -->
    <div>
        <button @click="increment">You clicked me {{ counter }} times.</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>