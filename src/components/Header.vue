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
        <img src="/images/logo.png" alt="Logo" class="logo-img">
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
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  }
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
   position: relative;
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
   flex-wrap: nowrap;
   align-items: center;
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

   .logo-img {
    display: block;
    height: 60px;
    width: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .logo h1 {
    font-size: 2rem;
  }

     .logo {
     width: auto;
     text-align: left;
   }
   .logo a { 
     display: flex;
     align-items: center;
     gap: 1rem;
   }

   .logo-img {
     display: block;
     height: 48px;
     width: auto;
     margin: 0;
   }
   
       /* Mover logo para dentro do link no mobile */
    .header-container .logo-img {
      display: none;
    }
    .logo a .logo-img {
      display: block;
    }
    
    /* Adicionar logo dentro do link no mobile */
    .logo a::after {
      content: '';
      display: block;
      width: 48px;
      height: 48px;
      background: url('../public/images/logo.png') no-repeat center;
      background-size: contain;
      margin-left: 1rem;
    }
    
    /* Reset logo position for mobile */
    .logo-img {
      position: static;
      transform: none;
    }

  .menu-toggle {
    display: none;
  }

  .main-nav {
    width: 100%;
    display: block;
    background: transparent;
    border: 0;
    padding: 0.25rem 0;
  }
  .main-nav.open { display: block; }

  .main-nav ul {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .main-nav a {
    width: auto;
    padding: 0.5rem 0.75rem;
    text-align: center;
    border-radius: 6px;
    font-size: 0.95rem;
    white-space: nowrap;
  }
}

/* Telas pequenas: otimizações de espaçamento e tipografia */
@media (max-width: 480px) {
  .header-container {
    padding: 0 1rem;
    gap: 0.5rem;
  }
  .brand-logo {
    gap: 0.25rem;
    margin-bottom: 0;
  }
  .logo-text,
  .logo-accent {
    font-size: 1.75rem;
  }
  .tagline {
    display: none;
  }
  .logo-img {
    height: 40px;
  }
  .main-nav ul {
    gap: 0.5rem;
  }
  .main-nav a {
    padding: 0.4rem 0.6rem;
    font-size: 0.9rem;
  }
}

/* Telas muito estreitas: permitir quebra controlada do menu */
@media (max-width: 360px) {
  .logo-text,
  .logo-accent {
    font-size: 1.5rem;
  }
  .logo-img {
    display: none;
  }
  .main-nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  .main-nav a {
    flex: 1 0 auto;
  }
}
</style>
