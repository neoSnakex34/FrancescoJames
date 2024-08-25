<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const buttonToggler = ref(false);

function toggleButton() {
  // console.log( buttonToggler.value);
  buttonToggler.value = !buttonToggler.value;
}
</script>

<template>

  <div id="app">
  <header>

    <nav class="navbar navbar-dark sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">
          neoSnakex34
        </RouterLink>

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
              <RouterLink to="/skills" class="nav-link" aria-current="page">Skills</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projects" class="nav-link" aria-current="page">Projects</RouterLink>
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
  </div>
</template>


<style scoped>

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
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-brand,
.navbar-brand:focus{
  font-weight: bold;
  background-image: linear-gradient(to right, var(--yellow), var(--orange));
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;

  transition: color 0.5s, backround-image 0.5s;
}

.navbar-brand:hover {
  color: var(--yellow);
}


.navbar-toggler {
  background-color: var(--orange);
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
  color: var(--orange);
}
.nav-link:active,
.nav-link:hover,
.nav-link:focus {
  color: var(--foreground);
}


@media (min-width: 1024px){
  .navbar {
    min-height: 100px;
  }
}

@media (max-width: 768px) {

  .navbar {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .navbar-brand,
  .nav-item {
    font-size: 1.5em;
  }
  
  .navbar-toggler {
    font-size: 2em;
  }

}


</style>

