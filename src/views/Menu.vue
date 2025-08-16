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
            <div class="brand-logo">
              <span class="logo-text">DON</span>
              <span class="logo-accent">VITTORIO</span>
            </div>
            <h1 class="main-title">Cardápio Premium</h1>
            <p class="subtitle">Gastronomia feita no fogo</p>
          </div>

          <!-- Location Selector -->
          <div class="location-selector">
            <label for="location">Unidade</label>
            <div class="select-wrapper">
              <select id="location" v-model="selectedLocation" @change="updateLocation">
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

    <!-- Menu Categories -->
    <section class="menu-content">
      <div class="container">
        <!-- Category Navigation -->
        <nav class="category-nav">
          <div class="nav-container">
            <button v-for="category in categories" :key="category.id" :class="[
              'category-btn',
              { active: activeCategory === category.id },
            ]" @click="setActiveCategory(category.id)">
              <span class="btn-text">{{ category.name }}</span>
              <div class="btn-indicator"></div>
            </button>
          </div>
        </nav>

        <!-- Menu Items -->
        <div class="menu-items">
          <div v-for="category in categories" :key="category.id" v-show="activeCategory === category.id"
            class="category-section">
            <div class="category-header">
              <h2 :class="[
                'category-title',
                {
                  special:
                    category.id === 'ponto-carne' ||
                    category.id === 'don-vittorio-prime',
                },
              ]">
                {{ category.name }}
              </h2>
              <div class="category-line"></div>
            </div>

            <div class="items-grid">
              <div v-for="item in category.items" :key="item.id"
                :class="['menu-item', { 'info-item': item.price === 0 }]">
                <div class="item-image-container">
                  <img :src="item.image" :alt="item.name" class="item-photo" />
                  <div class="image-overlay"></div>
                  <div class="item-badge" v-if="item.combo">
                    <span class="badge-text">COMBO</span>
                  </div>
                  <div class="item-price-badge">
                    <span class="price-text">R$ {{ item.price.toFixed(2) }}</span>
                  </div>
                </div>
                <div class="item-content">
                  <div class="item-header">
                    <h3 class="item-name">{{ item.name }}</h3>
                    <div class="item-tags">
                      <span class="tag" v-if="item.combo">Combo Disponível</span>
                      <span class="tag premium" v-if="item.price > 40">Premium</span>
                    </div>
                  </div>
                  <p class="item-description">{{ item.description }}</p>

                  <!-- Doneness Levels Section -->
                  <div v-if="item.donenessLevels" class="doneness-section">
                    <h4 class="doneness-title">Níveis de Ponto</h4>
                    <div class="doneness-grid">
                      <div v-for="level in item.donenessLevels" :key="level.name" class="doneness-item">
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

                  <!-- <div class="item-actions">
                    <button class="add-btn" @click="addToOrder(item)">
                      <span class="btn-icon">+</span>
                      <span class="btn-text">Adicionar</span>
                    </button>
                    <div class="combo-info" v-if="item.combo">
                      <span class="combo-text"
                        >Combo: R$ {{ item.combo.toFixed(2) }}</span
                      >
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Order Summary -->
    <div v-if="orderItems.length > 0" class="order-summary">
      <div class="order-container">
        <div class="order-header">
          <h3>Seu Pedido</h3>
          <span class="item-count">{{ orderItems.length }} item{{
            orderItems.length > 1 ? "s" : ""
          }}</span>
        </div>
        <div class="order-items">
          <div v-for="(item, index) in orderItems" :key="index" class="order-item">
            <div class="order-item-info">
              <span class="order-item-name">{{ item.name }}</span>
              <span class="order-item-price">R$ {{ item.price.toFixed(2) }}</span>
            </div>
            <button @click="removeFromOrder(index)" class="remove-btn">
              <span>×</span>
            </button>
          </div>
        </div>
        <div class="order-footer">
          <div class="order-total">
            <span class="total-label">Total</span>
            <span class="total-amount">R$ {{ orderTotal }}</span>
          </div>
          <button class="finalize-btn" @click="finalizeOrder">
            <span class="btn-text">Finalizar Pedido</span>
            <span class="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      selectedLocation: "sudoeste",
      activeCategory: "ponto-carne",
      orderItems: [],
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
              image: "/images/ponto-carne.jpg.png",
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
              image: "/images/0.jpg",
            },
            {
              id: "ancho-don",
              name: "Ancho do DON",
              description:
                "250g (In natura) de Steak de Ancho grill, finalizado com sal de parrilla. Acompanha 40g de Farofa do DON® e 40g de Molho Chimichurri.",
              price: 40.0,
              image: "/src/public/images/1.jpg",
            },
            {
              id: "costelinha-don",
              name: "Costelinha do DON",
              description:
                "250g de Costelinha Suína defumada, finalizada com molho barbecue. Acompanha 40g de Farofa do DON®.",
              price: 40.0,
              image: "/src/public/images/2.jpg",
            },
            {
              id: "linguica-artesanal",
              name: "Linguiça Artesanal do DON",
              description:
                "300g de Linguiça de Costela bovina Angus Cara Preta® fininha, feita na brasa. Acompanha 40g de Farofa do DON® e 40g de molho chimichurri.",
              price: 40.0,
              image: "/src/public/images/3.jpg",
            },
            {
              id: "burger-don",
              name: "Burger do DON",
              description:
                "Hamburguer blend de 180g (in natura), pão brioche, queijo fatiado, maionese grill e molho barbecue, grelhado na Parrilla e cortado ao meio.",
              price: 34.0,
              image: "/src/public/images/4.jpg",
            },
            {
              id: "burger-bacon-don",
              name: "Burger bacon do DON",
              description:
                "Hamburguer blend de 180g (in natura), pão brioche, queijo fatiado, bacon maionese grill e molho barbecue, grelhado na Parrilla e cortado ao meio.",
              price: 37.0,
              image: "/src/public/images/5.jpg",
            },
            {
              id: "burger-frango",
              name: "Burger frango do DON",
              description:
                "2 patties de frango de 100g empanados, pão brioche, queijo fatiado, alface americana, cenoura ralada, mostarda e maionese grill.",
              price: 30.0,
              image: "/src/public/images/6.jpg",
            },
            {
              id: "croqueta-don",
              name: "Croqueta do DON",
              description:
                "06 unidades de 40g de Croqueta de Brisket (Peito Bovino) desfiado e tempero da casa, empanadas com farinha panko, servidas com maionese grill, molho barbecue e cebolinha fresca.",
              price: 35.0,
              image: "/src/public/images/7.jpg",
            },
            {
              id: "provoleta-don",
              name: "Provoleta do DON",
              description:
                "250g de provolone na brasa com cobertura de tomate-cereja em rodelas e folhas de manjericão Fresco.",
              price: 35.0,
              image: "/src/public/images/8.jpg",
            },
            {
              id: "batata-don",
              name: "Batata do DON",
              description:
                "400g de Batata frita palito crocante, finalizada com sal da casa, servida com 80g de Brisket (Peito Bovino) defumado desfiado, finalizada com cebolinha fresca e pimenta biquinho.",
              price: 40.0,
              image: "/src/public/images/9.jpg",
            },
            {
              id: "torresmo-don",
              name: "Torresmo do DON",
              description:
                "250g de Panceta Suína defumada em rolo, finalizada na Fritadeira, servida com gomos de limão.",
              price: 30.0,
              image: "/src/public/images/10.jpg",
            },
            {
              id: "pao-alho-don",
              name: "Pão de alho do DON",
              description:
                "2 unidades de pão de alho Santa Massa® exclusivo para DONVITTÓRIO, assados na brasa.",
              price: 20.0,
              image: "/src/public/images/11.jpg",
            },
            {
              id: "queijo-coalho-don",
              name: "Coalho do DON",
              description:
                "200g de queijo coalho assado, finalizado ao melaço de cana, à moda DONVITTÓRIO.",
              price: 25.0,
              image: "/src/public/images/12.jpg",
            },
            {
              id: "batata-frita-grande",
              name: "Batata frita",
              description:
                "Porção de Batata frita palito crocante, finalizada com sal da casa.",
              price: 30.0,
              image: "/src/public/images/13.jpg",
            },
            {
              id: "farofa-don",
              name: "Farofa do DON®",
              description:
                "100g da deliciosa Farofa do DON® , feita com farinha Panko, cebola tostada e manteiga de garrafa.",
              price: 8.0,
              image: "/src/public/images/14.jpg",
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
              image: "/src/public/images/15.jpg",
            },
            {
              id: "chorizo-don",
              name: "TER - Chorizo do DON",
              description:
                "250g (In natura) de steak de Chorizo grill, finalizado com sal de Parrilla. Acompanha 40g de Farofa do DON e 40g de molho Chimichurri.",
              price: 45.0,
              image: "/src/public/images/16.jpg",
            },
            {
              id: "galinhada-don-ter",
              name: "TER - Galinhada do DON",
              description:
                "300g da receita especial de galinhada, com o tempero especial de família do DON.",
              price: 20.0,
              image: "/src/public/images/17.jpg",
            },
            {
              id: "brisket-don-qua",
              name: "QUA - Brisket do DON",
              description:
                "250g do premiado Brisket (Peito Bovino) Angus, o 'rei do American Barbecue', defumado por 12 horas, finalizado com molho Barbecue. Acompanha 40g de Farofa do DON®.",
              price: 55.0,
              image: "/src/public/images/18.jpg",
            },
            {
              id: "galinhada-don-qui",
              name: "QUI - Galinhada do DON",
              description:
                "300g da receita especial de galinhada, com o tempero especial de família do DON.",
              price: 20.0,
              image: "/src/public/images/19.jpg",
            },
            {
              id: "pulled-pork-qui",
              name: "QUI - Pulled pork do DON",
              description:
                "150g de Copa Lombo Suína defumada desfiada, pão brioche, molho Barbecue e 40g de Coleslaw (salada cítrica de cenoura, repolhos, maionese e mostarda).",
              price: 28.0,
              image: "/src/public/images/20.jpg",
            },
            {
              id: "pulled-pork-sex",
              name: "SEX - Pulled pork do DON",
              description:
                "150g de Copa Lombo Suína defumada desfiada, pão brioche, molho Barbecue e 40g de Coleslaw (salada cítrica de cenoura, repolhos, maionese e mostarda).",
              price: 28.0,
              image: "/src/public/images/21.jpg",
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
              image: "/src/public/images/prime.jpg",
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
              image: "/src/public/images/22.jpg",
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
              image: "/src/public/images/23.jpg",
            },
            {
              id: "suco-frutas",
              name: "Suco de frutas",
              description: "Garrafa 300ml. Consulte sabores disponíveis.",
              price: 7.0,
              image: "/src/public/images/24.jpg",
            },
            {
              id: "suco-uva",
              name: "Suco de uva integral",
              description: "Garrafa 300ml.",
              price: 13.0,
              image: "/src/public/images/25.jpg",
            },
            {
              id: "refrigerante",
              name: "Refrigerante",
              description: "Lata 310ml. Consulte opções disponíveis.",
              price: 7.0,
              image: "/src/public/images/26.jpg",
            },
            {
              id: "refrigerante-zero",
              name: "Refrigerante sem açúcar",
              description: "Lata 310ml. Consulte opções disponíveis.",
              price: 7.0,
              image: "/src/public/images/27.jpg",
            },
            {
              id: "sprite-lemon",
              name: "Sprite Lemon Fresh",
              description: "Garrafa 500ml.",
              price: 8.0,
              image: "/src/public/images/28.jpg",
            },
            {
              id: "energetico",
              name: "Energético",
              description: "Lata 473ml. Consulte opções disponíveis.",
              price: 14.0,
              image: "/src/public/images/29.jpg",
            },
            {
              id: "agua-mineral",
              name: "Água mineral",
              description: "Garrafa 500ml.",
              price: 5.0,
              image: "/src/public/images/30.jpg",
            },
            {
              id: "agua-com-gas",
              name: "Água com gás",
              description: "Garrafa 500ml.",
              price: 6.0,
              image: "/src/public/images/31.jpg",
            },
            {
              id: "cafe-expresso",
              name: "Café expresso",
              description:
                "Cápsula Nespresso®. Consulte opções disponíveis. Curto 40ml Longo 110ml",
              price: 8.0,
              image: "/src/public/images/32.jpg",
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
              image: "/src/public/images/33.jpg",
            },
            {
              id: "long-neck",
              name: "Long neck",
              description: "Garrafa 330ml. Consulte opções disponíveis.",
              price: 12.0,
              image: "/src/public/images/34.jpg",
            },
            {
              id: "chopp-pilsen-quatro-poderes",
              name: "Chopp Pilsen Quatro Poderes®",
              description:
                "A essência do estilo Pilsen original, com baixo teor alcoólico e sabor característico. Se destaca pela leveza, amargor marcante dos lúpulos tchecos e aromas de pão fresco do malte. Parceria exclusiva Quatro Poderes e DONVITTORIO.",
              price: 12.0,
              image: "/src/public/images/35.jpg",
            },
            {
              id: "chopp-ipa-quatro-poderes",
              name: "Chopp IPA Quatro Poderes®",
              description:
                "Uma cerveja forte e aromática, com seu amargor pronunciado e aroma intenso de lúpulo, a IPA tornou-se um dos estilos mais populares entre os amantes de cerveja artesanal. Parceria exclusiva Quatro Poderes e DONVITTORIO.",
              price: 15.0,
              image: "/src/public/images/36.jpg",
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
              image: "/src/public/images/37.jpg",
            },
            {
              id: "siciliana",
              name: "Siciliana®",
              description:
                "Gin, bitter, limão siciliano e xarope de açúcar. (Imagem ilustrativa).",
              price: 28.0,
              image: "/src/public/images/38.jpg",
            },
            {
              id: "spritz",
              name: "Spritz",
              description:
                "Aperol, espumante, água com gás. Servido com rodela de laranja.",
              price: 32.0,
              image: "/src/public/images/39.jpg",
            },
            {
              id: "moscow-mule",
              name: "Moscow mule",
              description:
                "Vodka, espuma de gengibre, suco de limão. Finalizado com rodelas de limão.",
              price: 24.0,
              image: "/src/public/images/40.jpg",
            },
            {
              id: "caipiroska",
              name: "Caipiroska",
              description:
                "Vodka, açúcar (ou adoçante), e fruta macerada. Servido com gelo. Sabores: Limão, Maracujá e Morango.",
              price: 26.0,
              image: "/src/public/images/41.jpg",
            },
            {
              id: "caipirinha",
              name: "Caipirinha",
              description:
                "Cachaça, açúcar (ou adoçante), e fruta macerada. Servido com gelo. Sabores: Limão, Maracujá e Morango.",
              price: 20.0,
              image: "/src/public/images/42.jpg",
            },
            {
              id: "da-casa-gin",
              name: "Da Casa® - Gin",
              description:
                "Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.",
              price: 38.0,
              image: "/src/public/images/43.jpg",
            },
            {
              id: "da-casa-vodka",
              name: "Da Casa® - Vodka",
              description:
                "Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.",
              price: 36.0,
              image: "/src/public/images/44.jpg",
            },
            {
              id: "da-casa-whisky",
              name: "Da Casa® - Whisky",
              description:
                "Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.",
              price: 39.0,
              image: "/src/public/images/45.jpg",
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
              image: "/src/public/images/46.jpg",
            },
            {
              id: "whisky-old-parr",
              name: "Whisky Old Parr",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 30.0,
              image: "/src/public/images/47.jpg",
            },
            {
              id: "whiskey-jack-daniels",
              name: "Whiskey Jack Daniels",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 38.0,
              image: "/src/public/images/48.jpg",
            },
            {
              id: "vodka-smirnoff",
              name: "Vodka Smirnoff",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 25.0,
              image: "/src/public/images/49.jpg",
            },
            {
              id: "cachaca-cabare",
              name: "Cachaça Cabaré",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 12.0,
              image: "/src/public/images/50.jpg",
            },
            {
              id: "cachaca-sagatiba",
              name: "Cachaça Sagatiba",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 12.0,
              image: "/src/public/images/51.jpg",
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
              image: "/src/public/images/vinhos.jpg",
            },
          ],
        },
      ],
    };
  },
  computed: {
    orderTotal() {
      return this.orderItems
        .reduce((total, item) => total + parseFloat(item.price), 0)
        .toFixed(2);
    },
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    updateLocation() {
      this.$router.push(`/menu/${this.selectedLocation}`);
    },
    addToOrder(item) {
      this.orderItems.push({ ...item });
    },
    removeFromOrder(index) {
      this.orderItems.splice(index, 1);
    },
    finalizeOrder() {
      alert(
        `Pedido finalizado! Total: R$ ${this.orderTotal}\n\nObrigado por escolher o Don Vittorio!`
      );
      this.orderItems = [];
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
/* Reset and Base Styles */
* {
  box-sizing: border-box;
}

.menu {
  min-height: 100vh;
  background: white;
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
      rgba(255, 107, 53, 0.1) 0%,
      rgba(255, 107, 53, 0.05) 100%);
}

.header-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="chef-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23chef-pattern)"/></svg>');
  opacity: 0.2;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
      rgba(255, 107, 53, 0.1) 0%,
      rgba(255, 107, 53, 0.05) 100%);
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

