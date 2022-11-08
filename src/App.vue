<template>
  <div id="app">
    
    <Navbar />
    <router-view />
    <Footer />

  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
#app {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  box-sizing: border-box;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
