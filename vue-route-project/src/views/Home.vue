<template>
  <h3>Home page</h3>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
export default {
  setup(props) {
    console.log(props)

    onMounted(
      () => {
        console.log('onMounted')
      }
    )

    onUpdated(() => {
      console.log('onUpdated')
    })

    onUnmounted(() => {
      console.log('onUmmounted')
    })
  }
}
</script>

<style>

</style>