.title-accent {
  color: #ff6b35;
  position: relative;
}

.title-accent::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35, #ff8c42);
  border-radius: 2px;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  color: #b0b0b0;
  margin: 0;
  letter-spacing: 0.02em;
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
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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
  position: relative;
  padding: 1.25rem 2.5rem;
  border: none;
  background: white;
  color: #666;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  min-width: 180px;
}

.category-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 107, 53, 0.1),
      transparent);
  transition: left 0.5s ease;
}

.category-btn:hover::before {
  left: 100%;
}

.category-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  color: #ff6b35;
}

.category-btn.active {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.3);
}

.btn-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: #ff6b35;
  transition: width 0.3s ease;
}

.category-btn.active .btn-indicator {
  width: 60%;
}

.category-btn {
  position: relative;
  padding: 1.25rem 2.5rem;
  border: none;
  background: white;
  color: #666;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  min-width: 180px;
}

.category-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 107, 53, 0.1),
      transparent);
  transition: left 0.5s ease;
}

.category-btn:hover::before {
  left: 100%;
}

.category-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  color: #ff6b35;
}

.category-btn.active {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.3);
}

.btn-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: #ff6b35;
  transition: width 0.3s ease;
}

.category-btn.active .btn-indicator {
  width: 60%;
}

/* Category Section */
.category-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.category-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  position: relative;
}

