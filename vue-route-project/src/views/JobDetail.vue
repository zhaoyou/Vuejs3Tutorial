<template>
  <div v-if="job">
    <p>Job Id : {{ job.id }}</p>
    <p>Job title : {{ job.title }}</p>
    <p>Job detail : {{ job.details }}</p>

  </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id)
        .then(res => res.json())
        .then(data => {this.job = data; console.log(data)})
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>