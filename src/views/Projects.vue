<template>
    <div>
        <ProjectCard 
            title="WasaPHOTO" 
            description="Fullstack REST webapp in Go and Vue.js" 
            link2="https://www.github.com/neoSnakex34/WasaPHOTO"     
            img="./wasa.webp"    
        />
        <ProjectCard
            title="Studio Messini"
            description="Website for medical purposes in Vue.js"
            link1="https://www.studio-messini.pages.dev"
            img="./studio-messini.webp"
        />
    </div>
</template>

<script setup lang="ts">
    import ProjectCard from '../components/ProjectCard.vue';
</script>

<style scoped>

</style>