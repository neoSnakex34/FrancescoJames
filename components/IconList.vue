<template>
    <div>
        <div v-for="category in categories" :key="category.name" class="category">
            <h2 class="title">{{ category.name }}</h2>
            <div class="icon-box">
                <button v-for="icon in category.icons" 
                    :key="icon.iconName"
                    class="btn rounded-pill icon-btn" 
                    :title="icon.iconTitle"
                > 
                    <i :class="['mdi', icon.iconName]" alt="icon" class="icon-img"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    categories: { name: string, icons: {iconName: string, iconTitle: string}[] }[]
}>();



</script>

<style scoped>
    .category {
        margin-top: 20px;
        padding-top: 100px;
    }
    
    .title {
        color: var(--foreground);
        text-align: center;
        margin-bottom: 50px;
        font-weight: bold;
        font-size: 1.8em;
    }
    
    .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-basis: 33%;
        gap: 10px;
        
    }
    .icon-btn {
        background-color: var(--green);
        /* color: var(--foreground); */
        outline: none;
        border: none;
        z-index: 1000;
        width: 80px;
        height: 80px;
    }

    .icon-btn:hover {
        background-color: var(--yellow);
    }

    .icon-img {
        color: var(--background);
        font-size: 40px;
    }
</style>