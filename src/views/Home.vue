<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-main">Gastronomia</span>
              <span class="title-sub">premium</span>
              <span class="title-accent">feita no fogo.</span>
            </h1>
            <p class="hero-description">
              O prazer da gastronomia premium, feita no fogo. Experimente e
              sinta a diferença.
            </p>
            <div class="hero-actions">
              <router-link to="/menu" class="btn btn-primary">
                <span class="btn-text">Ver Cardápio</span>
                <span class="btn-icon">→</span>
              </router-link>
              <a href="#units" class="btn btn-secondary">
                <span class="btn-text">Nossas Unidades</span>
                <span class="btn-icon">↓</span>
              </a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-gallery">
              <div class="hero-tile">
                <img src="/images/11.jpg" alt="Ancho" />
              </div>
              <div class="hero-tile">
                <img src="/images/12.jpg" alt="Carreteiro" />
              </div>
              <div class="hero-tile">
                <img src="/images/13.jpg" alt="Costelinha" />
              </div>
              <div class="hero-tile">
                <img src="/images/14.jpg" alt="Brisket" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chef & Brand Story Section -->
    <section class="chef-story">
      <div class="container">
        <div class="story-content">
          <div class="story-visual">
            <div class="chef-card">
              <img
                src="/images/Don Vittorio.jpg"
                alt="Chef DON Vittorio"
                class="chef-photo"
              />
              <div class="chef-title">
                <h1 class="chef-name">DON Vittorio</h1>
                <div class="separator"></div>
                <h2 class="chef-subtitle">Pitmaster Certificado</h2>
              </div>
            </div>
          </div>

          <div class="story-text">
            <div class="story-header">
              <div class="expertise-badge">
                <span class="badge-text">PITMASTER</span>
              </div>
              <h2 class="story-title">A História do DON</h2>
            </div>

            <div class="story-description">
              <p class="main-story">
                Desde 2010 na carreira gastronômica, chef de cozinha, pitmaster
                certificado, mais de 100 mil seguidores digitais, milhares de
                eventos para clientes de alto padrão e celebridades, prêmios e a
                participação no maior churrasco brasileiro do Guinness book, DON
                sempre busca a máxima excelência em serviços e produtos quando o
                assunto é comida feita direto no fogo.
              </p>

              <p class="secondary-story">
                Seja em nossas lojas ou em nosso buffet, levamos o melhor da
                gastronomia premium para você, sua festa, sua empresa, seu
                evento, seu momento.
              </p>

              <div class="welcome-message">
                <span class="welcome-text">Que bom ter você conosco.</span>
              </div>
            </div>

            <div class="achievements-grid">
              <div class="achievement-item">
                <div class="achievement-number">13+</div>
                <div class="achievement-label">Anos de Experiência</div>
              </div>
              <div class="achievement-item">
                <div class="achievement-number">100K+</div>
                <div class="achievement-label">Seguidores Digitais</div>
              </div>
              <div class="achievement-item">
                <div class="achievement-number">1000+</div>
                <div class="achievement-label">Eventos Premium</div>
              </div>
              <div class="achievement-item">
                <div class="achievement-number">🏆</div>
                <div class="achievement-label">Guinness Book</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Units Section -->
    <section id="units" class="units">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossas Unidades</h2>
          <p class="section-subtitle">
            Descubra o ambiente e a gastronomia de cada um de nossos endereços
          </p>
        </div>

        <div class="units-grid">
          <!-- Loja Sudoeste -->
          <div class="unit-card">
            <div class="carousel-container">
              <div class="carousel" ref="carouselSudoeste">
                <div class="carousel-item">
                  <img src="/images/sudoeste.png" alt="Sudoeste 1">
                </div>
                <div class="carousel-item">
                  <img src="/images/sudoeste.png" alt="Sudoeste 2">
                </div>
                <div class="carousel-item">
                  <img src="/images/sudoeste.png" alt="Sudoeste 3">
                </div>
              </div>
              <button class="carousel-btn prev" @click="prevSlide('Sudoeste')">
                <span class="chevron">&#x2329;</span>
              </button>
              <button class="carousel-btn next" @click="nextSlide('Sudoeste')">
                <span class="chevron">&#x232A;</span>
              </button>
            </div>
            <div class="unit-content">
              <h3 class="unit-title">DONVITTORIO Sudoeste</h3>
              <p class="unit-address">
                <i class="bi bi-geo-alt-fill"></i> CLSW 100, bloco A, loja 21
              </p>
              <div class="unit-actions">
                <a href="https://www.canva.com/design/DAGwbkIdudU/jmSJ_BrJ95jHBXq5cBwj6w/view" target="_blank" rel="noopener noreferrer" class="btn-cardapio">Cardápio</a>
                <a href="https://maps.app.goo.gl/ar8igWmMRFVP6dju8" target="_blank" class="btn-mapa">Ver no mapa</a>
              </div>
            </div>
          </div>

          <!-- Loja Jardim Botânico -->
          <div class="unit-card">
            <div class="carousel-container">
              <div class="carousel" ref="carouselJardim">
                <div class="carousel-item">
                  <img src="/images/jardim-botanico.png" alt="Jardim Botânico 1">
                </div>
                <div class="carousel-item">
                  <img src="/images/jardim-botanico.png" alt="Jardim Botânico 2">
                </div>
              </div>
              <button class="carousel-btn prev" @click="prevSlide('Jardim')">
                <span class="chevron">&#x2329;</span>
              </button>
              <button class="carousel-btn next" @click="nextSlide('Jardim')">
                <span class="chevron">&#x232A;</span>
              </button>
            </div>
            <div class="unit-content">
              <h3 class="unit-title">DONVITTORIO Jardim Botânico</h3>
              <p class="unit-address">
                <i class="bi bi-geo-alt-fill"></i> Av. San Diego, lote 17
              </p>
              <div class="unit-actions">
                <a href="https://www.canva.com/design/DAGwJwuett0/fKtpdn2SB5ocuuHrJRD9eQ/view" target="_blank" rel="noopener noreferrer" class="btn-cardapio">Cardápio</a>
                <a href="https://maps.app.goo.gl/J5qWmp5svzuj67CG9" target="_blank" class="btn-mapa">Ver no mapa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="cta-background">
        <div class="cta-overlay"></div>
        <div class="cta-pattern"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Pronto para uma experiência única?</h2>
          <p>
            Descubra nossos sabores exclusivos e se apaixone pela nossa cozinha
          </p>
          <router-link to="/menu" class="btn btn-primary btn-large">
            <span class="btn-text">Explore Nosso Cardápio</span>
            <span class="btn-icon">→</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      carouselIndices: {
        Sudoeste: 0,
        Jardim: 0,
      },
    };
  },
  mounted() {
    this.initGalleryFilter();
  },
  methods: {
    initGalleryFilter() {
      const categoryBtns = document.querySelectorAll(".category-btn");
      const galleryItems = document.querySelectorAll(".gallery-item");

      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          categoryBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          const category = btn.getAttribute("data-category");

          galleryItems.forEach((item) => {
            const itemCategory = item.getAttribute("data-category");

            if (category === "all" || itemCategory === category) {
              item.style.display = "block";
              item.style.animation = "fadeIn 0.5s ease-in-out";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
    },
    nextSlide(unit) {
      const carouselEl = this.$refs['carousel' + unit];
      if (!carouselEl) return;
      
      const items = carouselEl.querySelectorAll('.carousel-item');
      if (items.length === 0) return;
      
      this.carouselIndices[unit] = (this.carouselIndices[unit] + 1) % items.length;
      this.updateCarousel(unit);
    },
    prevSlide(unit) {
      const carouselEl = this.$refs['carousel' + unit];
      if (!carouselEl) return;
      
      const items = carouselEl.querySelectorAll('.carousel-item');
      if (items.length === 0) return;
      
      this.carouselIndices[unit] = (this.carouselIndices[unit] - 1 + items.length) % items.length;
      this.updateCarousel(unit);
    },
    updateCarousel(unit) {
      const carouselEl = this.$refs['carousel' + unit];
      if (!carouselEl) return;
      
      const items = carouselEl.querySelectorAll('.carousel-item');
      const offset = -this.carouselIndices[unit] * 100;
      carouselEl.style.transform = `translateX(${offset}%)`;

      items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === this.carouselIndices[unit]) {
          item.classList.add('active');
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" );
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" );

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

* {
  box-sizing: border-box;
}

.home {
  min-height: 100vh;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  color: #1a1a1a;
  line-height: 1.6;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  position: relative;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
  color: white;
  padding: 8rem 0 6rem;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 107, 53, 0.1) 0%,
    rgba(255, 107, 53, 0.05) 100%
  );
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid  )"/></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  max-width: 600px;
}

.badge-text {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.hero-title {
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.title-main {
  display: block;
  font-size: 4.5rem;
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
  position: relative;
}

.title-sub {
  display: block;
  font-size: 4rem;
  font-weight: 700;
  color: #ff6b35;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

.title-accent {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

.title-main::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #ff8c42);
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: #b0b0b0;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.02em;
}

.hero-description {
  font-size: 1.125rem;
  color: #ccc;
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 180px;
  gap: 12px;
  width: 520px;
}

.hero-gallery .hero-tile {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.hero-gallery .hero-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.hero-gallery .hero-tile:hover img {
  transform: scale(1.06);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.cta {
  position: relative;
  background-color: #131211; 
  color: white;
  padding: 8rem 0;
  text-align: center;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 107, 53, 0.1) 0%,
    rgba(255, 107, 53, 0.05) 100%
  );
}

.cta-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="%232d1f1c" d="M0 0h40v40H0z"/><path fill="%2348332c" d="M10 0v40M30 0v40M0 10h40M0 30h40"/></svg>');
  opacity: 0.3;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta h2 {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
}

.cta p {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #b0b0b0;
  line-height: 1.6;
}

.chef-story {
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 8rem 0;
  overflow: hidden;
}

.chef-story::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="chef-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23chef-pattern  )"/></svg>');
  opacity: 0.3;
}

.story-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chef-card {
  background-color: #2d2d2d;
  border: 2px solid rgba(255, 107, 53, 0.4);
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  max-width: 380px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.chef-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 107, 53, 0.7);
}

.chef-photo {
  width: 100%;
  max-width: 350px;
  border-radius: 16px;
  object-fit: cover;
  border: 4px solid #ff6b35;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.chef-title {
  text-align: center;
  font-family: "Playfair Display", serif;
  color: #111;
  margin: 2rem 1rem;
}

.chef-name {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
  color: #cfa15e;
}

.separator {
  width: 80px;
  height: 2px;
  background: linear-gradient(to right, #cfa15e, #5c1a1a);
  margin: 0.5rem auto;
  border-radius: 1px;
}

.chef-subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin: 0.5rem 0 0 0;
  letter-spacing: 1px;
}

 .story-text {
   max-width: 700px;
   text-align: center;
   margin: 0 auto;
 }

 .story-header {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   margin-bottom: 2rem;
   flex-wrap: wrap;
 }

.expertise-badge {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

 .story-title {
   font-size: 3rem;
   font-weight: 800;
   margin: 0;
   line-height: 1.1;
   color: white;
   letter-spacing: -0.02em;
   text-align: center;
 }

.story-description {
  margin-bottom: 2rem;
}

 .main-story {
   font-size: 1.125rem;
   color: #ccc;
   line-height: 1.7;
   margin-bottom: 1.5rem;
   text-align: center;
 }

 .secondary-story {
   font-size: 1.125rem;
   color: #b0b0b0;
   line-height: 1.7;
   margin-bottom: 2rem;
   text-align: center;
 }

 .welcome-message {
   background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
   color: white;
   padding: 1.5rem 2rem;
   border-radius: 25px;
   font-size: 1.125rem;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.1em;
   box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
   text-align: center;
   transition: all 0.3s ease;
   display: inline-block;
 }

.welcome-message:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  text-align: center;
  justify-items: center;
}

 .achievement-item {
   background: rgba(255, 255, 255, 0.05);
   padding: 1.5rem 1rem;
   border-radius: 16px;
   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
   border: 1px solid rgba(255, 255, 255, 0.1);
   transition: all 0.3s ease;
   position: relative;
   overflow: visible;
   width: 100%;
   max-width: 140px;
 }

.achievement-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;

  transition: left 0.5s ease;
}

.achievement-item:hover::before {
  left: 100%;
}

.achievement-item:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

 .achievement-number {
   font-size: 2.1rem;
   font-weight: 900;
   color: #ff6b35;
   margin-bottom: 0.6rem;
   line-height: 1;
   white-space: nowrap;
 }

.achievement-label {
  font-size: 0.8rem;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
  line-height: 1.2;
}

/* Units Section */
.units {
  padding: 8rem 0;
  background-color: white;
  color: white;
}

.units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin: 2rem 0;
}

.unit-card {
  background: #2d2d2d;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.unit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.carousel {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  flex-shrink: 0;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 10;
  font-size: 1.5rem;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.chevron {
  font-family: sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1;
}

.unit-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.unit-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #ff6b35;
}

.unit-address {
  font-size: 1.125rem;
  color: #b0b0b0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.unit-address i {
  color: #ff6b35;
  font-size: 1.2rem;
}

.unit-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.btn-cardapio {
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  transition: all 0.3s ease;
}

.btn-cardapio:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.btn-mapa {
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.btn-mapa:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  .hero-content, .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .hero-text, .story-text {
    max-width: 100%;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-visual, .story-visual {
    order: -1;
  }
  .units-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .unit-card {
    flex-direction: column;
    align-items: center;
  }
  .unit-card .unit-content h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .title-main {
    font-size: 2.5rem;
  }
  .title-sub {
    font-size: 2rem;
  }
  .title-accent {
    font-size: 1.8rem;
  }
  .section-title, .cta h2 {
    font-size: 2.5rem;
  }
  /* Mantém a galeria em 2 colunas no mobile */
  .hero-gallery {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 140px;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
  /* Garante que o texto venha antes das imagens em mobile */

  .chef-story {
    padding: 4rem 0;
  }
  .chef-card {
    padding: 1rem;
    max-width: 320px;
  }
  .chef-photo {
    max-width: 300px;
  }
  .chef-name {
    font-size: 1.8rem;
  }
  .story-title {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .section-title, .cta h2 {
    font-size: 2rem;
  }
  .unit-actions {
    flex-direction: column;
  }
  /* Mantém 2x2 também em telas muito pequenas, ajustando a altura */
  .hero-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 130px;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }
  .chef-card {
    max-width: 280px;
  }
  .chef-photo {
    max-width: 260px;
  }
}
</style>
