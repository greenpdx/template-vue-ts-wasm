<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { wasm } from './main.ts'
console.log(wasm)


</script>

<template>
  <div>
    <a href="https://rustwasm.github.io/wasm-pack/book/" target="_blank">
      <img src="./assets/wasm-ferris.png" class="logo" alt="Wasm-pack logo" />
    </a>
    <a href="https://www.rust-lang.org/" target="_blank">
      <img src="./assets/rustlogo.svg" class="logo vue" alt="Rust logo" />
    </a>
    <a href="https://rustwasm.github.io/docs/wasm-bindgen/" target="_blank">
      <img src="./assets/rustwasm.png" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="WASM-pack + Rust + bindgen + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
