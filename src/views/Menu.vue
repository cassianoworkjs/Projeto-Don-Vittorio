<template>
  <div class="menu">
    <!-- Menu Header -->
    <section class="menu-header">
      <div class="header-background">
        <div class="header-overlay"></div>
        <div class="header-pattern"></div>
      </div>
      <div class="container">
        <div class="header-content">
          <div class="brand-section">
            <h1 class="main-title">Cardápio Premium</h1>
            <p class="subtitle">Gastronomia feita no fogo</p>
          </div>

          <!-- Location Selector -->
          <div class="location-selector">
            <label for="location">Unidade</label>
            <div class="select-wrapper">
              <select
                id="location"
                v-model="selectedLocation"
                @change="updateLocation"
              >
                <option value="sudoeste">Sudoeste</option>
                <option value="jardim">Jardim Botânico</option>
                <option value="buffet">Buffet para Eventos</option>
              </select>
              <div class="select-arrow">▼</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Content -->
    <section class="menu-content">
      <div class="container">
        <!-- Category Navigation -->
        <nav class="category-nav">
          <div class="nav-container">
            <button
              v-for="category in categories"
              :key="category.id"
              :class="[
                'category-btn',
                { active: activeCategory === category.id },
              ]"
              @click="setActiveCategory(category.id)"
            >
              <span class="btn-text">{{ category.name }}</span>
            </button>
          </div>
        </nav>

        <!-- Menu Items Gallery -->
        <div class="menu-gallery">
          <div
            v-for="category in categories"
            :key="category.id"
            v-show="activeCategory === category.id"
            class="category-section"
          >
            <!-- Special Info Items -->
            <div
              v-if="
                category.id === 'ponto-carne' ||
                category.id === 'don-vittorio-prime'
              "
              class="info-section"
            >
              <div class="info-card">
                <div class="info-image">
                  <img
                    :src="category.items[0].image"
                    :alt="category.items[0].name"
                  />
                </div>
                <div class="info-content">
                  <h2 class="info-title">{{ category.items[0].name }}</h2>
                  <p class="info-description">
                    {{ category.items[0].description }}
                  </p>

                  <!-- Doneness Levels for Ponto da Carne -->
                  <div
                    v-if="
                      category.id === 'ponto-carne' &&
                      category.items[0].donenessLevels
                    "
                    class="doneness-section"
                  >
                    <h3 class="doneness-title">Níveis de Ponto</h3>
                    <div class="doneness-grid">
                      <div
                        v-for="level in category.items[0].donenessLevels"
                        :key="level.name"
                        class="doneness-item"
                      >
                        <div class="doneness-header">
                          <span class="doneness-name">{{ level.name }}</span>
                          <span class="doneness-time">{{ level.time }}</span>
                        </div>
                        <p class="doneness-description">
                          {{ level.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regular Menu Items -->
            <div v-else class="menu-grid">
              <div
                v-for="item in category.items"
                :key="item.id"
                class="menu-item"
              >
                <div class="menu-image">
                  <img :src="item.image" :alt="item.name" />
                  <div class="menu-overlay">
                    <div class="overlay-content">
                      <h3>{{ item.name }}</h3>
                      <p>{{ item.description }}</p>
                      <span class="price">R$ {{ item.price.toFixed(2) }}</span>
                      <div class="overlay-badges">
                        <span v-if="item.combo" class="badge combo">Combo</span>
                        <span v-if="item.price > 40" class="badge premium"
                          >Premium</span
                        >
                        <span v-if="item.price <= 20" class="badge tradicional"
                          >Tradicional</span
                        >
                        <span
                          v-if="item.price > 20 && item.price <= 40"
                          class="badge especial"
                          >Especial</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      selectedLocation: "sudoeste",
      activeCategory: "ponto-carne",
      categories: [
        {
          id: "ponto-carne",
          name: "PONTO DA CARNE",
          items: [
            {
              id: "ponto-carne-info",
              name: "O ponto da carne",
              description: "Preparamos de acordo com seu gosto. Escolha o seu.",
              price: 0,
              image: "../public/images/ponto-carne.jpg.png",
              donenessLevels: [
                {
                  name: "Mal passado",
                  time: "15-20 min",
                  description: "Carne muito vermelha, quase roxa no interior",
                },
                {
                  name: "Ponto menos",
                  time: "15-20 min",
                  description:
                    "Interior vermelho brilhante, menos intenso que mal passado",
                },
                {
                  name: "Ao ponto",
                  time: "20-25 min",
                  description:
                    "Predominantemente rosa com pequeno centro vermelho",
                },
                {
                  name: "Ponto mais",
                  time: "30-35 min",
                  description:
                    "Rosa claro a marrom-acinzentado, mínimo vermelho",
                },
                {
                  name: "Bem passado",
                  time: "35-40 min",
                  description:
                    "Interior uniformemente marrom-acinzentado, sem rosa ou vermelho",
                },
              ],
            },
          ],
        },
        {
          id: "don-todo-dia",
          name: "O DON DE TODO DIA",
          items: [
            {
              id: "carreteiro-don",
              name: "Carreteiro do DON",
              description:
                "300g do delicioso Arroz Carreteiro feito com Bacon, Linguiça Calabresa e Brisket (Peito Bovino) ou Cupim Defumados, Tomate Pelatti, Tempero da Casa. Finalizado com Cebolinha Fresca e Pimenta Biquinho.",
              price: 25.0,
              image: "../public/images/0.jpg",
            },
            {
              id: "ancho-don",
              name: "Ancho do DON",
              description:
                "250g (In natura) de Steak de Ancho grill, finalizado com sal de parrilla. Acompanha 40g de Farofa do DON® e 40g de Molho Chimichurri.",
              price: 40.0,
              image: "../public/images/1.jpg",
            },
            {
              id: "costelinha-don",
              name: "Costelinha do DON",
              description:
                "250g de Costelinha Suína defumada, finalizada com molho barbecue. Acompanha 40g de Farofa do DON®.",
              price: 40.0,
              image: "../public/images/2.jpg",
            },
            {
              id: "linguica-artesanal",
              name: "Linguiça Artesanal do DON",
              description:
                "300g de Linguiça de Costela bovina Angus Cara Preta® fininha, feita na brasa. Acompanha 40g de Farofa do DON® e 40g de molho chimichurri.",
              price: 40.0,
              image: "../public/images/3.jpg",
            },
            {
              id: "burger-don",
              name: "Burger do DON",
              description:
                "Hamburguer blend de 180g (in natura), pão brioche, queijo fatiado, maionese grill e molho barbecue, grelhado na Parrilla e cortado ao meio.",
              price: 34.0,
              image: "../public/images/4.jpg",
            },
            {
              id: "burger-bacon-don",
              name: "Burger bacon do DON",
              description:
                "Hamburguer blend de 180g (in natura), pão brioche, queijo fatiado, bacon maionese grill e molho barbecue, grelhado na Parrilla e cortado ao meio.",
              price: 37.0,
              image: "../public/images/5.jpg",
            },
            {
              id: "burger-frango",
              name: "Burger frango do DON",
              description:
                "2 patties de frango de 100g empanados, pão brioche, queijo fatiado, alface americana, cenoura ralada, mostarda e maionese grill.",
              price: 30.0,
              image: "../public/images/6.jpg",
            },
            {
              id: "croqueta-don",
              name: "Croqueta do DON",
              description:
                "06 unidades de 40g de Croqueta de Brisket (Peito Bovino) desfiado e tempero da casa, empanadas com farinha panko, servidas com maionese grill, molho barbecue e cebolinha fresca.",
              price: 35.0,
              image: "../public/images/7.jpg",
            },
            {
              id: "provoleta-don",
              name: "Provoleta do DON",
              description:
                "250g de provolone na brasa com cobertura de tomate-cereja em rodelas e folhas de manjericão Fresco.",
              price: 35.0,
              image: "../public/images/8.jpg",
            },
            {
              id: "batata-don",
              name: "Batata do DON",
              description:
                "400g de Batata frita palito crocante, finalizada com sal da casa, servida com 80g de Brisket (Peito Bovino) defumado desfiado, finalizada com cebolinha fresca e pimenta biquinho.",
              price: 40.0,
              image: "../public/images/9.jpg",
            },
            {
              id: "torresmo-don",
              name: "Torresmo do DON",
              description:
                "250g de Panceta Suína defumada em rolo, finalizada na Fritadeira, servida com gomos de limão.",
              price: 30.0,
              image: "../public/images/10.jpg",
            },
            {
              id: "pao-alho-don",
              name: "Pão de alho do DON",
              description:
                "2 unidades de pão de alho Santa Massa® exclusivo para DONVITTÓRIO, assados na brasa.",
              price: 20.0,
              image: "../public/images/11.jpg",
            },
            {
              id: "queijo-coalho-don",
              name: "Coalho do DON",
              description:
                "200g de queijo coalho assado, finalizado ao melaço de cana, à moda DONVITTÓRIO.",
              price: 25.0,
              image: "../public/images/12.jpg",
            },
            {
              id: "batata-frita-grande",
              name: "Batata frita",
              description:
                "Porção de Batata frita palito crocante, finalizada com sal da casa.",
              price: 30.0,
              image: "../public/images/13.jpg",
            },
            {
              id: "farofa-don",
              name: "Farofa do DON®",
              description:
                "100g da deliciosa Farofa do DON® , feita com farinha Panko, cebola tostada e manteiga de garrafa.",
              price: 8.0,
              image: "../public/images/14.jpg",
            },
          ],
        },
        {
          id: "cada-dia-don",
          name: "CADA DIA UM DON",
          items: [
            {
              id: "picanha-don",
              name: "SEG - Picanha do DON",
              description:
                "250g (In natura) de steak de Picanha grill, finalizado com sal de parrilla. Acompanha 40g de Farofa do DON® e 40g de molho Chimichurri.",
              price: 60.0,
              image: "../public/images/15.jpg",
            },
            {
              id: "chorizo-don",
              name: "TER - Chorizo do DON",
              description:
                "250g (In natura) de steak de Chorizo grill, finalizado com sal de Parrilla. Acompanha 40g de Farofa do DON e 40g de molho Chimichurri.",
              price: 45.0,
              image: "../public/images/16.jpg",
            },
            {
              id: "galinhada-don-ter",
              name: "TER - Galinhada do DON",
              description:
                "300g da receita especial de galinhada, com o tempero especial de família do DON.",
              price: 20.0,
              image: "../public/images/17.jpg",
            },
            {
              id: "brisket-don-qua",
              name: "QUA - Brisket do DON",
              description:
                "250g do premiado Brisket (Peito Bovino) Angus, o 'rei do American Barbecue', defumado por 12 horas, finalizado com molho Barbecue. Acompanha 40g de Farofa do DON®.",
              price: 55.0,
              image: "../public/images/18.jpg",
            },
            {
              id: "galinhada-don-qui",
              name: "QUI - Galinhada do DON",
              description:
                "300g da receita especial de galinhada, com o tempero especial de família do DON.",
              price: 20.0,
              image: "../public/images/19.jpg",
            },
            {
              id: "pulled-pork-qui",
              name: "QUI - Pulled pork do DON",
              description:
                "150g de Copa Lombo Suína defumada desfiada, pão brioche, molho Barbecue e 40g de Coleslaw (salada cítrica de cenoura, repolhos, maionese e mostarda).",
              price: 28.0,
              image: "../public/images/20.jpg",
            },
            {
              id: "pulled-pork-sex",
              name: "SEX - Pulled pork do DON",
              description:
                "150g de Copa Lombo Suína defumada desfiada, pão brioche, molho Barbecue e 40g de Coleslaw (salada cítrica de cenoura, repolhos, maionese e mostarda).",
              price: 28.0,
              image: "../public/images/21.jpg",
            },
          ],
        },
        {
          id: "don-vittorio-prime",
          name: "DON VITTORIO PRIME",
          items: [
            {
              id: "prime-info",
              name: "EM BREVE - Linha exclusiva",
              description:
                "Linha exclusiva, com cortes premium de carne bovina das raças ANGUS e WAGYU.",
              price: 0,
              image: "../public/images/Don-Vittorio.png",
            },
          ],
        },
        {
          id: "sobremesas",
          name: "SOBREMESA",
          items: [
            {
              id: "panqueca-don",
              name: "Panqueca do DON",
              description:
                "Panqueca recheada com doce de leite La Serenissima®, selada à ferro na mesa. Acompanha sorvete de creme e hortelã fresco.",
              price: 26.0,
              image: "../public/images/22.jpg",
            },
          ],
        },
        {
          id: "bebidas",
          name: "BEBIDAS",
          items: [
            {
              id: "soda-don",
              name: "Soda do DON",
              description: "Soda italiana 300ml. Consulte sabores disponíveis.",
              price: 11.0,
              image: "../public/images/23.jpg",
            },
            {
              id: "suco-frutas",
              name: "Suco de frutas",
              description: "Garrafa 300ml. Consulte sabores disponíveis.",
              price: 7.0,
              image: "../public/images/24.jpg",
            },
            {
              id: "suco-uva",
              name: "Suco de uva integral",
              description: "Garrafa 300ml.",
              price: 13.0,
              image: "../public/images/25.jpg",
            },
            {
              id: "refrigerante",
              name: "Refrigerante",
              description: "Lata 310ml. Consulte opções disponíveis.",
              price: 7.0,
              image: "../public/images/26.jpg",
            },
            {
              id: "refrigerante-zero",
              name: "Refrigerante sem açúcar",
              description: "Lata 310ml. Consulte opções disponíveis.",
              price: 7.0,
              image: "../public/images/27.jpg",
            },
            {
              id: "sprite-lemon",
              name: "Sprite Lemon Fresh",
              description: "Garrafa 500ml.",
              price: 8.0,
              image: "../public/images/28.jpg",
            },
            {
              id: "energetico",
              name: "Energético",
              description: "Lata 473ml. Consulte opções disponíveis.",
              price: 14.0,
              image: "../public/images/29.jpg",
            },
            {
              id: "agua-mineral",
              name: "Água mineral",
              description: "Garrafa 500ml.",
              price: 5.0,
              image: "../public/images/30.jpg",
            },
            {
              id: "agua-com-gas",
              name: "Água com gás",
              description: "Garrafa 500ml.",
              price: 6.0,
              image: "../public/images/31.jpg",
            },
            {
              id: "cafe-expresso",
              name: "Café expresso",
              description:
                "Cápsula Nespresso®. Consulte opções disponíveis. Curto 40ml Longo 110ml",
              price: 8.0,
              image: "../public/images/32.jpg",
            },
          ],
        },
        {
          id: "cervejas",
          name: "CERVEJAS",
          items: [
            {
              id: "baden-baden",
              name: "Baden Baden®",
              description:
                "Garrafa 600ml. Opções: Pilsen, IPA, Witbier e Golden.",
              price: 27.0,
              image: "../public/images/33.jpg",
            },
            {
              id: "long-neck",
              name: "Long neck",
              description: "Garrafa 330ml. Consulte opções disponíveis.",
              price: 12.0,
              image: "../public/images/34.jpg",
            },
            {
              id: "chopp-pilsen-quatro-poderes",
              name: "Chopp Pilsen Quatro Poderes®",
              description:
                "A essência do estilo Pilsen original, com baixo teor alcoólico e sabor característico. Se destaca pela leveza, amargor marcante dos lúpulos tchecos e aromas de pão fresco do malte. Parceria exclusiva Quatro Poderes e DONVITTORIO.",
              price: 12.0,
              image: "../public/images/35.jpg",
            },
            {
              id: "chopp-ipa-quatro-poderes",
              name: "Chopp IPA Quatro Poderes®",
              description:
                "Uma cerveja forte e aromática, com seu amargor pronunciado e aroma intenso de lúpulo, a IPA tornou-se um dos estilos mais populares entre os amantes de cerveja artesanal. Parceria exclusiva Quatro Poderes e DONVITTORIO.",
              price: 15.0,
              image: "../public/images/36.jpg",
            },
          ],
        },
        {
          id: "drinks",
          name: "DRINKS",
          items: [
            {
              id: "vittorio-drink",
              name: "Vittório®",
              description:
                "Vodka, água tônica, redução de maracujá e morango. (Imagem ilustrativa).",
              price: 38.0,
              image: "../public/images/37.jpg",
            },
            {
              id: "siciliana",
              name: "Siciliana®",
              description:
                "Gin, bitter, limão siciliano e xarope de açúcar. (Imagem ilustrativa).",
              price: 28.0,
              image: "../public/images/38.jpg",
            },
            {
              id: "spritz",
              name: "Spritz",
              description:
                "Aperol, espumante, água com gás. Servido com rodela de laranja.",
              price: 32.0,
              image: "../public/images/39.jpg",
            },
            {
              id: "moscow-mule",
              name: "Moscow mule",
              description:
                "Vodka, espuma de gengibre, suco de limão. Finalizado com rodelas de limão.",
              price: 24.0,
              image: "../public/images/40.jpg",
            },
            {
              id: "caipiroska",
              name: "Caipiroska",
              description:
                "Vodka, açúcar (ou adoçante), e fruta macerada. Servido com gelo. Sabores: Limão, Maracujá e Morango.",
              price: 26.0,
              image: "../public/images/41.jpg",
            },
            {
              id: "caipirinha",
              name: "Caipirinha",
              description:
                "Cachaça, açúcar (ou adoçante), e fruta macerada. Servido com gelo. Sabores: Limão, Maracujá e Morango.",
              price: 20.0,
              image: "../public/images/42.jpg",
            },
            {
              id: "da-casa-gin",
              name: "Da Casa® - Gin",
              description:
                "Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.",
              price: 38.0,
              image: "../public/images/43.jpg",
            },
            {
              id: "da-casa-vodka",
              name: "Da Casa® - Vodka",
              description:
                "Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.",
              price: 36.0,
              image: "../public/images/44.jpg",
            },
            {
              id: "da-casa-whisky",
              name: "Da Casa® - Whisky",
              description:
                "Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.",
              price: 39.0,
              image: "../public/images/45.jpg",
            },
          ],
        },
        {
          id: "doses",
          name: "DOSES",
          items: [
            {
              id: "bitter-campari",
              name: "Bitter Campari",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 28.0,
              image: "../public/images/46.jpg",
            },
            {
              id: "whisky-old-parr",
              name: "Whisky Old Parr",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 30.0,
              image: "../public/images/47.jpg",
            },
            {
              id: "whiskey-jack-daniels",
              name: "Whiskey Jack Daniels",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 38.0,
              image: "../public/images/48.jpg",
            },
            {
              id: "vodka-smirnoff",
              name: "Vodka Smirnoff",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 25.0,
              image: "../public/images/49.jpg",
            },
            {
              id: "cachaca-cabare",
              name: "Cachaça Cabaré",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 12.0,
              image: "../public/images/50.jpg",
            },
            {
              id: "cachaca-sagatiba",
              name: "Cachaça Sagatiba",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 12.0,
              image: "../public/images/51.jpg",
            },
          ],
        },
        {
          id: "vinhos",
          name: "VINHOS",
          items: [
            {
              id: "vinhos-info",
              name: "CONSULTE NOSSA CARTA DE VINHOS",
              description:
                "A Del Maipo® traz rótulos especialmente selecionados para uma combinação perfeita com os sabores do DON. | TROUXE SEU VINHO? Nossa taxa de rolha é de R$ 60,00.",
              price: 0,
              image: "../public/images/Don-Vittorio.png",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    updateLocation() {
      this.$router.push(`/menu/${this.selectedLocation}`);
    },
  },
  mounted() {
    if (this.$route.params.location) {
      this.selectedLocation = this.$route.params.location;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

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

.menu {
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

/* Menu Header */
.menu-header {
  position: relative;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
  color: white;
  padding: 6rem 0 4rem;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.header-overlay {
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

.header-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.brand-section {
  flex: 1;
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

.main-title {
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  color: #ff6b35;
  margin: 0;
  letter-spacing: 0.05em;
}

/* Location Selector */
.location-selector {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.location-selector label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.select-wrapper {
  position: relative;
  display: inline-block;
}

.location-selector select {
  appearance: none;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
}

.location-selector select:hover {
  border-color: rgba(255, 107, 53, 0.5);
  background: rgba(255, 255, 255, 0.15);
}

.location-selector select:focus {
  outline: none;
  border-color: #ff6b35;
  background: rgba(255, 255, 255, 0.2);
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #b0b0b0;
  font-size: 0.75rem;
  pointer-events: none;
  transition: color 0.3s ease;
}

/* Menu Content */
.menu-content {
  padding: 5rem 0;
  background: white;
}

/* Category Navigation */
.category-nav {
  margin-bottom: 4rem;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.category-btn {
  background: rgba(255, 107, 53, 0.1);
  color: #ff6b35;
  border: 2px solid rgba(255, 107, 53, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-btn:hover,
.category-btn.active {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border-color: #ff6b35;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

/* Info Section */
.info-section {
  margin-bottom: 4rem;
}

.info-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 107, 53, 0.3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
}

.info-image {
  position: relative;
  overflow: hidden;
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-content {
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: #ff6b35;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.info-description {
  font-size: 1.125rem;
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Doneness Section */
.doneness-section {
  margin-top: 2rem;
}

.doneness-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b35;
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.doneness-grid {
  display: grid;
  gap: 1rem;
}

.doneness-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ff6b35;
  transition: all 0.3s ease;
}

.doneness-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.doneness-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.doneness-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.doneness-time {
  background: #ff6b35;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.doneness-description {
  color: #b0b0b0;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.menu-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
}

.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.menu-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.menu-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.menu-item:hover .menu-image img {
  transform: scale(1.1);
}

.menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.menu-item:hover .menu-overlay {
  opacity: 1;
}

.overlay-content {
  padding: 2rem;
  color: white;
  width: 100%;
}

.overlay-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}

.overlay-content p {
  font-size: 0.95rem;
  color: #e0e0e0;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.overlay-content .price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ff6b35;
  display: block;
  margin-bottom: 1rem;
}

.overlay-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge.premium {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
}

.badge.combo {
  background: linear-gradient(135deg, #9932cc 0%, #ba55d3 100%);
  color: white;
}

.badge.tradicional {
  background: linear-gradient(135deg, #228b22 0%, #32cd32 100%);
  color: white;
}

.badge.especial {
  background: linear-gradient(135deg, #ff1493 0%, #ff69b4 100%);
  color: white;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .info-card {
    grid-template-columns: 1fr;
  }

  .info-image {
    height: 300px;
  }

  .menu-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .category-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .logo-text,
  .logo-accent {
    font-size: 2rem;
  }

  .info-content {
    padding: 2rem;
  }

  .info-title {
    font-size: 2rem;
  }

  .menu-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .category-nav {
    margin-bottom: 3rem;
  }

  .nav-container {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .category-btn {
    width: 100%;
    max-width: 250px;
    padding: 0.75rem 1rem;
  }

  .doneness-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .info-content {
    padding: 1.5rem;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .overlay-content {
    padding: 1.5rem;
  }

  .overlay-content h3 {
    font-size: 1.25rem;
  }

  .overlay-content p {
    font-size: 0.9rem;
  }
}
</style>
