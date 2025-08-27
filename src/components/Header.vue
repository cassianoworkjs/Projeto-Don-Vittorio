<template>
  <header class="site-header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <div class="brand-logo">
              <span class="logo-text">DON</span>
              <span class="logo-accent">VITTORIO</span>
            </div>
          <span class="tagline">Comida de Fogo</span>
        </router-link>
      </div>
      <img src="../public/images/logo.png" alt="Logo" class="logo-img">
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/menu">Cardápio</router-link></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.site-header {
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo a {
  color: white;
  text-decoration: none;
}

.logo h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  color: #ff6b35;
}

.tagline {
  font-size: 1rem;
  color: #ccc;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.main-nav a:hover,
.main-nav a.router-link-active {
  background-color: #ff6b35;
  color: white;
}
.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ff6b35;
  letter-spacing: -0.02em;
}

.logo-accent {
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
}
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }

  .logo h1 {
    font-size: 2rem;
  }

  .main-nav ul {
    gap: 1rem;
  }
}
</style>
