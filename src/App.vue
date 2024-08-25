<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const buttonToggler = ref(false);

function toggleButton() {
  console.log( buttonToggler.value);
  buttonToggler.value = !buttonToggler.value;
}
</script>

<template>

  <header>

    <nav class="navbar navbar-dark navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand">
          neoSnakex34
        </a>

        <button :class="{'active': buttonToggler}" @click="toggleButton" class="navbar-toggler rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="icon bi bi-list"></i>
          <!-- <span class="icon">v</span> -->
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" aria-current="page" >Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/skills" class="nav-link" href="#">Skills</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>

  </header>
  <main>
    <router-view></router-view>
  </main>

  <footer>
  </footer> 

</template>

<style scoped>

.navbar-container {
  width: 70vw;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}


#navbarNav {
  justify-content: flex-end;
}

.navbar {
  top: 0;
  position: fixed;
  left: 0;
  background-color: var(--background);
  width: 100%;
  padding-left: 2vw;
  padding-right: 2vw;
}

.navbar-brand {
  font-weight: bold;
  background-image: linear-gradient(to right, var(--blue) 40%, var(--light-blue) , var(--foreground));
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;

  transition: color 0.5s, backround-image 0.5s;
}

.navbar-brand:hover {
  color: var(--foreground);
}


.navbar-toggler {
  background-color: var(--purple);
  border: none;
  outline: none;
  box-shadow: none;
  color: var(--foreground);
  transition: box-shadow 0.5s;
}

.navbar-toggler:focus {
  box-shadow: none
}

.navbar-toggler.active {
  box-shadow: 0 0 10px 0 var(--foreground);
}

.nav-item {
  font-weight: bold ;
}

.nav-link {
  color: var(--blue);
}
.nav-link:active,
.nav-link:hover,
.nav-link:focus {
  color: var(--foreground);
}

</style>