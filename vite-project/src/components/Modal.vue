<template>
    <div>
        <h4>Hello Modal</h4>
        <h3>{{ title }}</h3>
        <p @click="pClick">{{ content }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'content'])
    const emit = defineEmits(['cool'])
    function pClick() {
        emit('cool')
    }
</script>