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
            <div class="brand-badge">
              <span class="badge-text">PREMIUM</span>
            </div>
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
            <div class="hero-image-container">
              <div class="image-placeholder">
                <div class="placeholder-content">
                  <img
                    src="../public/images/Don-Vittorio-capa.png"
                    alt="Churrasco Premium"
                    class="hero-image"
                  />
                </div>
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
                src="../public/images/Don Vittorio.jpg"
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
            Experiência gastronômica em múltiplas localizações
          </p>
        </div>

        <div class="units-grid">
          <!-- Loja Sudoeste -->
          <div class="unit-card">
            <div class="unit-image">
              <img src="../public/images/sudoeste.png" alt="DON - Loja SW" />
            </div>
            <div class="unit-content">
              <h3>DONVITTORIO Sudoeste</h3>
              <p class="unit-address">
                <i class="bi bi-geo-alt-fill"></i> CLSW 100, bloco A, loja 21
              </p>
              <div class="unit-actions">
                <router-link to="/menu/sudoeste" class="btn-cardapio"
                  >Cardápio</router-link
                >
                <a
                  href="https://maps.app.goo.gl/ar8igWmMRFVP6dju8"
                  target="_blank"
                  class="btn-mapa"
                  >Ver no mapa</a
                >
              </div>
            </div>
          </div>

          <!-- Loja Jardim Botânico -->
          <div class="unit-card">
            <div class="unit-image">
              <img
                src="../public/images/jardim-botanico.png"
                alt="DON - Loja JB"
              />
            </div>
            <div class="unit-content">
              <h3>DONVITTORIO Jardim Botânico</h3>
              <p class="unit-address">
                <i class="bi bi-geo-alt-fill"></i> Av. San Diego, lote 17
              </p>
              <div class="unit-actions">
                <router-link to="/menu/jardim" class="btn-cardapio"
                  >Cardápio</router-link
                >
                <a
                  href="https://maps.app.goo.gl/J5qWmp5svzuj67CG9"
                  target="_blank"
                  class="btn-mapa"
                  >Ver no mapa</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section class="specialties">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Destaques</h2>
          <p class="section-subtitle">
            Pratos exclusivos que definem nossa identidade
          </p>
        </div>

        <div class="specialties-grid">
          <div class="specialty-card">
            <div class="card-header">
              <div class="card-image">
                <img src="../public/images/18.jpg" alt="Brisket do DON" />
              </div>
              <div class="card-badge">Mais Vendido</div>
            </div>
            <div class="card-content">
              <h3>Brisket do DON</h3>
              <p>
                O premiado Brisket (Peito Bovino) Angus, defumado por 12 horas,
                finalizado com molho Barbecue
              </p>
              <div class="card-footer">
                <span class="price">R$ 45,00</span>
                <router-link to="/menu" class="card-link"
                  >Ver no Cardápio</router-link
                >
              </div>
            </div>
          </div>

          <div class="specialty-card">
            <div class="card-header">
              <div class="card-image">
                <img src="../public/images/11.jpg" alt="Ancho do DON" />
              </div>
              <div class="card-badge">Premium</div>
            </div>
            <div class="card-content">
              <h3>Ancho do DON</h3>
              <p>
                Steak de Ancho grill, finalizado com sal de parrilla. Acompanha
                Farofa do DON® e Chimichurri
              </p>
              <div class="card-footer">
                <span class="price">R$ 35,00</span>
                <router-link to="/menu" class="card-link"
                  >Ver no Cardápio</router-link
                >
              </div>
            </div>
          </div>

          <div class="specialty-card">
            <div class="card-header">
              <div class="card-image">
                <img src="../public/images/12.jpg" alt="Carreteiro do DON" />
              </div>
              <div class="card-badge">Tradicional</div>
            </div>
            <div class="card-content">
              <h3>Carreteiro do DON</h3>
              <p>
                Arroz Carreteiro com Bacon, Linguiça Calabresa e Brisket
                Defumados, finalizado com Cebolinha
              </p>
              <div class="card-footer">
                <span class="price">R$ 25,00</span>
                <router-link to="/menu" class="card-link"
                  >Ver no Cardápio</router-link
                >
              </div>
            </div>
          </div>

          <div class="specialty-card">
            <div class="card-header">
              <div class="card-image">
                <img src="../public/images/13.jpg" alt="Costelinha do DON" />
              </div>
              <div class="card-badge">Defumado</div>
            </div>
            <div class="card-content">
              <h3>Costelinha do DON</h3>
              <p>
                Costelinha Suína defumada, finalizada com molho barbecue.
                Acompanha Farofa do DON®
              </p>
              <div class="card-footer">
                <span class="price">R$ 35,00</span>
                <router-link to="/menu" class="card-link"
                  >Ver no Cardápio</router-link
                >
              </div>
            </div>
          </div>

          <div class="specialty-card">
            <div class="card-header">
              <div class="card-image">
                <img src="../public/images/14.jpg" alt="Burger do DON" />
              </div>
              <div class="card-badge">Gourmet</div>
            </div>
            <div class="card-content">
              <h3>Burger do DON</h3>
              <p>
                Hamburguer blend de 180g, pão brioche, queijo, maionese grill e
                molho barbecue
              </p>
              <div class="card-footer">
                <span class="price">R$ 30,00</span>
                <router-link to="/menu" class="card-link"
                  >Ver no Cardápio</router-link
                >
              </div>
            </div>
          </div>

          <div class="specialty-card">
            <div class="card-header">
              <div class="card-image">
                <img src="../public/images/15.jpg" alt="Batata do DON" />
              </div>
              <div class="card-badge">Especial</div>
            </div>
            <div class="card-content">
              <h3>Batata do DON</h3>
              <p>
                Batata frita crocante com Brisket defumado desfiado, cebolinha
                fresca e pimenta biquinho
              </p>
              <div class="card-footer">
                <span class="price">R$ 36,00</span>
                <router-link to="/menu" class="card-link"
                  >Ver no Cardápio</router-link
                >
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

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
  max-width: 1400px;
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid )"/></svg>');
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

