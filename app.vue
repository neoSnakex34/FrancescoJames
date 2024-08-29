<script setup lang="ts">

const navbarBrandText = ref(`Francesco James's Portfolio`);
const buttonToggler = ref(false);
const route = useRoute();
const loading = ref(true);

onBeforeMount(() => {
  loading.value = true;
});

onMounted(() => {
  loading.value = false;
});

function toggleButton() {
  // console.log( buttonToggler.value);
  buttonToggler.value = !buttonToggler.value;
}

function changeNavbarBrandText() {
  switch (route.path) {
    case '/':
      return `Francesco James`;
    case '/skills':
      return `My Skills`;
    case '/projects':
      return `My Projects`;
    case '/services':
      return `Services`;
    default:
      return `Francesco James`;
  }
}

watchEffect(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 500);
  // this is what triggers the watchEffect builtin, cause
  // the reactive dependency is encapsulated in changeNavbarBrandText()
  navbarBrandText.value = changeNavbarBrandText();
});

</script>

<template>

  <div id="app">
    <header>

      <nav class="navbar navbar-dark sticky-top navbar-expand-lg">
        <div class="container-fluid">
          <div class="navbar-brand">
            {{ navbarBrandText }}
          </div>

          <button :class="{'active': buttonToggler}" @click="toggleButton" class="navbar-toggler rounded-pill"
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <i v-if="!buttonToggler" class="icon bi bi-three-dots"></i>
            <i v-else class="icon bi bi-arrow-bar-up "></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link" aria-current="page">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/skills" class="nav-link" aria-current="page">Skills</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/services" class="nav-link" aria-current="page">Services</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/projects" class="nav-link" aria-current="page">Projects</NuxtLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>

    <main>
      <div v-if="loading" class="spinner-box">
        <div class="spinner-grow" role="status" style="color: var(--orange)">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="mountedView" :class="{ slidableMountedView: route.path !== '/' }">
        <NuxtPage></NuxtPage>
      </div>
    </main>

    <footer>
      <div class="footer-box" :class="{footerMain: route.path === '/'}">
        <div class="row">
          <div class="col-12 text-center">
            <p>&copy 2024 Francesco James Fanti</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
  .footerMain {
    padding-top: 40px;
  }

  .spinner-box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }

  .slidableMountedView {
    padding-bottom: 150px;
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
.nav-link:focus,
.nav-link.router-link-active,
 .nav-link.router-link-exact-active{
  color: var(--foreground);
}



@media (min-width: 1024px){
  .navbar {
    min-height: 100px;
  }
}

@media (max-width: 768px) {
  .footerMain {
    padding-top: 0px;
  }
  .mountedView {
      padding-top: 90px;
      padding-bottom: 200px;
    }
  .slidableMountedView {
    padding-top: 75px;
    padding-bottom: 180px;
  }
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