.category-title::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #ff6b35, #ff8c42);
  border-radius: 1px;
}

.category-title.special {
  color: #ff6b35;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.category-title.special::before {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35, #ff8c42, #ff6b35);
}

.category-line {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #ff8c42);
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
}

/* Menu Items Grid */
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
}

/* Menu Item */
.menu-item {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 107, 53, 0.2);
}

.item-image-container {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.item-image-container.loading::before {
  opacity: 1;
}

.item-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Mantém proporção, preenche sem distorção */
  object-position: center;
  transition: transform 0.4s ease;
  display: block;
}

.menu-item:hover .item-photo {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
}

.item-badge {
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
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  z-index: 2;
}

.item-price-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 2;
  backdrop-filter: blur(10px);
}

.item-content {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.item-header {
  margin-bottom: 1rem;
}

.item-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  line-height: 1.2;
}

.item-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 107, 53, 0.1);
  color: #ff6b35;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tag.premium {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
}

.item-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
  font-size: 0.95rem;
}

.menu-item.info-item {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  border: 2px solid rgba(255, 107, 53, 0.3);
  grid-column: 1 / -1;
}

.menu-item.info-item .item-content {
  text-align: center;
  padding: 3rem 2rem;
}

.menu-item.info-item .item-name {
  color: #ff6b35;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.menu-item.info-item .item-description {
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.8;
}

