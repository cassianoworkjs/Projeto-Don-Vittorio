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
                <!-- <option value="buffet">Buffet para Eventos</option> -->
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
                { active: activeCategoryId === category.id },
              ]"
              @click="setActiveCategory(category.id)"
              :aria-pressed="activeCategoryId === category.id"
              type="button"
            >
              <span class="btn-text">{{ category.name }}</span>
            </button>
          </div>
        </nav>

        <!-- Important Notes -->
        <div
          class="info-notes"
          :class="{ opened: showInfoNotes }"
          role="button"
          tabindex="0"
          @click="toggleInfoNotes"
          @keyup.enter.space="toggleInfoNotes"
          aria-expanded="showInfoNotes"
          aria-controls="info-notes-list"
        >
          <div class="info-notes-header">
            <h3>Informações importantes</h3>
            <span class="info-notes-caret" :class="{ rotated: showInfoNotes }">▼</span>
          </div>
          <ul id="info-notes-list" v-show="showInfoNotes">
            <li>O tempo de preparo varia conforme o prato e a fila de pedidos.</li>
            <li>Adicionais: Extra burger R$ 15.</li>
            <li>Molhos (Chimichurri, Barbecue, Maionese grill, Mostarda, Catchup) R$ 3.</li>
            <li>Embalagem para viagem R$ 3.</li>
            <li>A taxa de serviço é opcional.</li>
            <li>Incentivamos a acrescentar 10% ao valor final de sua conta, como agradecimento ao nosso time.</li>
            <li>Sugestões: Entre em contato conosco através de nossos canais digitais.</li>
            <li>Agradecemos a preferência.</li>
          </ul>
        </div>

        <!-- Menu Items Gallery -->
        <div class="menu-gallery">
          <div
            v-for="category in categories"
            :key="category.id"
            v-show="activeCategoryId === category.id"
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
            <div v-else>
              <!-- NEW: Indicators for mobile -->
              <div v-if="isMobile" class="hint-label-container">
                <span class="hint-label">
                  <span class="hint-icon"></span>
                  Toque para ver detalhes
                </span>
              </div>
              <div class="menu-grid">
                <div
                  v-for="item in category.items"
                  :key="item.id"
                  class="menu-item"
                  :class="{ 'menu-item--constrained': item.id === 'panqueca-don' }"
                  @click="selectItem(item)"
                >
                  <div class="menu-image">
                    <img :src="item.image" :alt="item.name" />
                    

                    <div class="menu-overlay">
                      <div class="overlay-content">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                        <span
                          v-if="item.id !== 'vinhos-info' && item.price > 0"
                          class="price"
                        >
                          R$ {{ item.price.toFixed(2) }}
                        </span>
                        <div class="overlay-badges">
                          <span v-if="item.combo" class="badge combo"
                            >Combo</span
                          >
                          <span v-if="item.price > 40" class="badge premium"
                            >Premium</span
                          >
                          <span
                            v-if="item.price <= 20"
                            class="badge tradicional"
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
      </div>
    </section>

    <!-- Item Modal -->
    <div v-if="showItemModal" class="modal-overlay" @click="closeItemModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeItemModal">×</button>
        <div class="modal-image">
          <img :src="selectedItem?.image" :alt="selectedItem?.name" />
        </div>
        <div class="modal-info">
          <h2 class="modal-title">{{ selectedItem?.name }}</h2>
          <p class="modal-description">{{ selectedItem?.description }}</p>
          <div
            v-if="selectedItem?.id !== 'vinhos-info' && (selectedItem?.price || 0) > 0"
            class="modal-price"
          >
            R$ {{ selectedItem?.price.toFixed(2) }}
          </div>
          <div class="modal-badges">
            <span v-if="selectedItem?.combo" class="badge combo">Combo</span>
            <span v-if="selectedItem?.price > 40" class="badge premium"
              >Premium</span
            >
            <span v-if="selectedItem?.price <= 20" class="badge tradicional"
              >Tradicional</span
            >
            <span
              v-if="selectedItem?.price > 20 && selectedItem?.price <= 40"
              class="badge especial"
              >Especial</span
            >
          </div>
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
      activeCategory: "don-todo-dia",
      selectedItem: null,
      showItemModal: false,
      isMobile: false, // NEW: State to track if it's a mobile device
      showInfoNotes: false,
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
              image: "/images/ponto-da-carne.png",
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
              image: "/images/carreteiro_do_Don.jpg",
            },
            {
              id: "ancho-don",
              name: "Ancho do DON",
              description:
                "250g (In natura) de Steak de Ancho grill, finalizado com sal de parrilla. Acompanha 40g de Farofa do DON® e 40g de Molho Chimichurri.",
              price: 40.0,
              image: "/images/Ancho_do_DON.png",
            },
            {
              id: "costelinha-don",
              name: "Costelinha do DON",
              description:
                "250g de Costelinha Suína defumada, finalizada com molho barbecue. Acompanha 40g de Farofa do DON®.",
              price: 40.0,
              image: "/images/costelinha_do_Don.jpg",
            },
            {
              id: "linguica-artesanal",
              name: "Linguiça Artesanal do DON",
              description:
                "300g de Linguiça de Costela bovina Angus Cara Preta® fininha, feita na brasa. Acompanha 40g de Farofa do DON® e 40g de molho chimichurri.",
              price: 40.0,
              image: "/images/linguicaArtesanal_do_Don.jpg",
            },
            {
              id: "burger-don",
              name: "Burger do DON",
              description:
                "Hamburguer blend de 180g (in natura), pão brioche, queijo fatiado, maionese grill e molho barbecue, grelhado na Parrilla e cortado ao meio.",
              price: 34.0,
              image: "/images/burguer_do_Don.jpg",
            },
            {
              id: "burger-bacon-don",
              name: "Burger bacon do DON",
              description:
                "Hamburguer blend de 180g (in natura), pão brioche, queijo fatiado, bacon maionese grill e molho barbecue, grelhado na Parrilla e cortado ao meio.",
              price: 37.0,
              image: "/images/burguer_do_Don.jpg",
            },
            {
              id: "burger-frango",
              name: "Burger frango do DON",
              description:
                "2 patties de frango de 100g empanados, pão brioche, queijo fatiado, alface americana, cenoura ralada, mostarda e maionese grill.",
              price: 30.0,
              image: "/images/burguerFrango_do_Don.jpg",
            },
            {
              id: "croqueta-don",
              name: "Croqueta do DON",
              description:
                "06 unidades de 40g de Croqueta de Brisket (Peito Bovino) desfiado e tempero da casa, empanadas com farinha panko, servidas com maionese grill, molho barbecue e cebolinha fresca.",
              price: 35.0,
              image: "/images/croqueta_do_don.png",
            },
            {
              id: "provoleta-don",
              name: "Provoleta do DON",
              description:
                "250g de provolone na brasa com cobertura de tomate-cereja em rodelas e folhas de manjericão Fresco.",
              price: 35.0,
              image: "/images/Provoleta_do_Don.png",
            },
            {
              id: "batata-don",
              name: "Batata do DON",
              description:
                "400g de Batata frita palito crocante, finalizada com sal da casa, servida com 80g de Brisket (Peito Bovino) defumado desfiado, finalizada com cebolinha fresca e pimenta biquinho.",
              price: 40.0,
              image: "/images/batata_do_Don.jpg",
            },
            {
              id: "torresmo-don",
              name: "Torresmo do DON",
              description:
                "250g de Panceta Suína defumada em rolo, finalizada na Fritadeira, servida com gomos de limão.",
              price: 30.0,
              image: "/images/Torresmo_do_DON.png",
            },
            {
              id: "pao-alho-don",
              name: "Pão de alho do DON",
              description:
                "2 unidades de pão de alho Santa Massa® exclusivo para DONVITTÓRIO, assados na brasa.",
              price: 20.0,
              image: "/images/paoDeAlho_do_Don.jpg",
            },
            {
              id: "queijo-coalho-don",
              name: "Coalho do DON",
              description:
                "200g de queijo coalho assado, finalizado ao melaço de cana, à moda DONVITTÓRIO.",
              price: 25.0,
              image: "/images/Coalho_do_Don.jpg",
            },
            {
              id: "batata-frita-grande",
              name: "Batata frita",
              description:
                "Porção de Batata frita palito crocante, finalizada com sal da casa.",
              price: 30.0,
              image: "/images/batata_frita.jpg",
            },
            {
              id: "farofa-don",
              name: "Farofa do DON®",
              description:
                "100g da deliciosa Farofa do DON® , feita com farinha Panko, cebola tostada e manteiga de garrafa.",
              price: 8.0,
              image: "/images/farofa_do_Don.jpg",
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
              image: "/images/picanha_do_Don.jpg",
            },
            {
              id: "chorizo-don",
              name: "TER - Chorizo do DON",
              description:
                "250g (In natura) de steak de Chorizo grill, finalizado com sal de Parrilla. Acompanha 40g de Farofa do DON e 40g de molho Chimichurri.",
              price: 45.0,
              image: "/images/chorizo_do_Don.jpg",
            },
            {
              id: "galinhada-don-ter",
              name: "TER - Galinhada do DON",
              description:
                "300g da receita especial de galinhada, com o tempero especial de família do DON.",
              price: 20.0,
              image: "/images/galinhada_do_Don.jpg",
            },
            {
              id: "brisket-don-qua",
              name: "QUA - Brisket do DON",
              description:
                "250g do premiado Brisket (Peito Bovino) Angus, o 'rei do American Barbecue', defumado por 12 horas, finalizado com molho Barbecue. Acompanha 40g de Farofa do DON®.",
              price: 55.0,
              image: "/images/brisket_do_Don.jpg",
            },
            {
              id: "galinhada-don-qui",
              name: "QUI - Galinhada do DON",
              description:
                "300g da receita especial de galinhada, com o tempero especial de família do DON.",
              price: 20.0,
              image: "/images/galinhada_do_Don.jpg",
            },
            {
              id: "pulled-pork-qui",
              name: "QUI - Pulled pork do DON",
              description:
                "150g de Copa Lombo Suína defumada desfiada, pão brioche, molho Barbecue e 40g de Coleslaw (salada cítrica de cenoura, repolhos, maionese e mostarda).",
              price: 28.0,
              image: "/images/pulledPork_do_Don.jpg",
            },
            {
              id: "pulled-pork-sex",
              name: "SEX - Pulled pork do DON",
              description:
                "150g de Copa Lombo Suína defumada desfiada, pão brioche, molho Barbecue e 40g de Coleslaw (salada cítrica de cenoura, repolhos, maionese e mostarda).",
              price: 28.0,
              image: "/images/pulledPork_do_Don.jpg",
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
              image: "/images/em_breve.png",
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
              image: "/images/panqueca_do_Don.jpg",
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
              image: "/images/soda_do_Don.jpg",
            },
            {
              id: "suco-frutas",
              name: "Suco de frutas",
              description: "Garrafa 300ml. Consulte sabores disponíveis.",
              price: 7.0,
              image: "/images/sucoDeFruta_do_Don.png",
            },
            {
              id: "suco-uva",
              name: "Suco de uva integral",
              description: "Garrafa 300ml.",
              price: 13.0,
              image: "/images/sucoDeUva_integral.jpg",
            },
            {
              id: "refrigerante",
              name: "Refrigerante",
              description: "Lata 310ml. Consulte opções disponíveis.",
              price: 7.0,
              image: "/images/coca_refrigerante.jpg",
            },
            {
              id: "refrigerante-zero",
              name: "Refrigerante sem açúcar",
              description: "Lata 310ml. Consulte opções disponíveis.",
              price: 7.0,
              image: "/images/cocaSem_refrigerante.jpg",
            },
            {
              id: "sprite-lemon",
              name: "Sprite Lemon Fresh",
              description: "Garrafa 500ml.",
              price: 8.0,
              image: "/images/Sprite_Lemon_Fresh.jpeg",
            },
            {
              id: "energetico",
              name: "Energético",
              description: "Lata 473ml. Consulte opções disponíveis.",
              price: 14.0,
              image: "/images/monster.jpg",
            },
            {
              id: "agua-mineral",
              name: "Água mineral",
              description: "Garrafa 500ml.",
              price: 5.0,
              image: "/images/agua.jpg",
            },
            {
              id: "agua-com-gas",
              name: "Água com gás",
              description: "Garrafa 500ml.",
              price: 6.0,
              image: "/images/agua.jpg",
            },
            {
              id: "cafe-expresso",
              name: "Café expresso",
              description:
                "Cápsula Nespresso®. Consulte opções disponíveis. Curto 40ml Longo 110ml",
              price: 8.0,
              image: "/images/café_expresso.png",
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
              image: "/images/Baden_Baden.png",
            },
            {
              id: "long-neck",
              name: "Long neck",
              description: "Garrafa 330ml. Consulte opções disponíveis.",
              price: 12.0,
              image: "/images/lonkNeck.jpg",
            },
            {
              id: "chopp-pilsen-quatro-poderes",
              name: "Chopp Pilsen Quatro Poderes®",
              description:
                "A essência do estilo Pilsen original, com baixo teor alcoólico e sabor característico. Se destaca pela leveza, amargor marcante dos lúpulos tchecos e aromas de pão fresco do malte. Parceria exclusiva Quatro Poderes e DONVITTORIO.",
              price: 12.0,
              image: "/images/Chopp_Pilsen_Quatro_Poderes.png",
            },
            {
              id: "chopp-ipa-quatro-poderes",
              name: "Chopp IPA Quatro Poderes®",
              description:
                "Uma cerveja forte e aromática, com seu amargor pronunciado e aroma intenso de lúpulo, a IPA tornou-se um dos estilos mais populares entre os amantes de cerveja artesanal. Parceria exclusiva Quatro Poderes e DONVITTORIO.",
              price: 15.0,
              image: "/images/Chopp_IPA_Quatro_Poderes.png",
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
              image: "/images/Vittório.png",
            },
            {
              id: "siciliana",
              name: "Siciliana®",
              description:
                "Gin, bitter, limão siciliano e xarope de açúcar. (Imagem ilustrativa).",
              price: 28.0,
              image: "/images/Siciliana.png",
            },
            {
              id: "spritz",
              name: "Spritz",
              description:
                "Aperol, espumante, água com gás. Servido com rodela de laranja.",
              price: 32.0,
              image: "/images/Spritz.png",
            },
            {
              id: "moscow-mule",
              name: "Moscow mule",
              description:
                "Vodka, espuma de gengibre, suco de limão. Finalizado com rodelas de limão.",
              price: 24.0,
              image: "/images/Moscow_mule.png",
            },
            {
              id: "caipiroska",
              name: "Caipiroska",
              description:
                "Vodka, açúcar (ou adoçante), e fruta macerada. Servido com gelo. Sabores: Limão, Maracujá e Morango.",
              price: 26.0,
              image: "/images/Caipiroska.png",
            },
            {
              id: "caipirinha",
              name: "Caipirinha",
              description:
                "Cachaça, açúcar (ou adoçante), e fruta macerada. Servido com gelo. Sabores: Limão, Maracujá e Morango.",
              price: 20.0,
              image: "/images/Caipirinha.png",
            },
            {
              id: "da-casa-gin",
              name: "Da Casa® ",
              description:
                `Da Casa® - Vodka
                Da Casa® - Gin
                Da Casa® - Whisky
                Opções exclusivas de drinks com destilados produzidos pela casa. Consulte as opções.`,
              price: 38.0,
              image: "/images/Da_Casa.png",
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
              image: "/images/Campari.jpg",
            },
            {
              id: "whisky-old-parr",
              name: "Whisky Old Parr",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 30.0,
              image: "/images/Old_Parr.jpg",
            },
            {
              id: "whiskey-jack-daniels",
              name: "Whiskey Jack Daniels",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 38.0,
              image: "/images/Whisky_Jack_Daniels.jpg",
            },
            {
              id: "vodka-smirnoff",
              name: "Vodka Smirnoff",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 25.0,
              image: "/images/Smirnoff.jpg",
            },
            {
              id: "cachaca-cabare",
              name: "Cachaça Cabaré",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 12.0,
              image: "/images/cachaça_cabaré.jpg",
            },
            {
              id: "cachaca-sagatiba",
              name: "Cachaça Sagatiba",
              description:
                "Escolha sua opção. Dose 50 ml. (Imagem ilustrativa).",
              price: 12.0,
              image: "/images/Cachaça_Sagatiba.png",
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
              image: "/images/consulte.png",
            },
          ],
        },
      ],
    };
  },
  computed: {
    // Garantir que apenas uma categoria seja ativa por vez
    activeCategoryId() {
      return this.activeCategory;
    },
  },
  methods: {
    setActiveCategory(categoryId) {
      // Garantir que apenas uma categoria seja selecionada por vez
      if (this.activeCategory !== categoryId) {
        this.activeCategory = categoryId;
        // Fechar modal se estiver aberto ao trocar de categoria
        if (this.showItemModal) {
          this.closeItemModal();
        }
      }
    },
    updateLocation() {
      this.$router.push(`/menu/${this.selectedLocation}`);
    },
    selectItem(item) {
      this.selectedItem = item;
      this.showItemModal = true;
    },
    closeItemModal() {
      this.showItemModal = false;
      this.selectedItem = null;
    },
    // NEW: Function to check if it's a mobile device
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleInfoNotes() {
      this.showInfoNotes = !this.showInfoNotes;
    },
  },
  mounted() {
    if (this.$route.params.location) {
      this.selectedLocation = this.$route.params.location;
    }

    // Verificar se há parâmetro de categoria na URL
    if (this.$route.query.category) {
      this.activeCategory = this.$route.query.category;
    }

    // NEW: Check for mobile on mount and resize
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
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

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.8;
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
  padding-left: 5.9rem;
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
  padding-left: 0.9rem;
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

/* Important Notes */
.info-notes {
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.25);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  color: #333;
  margin: -2rem 0 2rem 0;
  cursor: pointer;
}

