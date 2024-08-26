<template>
    <div>
        <IconList  :categories="categories"/>
        <!-- <IconList  :categories="[codingCategory]"/> -->
    </div>
</template>

<script setup lang="ts">
    import IconList from '../components/IconList.vue';
    import { ref } from 'vue';

    const categories = ref([
        {
            name: 'Frontend tools',
            icons: [
                { iconName: 'mdi-vuejs', iconTitle: 'Vue.js' },
                { iconName: 'mdi-language-javascript', iconTitle: 'JavaScript' },
                { iconName: 'mdi-language-typescript', iconTitle: 'TypeScript' },
                { iconName: 'mdi-language-html5', iconTitle: 'HTML5' },
                { iconName: 'mdi-language-css3', iconTitle: 'CSS3' },
                { iconName: 'mdi-bootstrap', iconTitle: 'Bootstrap' }
            ]
        },
        {
            name: 'Software development (and backend tech)',
            icons: [
                { iconName: 'mdi-language-go', iconTitle: 'Go' },
                { iconName: 'mdi-nodejs', iconTitle: 'Node.js' },
                { iconName: 'mdi-language-python', iconTitle: 'Python' },
                { iconName: 'mdi-language-java', iconTitle: 'Java' },
                { iconName: 'mdi-database', iconTitle: 'Database' },
                { iconName: 'mdi-git', iconTitle: 'Git' }
            ]
        }
    ]);
</script>

<style scoped>

</style>