<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
import { ref } from 'vue'
const title = ref('My First Vite App')
const content = ref('Content Hello from Main.vue')
const name = ref(null)
function handleClick() {
  console.log(name.value.value)
}

function childEvent() {
  alert('event')
}
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <h3>My First Vite App</h3>
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
  <Modal :title="title" :content="content" @cool="childEvent">
    <p>Hello</p>
    <h3>Hello                Give some water :)</h3>
  </Modal>
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
