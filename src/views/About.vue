
<template>
    <div class="box">

    <div class="card">
        <img src="/portrait.webp" class="card-img-top" alt="my portrait">
        <div class="card-body">
            <h5 class="card-title">Francesco James Fanti</h5>
            <p class="card-text-top">Frontend WebDev</p>
            <p class="card-text-bot">( Enrolled B.Sc. Informatics - Sapienza )</p>
            <div class="d-flex justify-content-between">
            <button @click="goTo('https://github.com/neoSnakex34')" class="bi bi-github rounded-pill contact-btn"></button> 
            <button @click="toggleDownload" class="bi bi-file-person rounded-pill contact-btn"></button> 
            <button @click="goTo('https://www.linkedin.com/in/francesco-james-fanti-393696215/')" class="bi bi-linkedin rounded-pill contact-btn"></button>
            </div>
        </div>
    </div>
    </div>

</template>

<script setup lang="ts">
    function goTo(url: string) {
        window.open( url);
    }

    function toggleDownload() {
        window.open('/CV.pdf');
    }
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
        background-color: var(--light-blue);
        z-index: 0;
        box-shadow: 0 10px 20px 0 var(--background);
    }
    .card img {
        object-fit: cover;
    }

    .card-title {
        font-weight: bold;
        color: var(--background);
    }

    .card-text-top {
        font-weight: bold;
        color: var(--foreground);
    }

    .card-text-bot {
        color: var(--background);
    }

    .contact-btn {
        background-color: var(--background);
        color: var(--foreground);
        outline: none;
        border: none;
        z-index: 1000;
    }

    .contact-btn:hover {
        background-color: var(--yellow);
        color: var(--background);
    }

    @media (max-width: 768px) {
        .box {
            padding-top: 10px;
            position: fixed center;
        } 
        .card {
            width: 100%;
            /* margin: 2 auto; */
            /* padding: 5px; */
        }
    }
</style>