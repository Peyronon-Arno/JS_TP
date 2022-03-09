export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
        this.counter++;
    },
    decrement() {
        this.counter--;
    }
  },
  template: `
    <button @click="increment">
            {{ counter }} click
        </button>
        <button @click="decrement">
            Decrement
    </button>`
}