.info-notes-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.info-notes h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff6b35;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-notes-caret {
  font-size: 0.9rem;
  color: #ff6b35;
  transition: transform 0.2s ease;
}

.info-notes-caret.rotated {
  transform: rotate(180deg);
}

.info-notes ul {
  margin: 0;
  padding-left: 1.25rem;
}

.info-notes li {
  margin: 0.25rem 0;
  line-height: 1.5;
  font-size: 1rem;
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
  position: relative;
  outline: none;
}

.category-btn:hover:not(.active) {
  background: rgba(255, 107, 53, 0.2);
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-1px);
}

.category-btn.active {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border-color: #ff6b35;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
  z-index: 1;
}

.category-btn:focus {
  outline: 2px solid #ff6b35;
  outline-offset: 2px;
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

.menu-item.menu-item--constrained {
  width: 560px;
  max-width: 100%;
  justify-self: start;
  margin-left: 0;
  margin-right: auto;
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

/* NEW: General Hint Label for Mobile */
.hint-label-container {
  display: none;
  justify-content: center;
  margin: 0 0 1rem 0;
  color: #666;
}

.hint-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  animation: pulse 1.5s infinite;
}

.hint-icon {
  width: 12px;
  height: 12px;
  border: 2px solid #ff6b35;
  border-radius: 50%;
  background-color: transparent;
  animation: ripple 1.5s infinite;
}

@keyframes ripple {
  0% {
    transform: scale(0.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

/* removed info-indicator styles */

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }

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
  .container {
    padding: 0 1rem;
  }

  .menu-header {
    padding: 4rem 0 3rem;
  }

  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    align-items: center;
  }

  .brand-section {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
  }

  .main-title {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .location-selector {
    width: 100%;
    max-width: 280px;
    align-items: center;
  }

  .location-selector select {
    width: 100%;
    min-width: auto;
    padding: 0.875rem 2.5rem 0.875rem 1.25rem;
    font-size: 0.95rem;
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

  .menu-content {
    padding: 3rem 0;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .menu-item.menu-item--constrained {
    width: 100%;
    justify-self: stretch;
    margin-right: auto;
  }

  .hint-label-container {
    display: flex;
  }

  .category-nav {
    margin-bottom: 2.5rem;
  }

  .nav-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    padding: 0 0.5rem;
  }

  .category-btn {
    width: 100%;
    padding: 0.5rem 0.25rem;
    font-size: 0.7rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 15px;
  }

  .doneness-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .menu-item {
    border-radius: 12px;
    cursor: pointer;
  }

  .menu-image {
    aspect-ratio: 1/1;
  }

  .menu-overlay {
    opacity: 0;
  }

  .menu-item:hover .menu-overlay {
    opacity: 0;
  }

  
  .info-notes li {
    font-size: 0.8rem;
  }

  /* Keep info-notes header on one line in mobile */
  .info-notes-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  .info-notes h3 {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  .info-notes-caret {
    flex: 0 0 auto;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .menu-header {
    padding: 3rem 0 2rem;
  }

  .main-title {
    font-size: 2rem;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1rem;
  }

  .location-selector {
    max-width: 100%;
  }

  .location-selector select {
    padding: 0.75rem 2.25rem 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .info-content {
    padding: 1.5rem;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .info-description {
    font-size: 1rem;
  }

  .menu-content {
    padding: 2rem 0;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .category-nav {
    margin-bottom: 2rem;
  }

  .nav-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    padding: 0;
  }

  .category-btn {
    padding: 0.5rem 0.25rem;
    font-size: 0.65rem;
    border-radius: 12px;
  }

  .menu-item {
    border-radius: 12px;
  }

  .menu-image {
    aspect-ratio: 4/3;
  }

  .overlay-content {
    padding: 1.25rem;
  }

  .overlay-content h3 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .overlay-content p {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }

  .overlay-content .price {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .badge {
    padding: 0.2rem 0.5rem;
    font-size: 0.65rem;
  }

  .doneness-item {
    padding: 1rem;
  }

  .doneness-name {
    font-size: 1rem;
  }

  .doneness-time {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }

  .doneness-description {
    font-size: 0.85rem;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 0 0.5rem;
  }

  .main-title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .nav-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.3rem;
  }

  .category-btn {
    padding: 0.4rem 0.2rem;
    font-size: 0.6rem;
  }

  .info-content {
    padding: 1.25rem;
  }

  .info-title {
    font-size: 1.25rem;
  }

  .overlay-content {
    padding: 1rem;
  }

  .overlay-content h3 {
    font-size: 1.1rem;
  }

  .overlay-content p {
    font-size: 0.8rem;
  }
}

/* Make overlays visible on touch devices where hover is not available */
@media (hover: none) {
  .menu-overlay {
    opacity: 0;
  }
  .overlay-content {
    padding: 1rem;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

.modal-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 2rem;
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.modal-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.modal-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 1rem;
}

.modal-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Mobile Modal Styles */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 0.5rem;
  }

  .modal-content {
    border-radius: 16px;
    max-height: 95vh;
  }

  .modal-close {
    top: 0.75rem;
    right: 0.75rem;
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
  }

  .modal-image {
    height: 200px;
    border-radius: 16px 16px 0 0;
  }

  .modal-info {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-description {
    font-size: 0.95rem;
  }

  .modal-price {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 0.25rem;
  }

  .modal-content {
    border-radius: 12px;
  }

  .modal-close {
    top: 0.5rem;
    right: 0.5rem;
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .modal-image {
    height: 180px;
    border-radius: 12px 12px 0 0;
  }

  .modal-info {
    padding: 1.25rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-description {
    font-size: 0.9rem;
  }

  .modal-price {
    font-size: 1.1rem;
  }

  .badge {
    padding: 0.2rem 0.5rem;
    font-size: 0.65rem;
  }
}
</style>
