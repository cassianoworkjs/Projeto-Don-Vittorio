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
  },
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme')
    this.isDark = saved === 'dark'
    document.documentElement.classList.toggle('dark-mode', this.isDark)
  },
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
  background: #f8f8f8;
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

:root {
  color-scheme: light;
}

html.dark-mode body {
  background: #0f0f0f;
  color: #f0f0f0;
}

html.dark-mode a {
  color: #ff6b35;
}

.theme-toggle {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  background: #ff6b35;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  cursor: pointer;
}

html.dark-mode .theme-toggle {
  background: #333;
  color: #fff;
  border: 1px solid #555;
}
</style>