.menu-item.info-item .item-price-badge {
  display: none;
}

.menu-item.info-item .item-actions {
  display: none;
}

/* Doneness Levels Section */
.doneness-section {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg,
      rgba(255, 107, 53, 0.05) 0%,
      rgba(255, 140, 66, 0.05) 100%);
  border-radius: 16px;
  border: 1px solid rgba(255, 107, 53, 0.1);
}

.doneness-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b35;
  margin: 0 0 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.doneness-grid {
  display: grid;
  gap: 1rem;
}

.doneness-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ff6b35;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.doneness-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.15);
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
  color: #1a1a1a;
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
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .items-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .item-image-container {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .items-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .item-image-container {
    height: 220px;
  }

  .item-content {
    padding: 1.5rem;
  }

  .item-name {
    font-size: 1.25rem;
  }

  .doneness-section {
    padding: 1.5rem;
  }

  .doneness-title {
    font-size: 1.25rem;
  }

  .doneness-item {
    padding: 1rem;
  }

  .doneness-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .items-grid {
    gap: 1rem;
  }

  .item-image-container {
    height: 200px;
  }

  .item-content {
    padding: 1rem;
  }

  .item-name {
    font-size: 1.125rem;
  }

  .item-description {
    font-size: 0.9rem;
  }
}
</style>
