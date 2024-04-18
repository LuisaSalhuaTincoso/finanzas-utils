<template>
  <CalculadoraTREA />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CalculadoraTREA from './components/calculadora/CalculadoraTREA.vue';

@Options({
  components: {
    CalculadoraTREA
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Lexend", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
