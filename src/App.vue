<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  background: transparent;
  border: 0;
  outline: 0;
  vertical-align: baseline;
}

body, html {
  height: 100%;
}

body {
  overflow-x: auto;
  overflow-y: scroll;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

:root {
  --one-unit: 1vw;
  --section-max-width: 9999px;
  --browser-zoom: 1;
}

a {
  cursor: pointer;
  text-decoration: none;
}

:focus {
  outline: none;
}
</style>

