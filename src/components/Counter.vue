<template>
  <div>
    <p>Increment by {{ increaseBy }}:</p>
    <button @click="increment">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: {
    increaseBy: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    times() {
      return this.count > 1 ? "times" : "time";
    },
    text() {
      return `I have been clicked ${this.count} ${this.times}`;
    },
  },
  methods: {
    increment() {
      this.count += this.increaseBy;
    },
  },
};
</script>
<style>
button:focus {
  outline: none;
}
</style>