.brand-badge {
  display: inline-block;
  margin-bottom: 2rem;
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

.hero-image-container {
  position: relative;
}

.hero-image {
  max-width: 100%;
  height: auto;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.image-placeholder {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  border-color: rgba(255, 107, 53, 0.6);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
}

.placeholder-content {
  color: #ff6b35;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.placeholder-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}

.placeholder-content p {
  font-size: 1rem;
  color: #b0b0b0;
  margin: 0;
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

.about {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-block h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.text-block p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #666;
  margin: 0;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid #ff6b35;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
}

.feature-content p {
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.specialties {
  padding: 8rem 0;
  background: white;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.specialty-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f1f3f4;
}

.specialty-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.card-header {
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 2rem;
  text-align: center;
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-image {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.card-content {
  padding: 2rem;
}

.card-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.card-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b35;
}

.card-link {
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #ff8c42;
}

.cta {
  position: relative;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grill" patternUnits="userSpaceOnUse" width="40" height="40"><rect width="40" height="2" fill="rgba(255,255,255,0.05 )" y="19"/></pattern></defs><rect width="100" height="100" fill="url(%23grill)"/></svg>');
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="chef-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23chef-pattern )"/></svg>');
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

.chef-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.chef-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}

.chef-content p {
  font-size: 1rem;
  color: #b0b0b0;
  margin: 0;
}

.chef-title {
  text-align: center;
  /* Centraliza o conteúdo */
  font-family: "Playfair Display", serif;
  /* Fonte elegante para o nome */
  color: #111;
  /* Cor padrão do texto */
  margin: 2rem 1rem;
}

.chef-name {
  font-size: 2.5rem;
  /* Nome maior */
  font-weight: bold;
  letter-spacing: 2px;
  /* Maiúsculas com espaçamento */
  margin: 0;
  color: #cfa15e;
  /* Dourado sofisticado */
}

.separator {
  width: 80px;
  height: 2px;
  background: linear-gradient(to right, #cfa15e, #5c1a1a);
  /* Degradê elegante */
  margin: 0.5rem auto;
  /* Centraliza a linha */
  border-radius: 1px;
}

.chef-subtitle {
  font-family: "Montserrat", sans-serif;
  /* Fonte moderna para subtítulo */
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  /* Cinza sofisticado */
  margin: 0.5rem 0 0 0;
  letter-spacing: 1px;
}

.story-text {
  max-width: 600px;
}

.story-header {
  display: flex;
  align-items: center;
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
}

.story-description {
  margin-bottom: 3rem;
}

.main-story {
  font-size: 1.125rem;
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.secondary-story {
  font-size: 1.125rem;
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 2rem;
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
}

.welcome-message:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  text-align: center;
}

.achievement-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.achievement-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 107, 53, 0.1),
    transparent
  );
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
  font-size: 2.5rem;
  font-weight: 900;
  color: #ff6b35;
  margin-bottom: 0.5rem;
}

.achievement-label {
  font-size: 0.875rem;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

/* Units Section */
.units {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.units-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 2rem 0;
}

.unit-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.unit-card:hover {
  transform: translateY(-5px);
}

.unit-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.unit-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.unit-card .unit-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

.unit-content {
  padding: 1rem 1.2rem;
}

.unit-content h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #8b0000;
  /* vermelho churrascaria */
}

.unit-address {
  color: #333;
  font-size: 0.95rem;
  margin: 0.6rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.unit-address i {
  color: #8b0000;
  font-size: 1.2rem;
}

.unit-actions {
  display: flex;
  gap: 0.8rem;
}

.btn-cardapio,
.btn-mapa {
  flex: 1;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;
}

/* Botão Cardápio */
.btn-cardapio {
  background: #8b0000;
  color: #fff;
}

.btn-cardapio:hover {
  background: #a40000;
}

/* Botão Mapa */
.btn-mapa {
  background: #eee;
  color: #333;
}

.btn-mapa:hover {
  background: #ddd;
}

.unit-card .unit-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
}

.unit-card .unit-address {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.unit-card .unit-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border: 2px solid #ff6b35;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: #ff6b35;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.unit-card .unit-link:hover {
  background: #ff6b35;
  color: white;
  border-color: #ff6b35;
  transform: translateY(-3px);
}

.unit-card.featured {
  grid-column: span 2;
  /* Make featured unit span two columns */
  flex-direction: row;
  /* Arrange content horizontally */
  align-items: center;
  text-align: left;
  padding: 0;
  /* Remove padding from the whole card */
}

.unit-card.featured .unit-image {
  width: 40%;
  /* Image takes 40% of the featured card width */
  height: 100%;
}

.unit-card.featured .unit-content {
  width: 60%;
  /* Content takes 60% of the featured card width */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.unit-card.featured .unit-content h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.unit-card.featured .unit-description {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.unit-card.featured .unit-link {
  padding: 0.875rem 1.5rem;
  border: 2px solid #ff6b35;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: #ff6b35;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.unit-card.featured .unit-link:hover {
  background: #ff6b35;
  color: white;
  border-color: #ff6b35;
  transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .title-main {
    font-size: 3.5rem;
  }

  .title-sub {
    font-size: 3rem;
  }

  .title-accent {
    font-size: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .specialties-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .chef-story .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .units-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .unit-card.featured {
    grid-column: span 1;
    /* Revert to single column for smaller screens */
    flex-direction: column;
    /* Revert to column layout */
    align-items: center;
    text-align: center;
  }

  .unit-card.featured .unit-image {
    width: 100%;
    height: 200px;
  }

  .unit-card.featured .unit-content {
    width: 100%;
    padding: 2rem;
  }

  .unit-card.featured .unit-content h3 {
    font-size: 2rem;
  }

  .unit-card.featured .unit-description {
    font-size: 1rem;
  }

  .unit-card.featured .unit-link {
    padding: 0.875rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .title-main {
    font-size: 2rem;
  }

  .title-sub {
    font-size: 1.8rem;
  }

  .title-accent {
    font-size: 1.5rem;
  }

  .title-accent {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .section-title,
  .cta h2 {
    font-size: 2.5rem;
  }

  .about,
  .specialties,
  .cta,
  .units {
    padding: 6rem 0;
  }

  .specialties-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .chef-story .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .story-header {
    justify-content: center;
  }

  .story-title {
    font-size: 2.5rem;
  }

  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .units-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .unit-card.featured {
    grid-column: span 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .unit-card.featured .unit-image {
    width: 100%;
    height: 200px;
  }

  .unit-card.featured .unit-content {
    width: 100%;
    padding: 2rem;
  }

  .unit-card.featured .unit-content h3 {
    font-size: 2rem;
  }

  .unit-card.featured .unit-description {
    font-size: 1rem;
  }

  .unit-card.featured .unit-link {
    padding: 0.875rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .title-main {
    font-size: 2.5rem;
  }

  .title-sub {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  .section-title,
  .cta h2 {
    font-size: 2rem;
  }

  .specialty-card {
    margin: 0 1rem;
  }

  .chef-story {
    padding: 6rem 0;
  }

  .story-title {
    font-size: 2rem;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .achievement-item {
    padding: 1.5rem 1rem;
  }

  .achievement-number {
    font-size: 2rem;
  }

  .unit-card.featured .unit-content h3 {
    font-size: 1.8rem;
  }

  .unit-card.featured .unit-description {
    font-size: 0.9rem;
  }

  .unit-card.featured .unit-link {
    padding: 0.875rem 1.5rem;
  }
}
</style>
