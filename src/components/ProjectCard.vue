<template>

<div class="box">
<div class="card">
  <img :src="img" class="card-img-top" alt="stub image">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
  <div class="card-body">
    <a v-if="link1" :href="link1" class="card-link" target="_blank" rel="noopener noreferrer">Take a look!</a>
    <a v-if="link2" :href="link2" class="card-link" target="_blank" rel="noopener noreferrer">Source code</a>
  </div>
</div>
</div>
</div>

</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    defineProps<{
        title: string,
        description: string,
        link1?: string,
        link2?: string,
        img: string
    }>();


</script>

<style scoped>

    .box {
        padding-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   .card {
        /* margin: 2 auto; */
        padding: 5px;
        width: 35%;
        background-color: var(--purple);
        z-index: 0;
        box-shadow: 0 10px 20px 0 var(--background);
    }

    .card-title, 
    .card-text,
    .card-body {
        font-weight: bold;

    }

    .card-link {
        color: var(--background);
    }

    @media (max-width: 768px) {
        .box {
            padding-top: 10px;
            position: fixed center;
        } 
        .card {
            margin-top: 100px;
            width: 100%;
            /* margin: 2 auto; */
            /* padding: 5px; */
        }
    }
</style>