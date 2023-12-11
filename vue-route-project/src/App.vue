<script>
import {ref} from 'vue'
export default {
  setup() {

    const p  = ref(null)

    console.log(p, p.value)

    return {
      name: ref('zhaoyou'),
      age: '35',
      p
    }
  },
  data() {
    return {
      'title': 'Hellllllll'
    }
  }
}

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  <!-- </div> -->
  <div>{{ name }} -- {{ age }}</div>
  <div>
    <p ref="p">Hello {{ name }} -- {{ age }}</p>
  </div>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user/hades">User</router-link>|
    <router-link to="/jobs">Jobs</router-link>
    <router-view></router-view>
  </div>
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
