# Don Vittorio - Aplicação Vue.js

Este projeto é uma conversão dos arquivos HTML fornecidos para uma aplicação Vue.js moderna e responsiva para o restaurante Don Vittorio.

## 🚀 Funcionalidades

- **Página Inicial (Home)**: Apresentação do restaurante com seções hero, sobre, especialidades e call-to-action
- **Cardápio Interativo**: Sistema completo de cardápio com:
  - Navegação por categorias (Entradas, Carnes, Massas, Pizzas, Bebidas, Sobremesas)
  - Seletor de unidades (Sudoeste, Jardim, Centro)
  - Sistema de carrinho de compras
  - Cálculo automático de totais
  - Finalização de pedidos
- **Design Responsivo**: Adaptado para desktop e mobile
- **Navegação SPA**: Single Page Application com Vue Router

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3**: Framework JavaScript reativo
- **Vue Router**: Roteamento para SPA
- **Vite**: Build tool e servidor de desenvolvimento
- **CSS3**: Estilização responsiva com Grid e Flexbox

## 📁 Estrutura do Projeto

```
donvittorio-vue/
├── src/
│   ├── components/
│   │   ├── Header.vue      # Cabeçalho com navegação
│   │   └── Footer.vue      # Rodapé com informações
│   ├── views/
│   │   ├── Home.vue        # Página inicial
│   │   └── Menu.vue        # Página do cardápio
│   ├── App.vue             # Componente principal
│   └── main.js             # Ponto de entrada
├── index.html              # Template HTML
├── vite.config.js          # Configuração do Vite
└── package.json            # Dependências e scripts
```

## 🎨 Características do Design

- **Paleta de Cores**: 
  - Primária: #ff6b35 (laranja vibrante)
  - Secundária: #1a1a1a (preto)
  - Fundo: #f8f8f8 (cinza claro)
- **Tipografia**: Arial, Helvetica, sans-serif
- **Layout**: Grid responsivo e flexbox
- **Animações**: Transições suaves em hover e interações

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento**:
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:3000`

3. **Build para produção**:
   ```bash
   npm run build
   ```

4. **Preview da build de produção**:
   ```bash
   npm run preview
   ```

## 📱 Funcionalidades Implementadas

### Página Inicial
- ✅ Seção hero com call-to-action
- ✅ Seção sobre o restaurante
- ✅ Especialidades em cards
- ✅ Call-to-action final
- ✅ Design responsivo

### Cardápio
- ✅ Navegação por categorias
- ✅ Seletor de unidades
- ✅ Exibição de pratos com preços
- ✅ Sistema de carrinho
- ✅ Adição/remoção de itens
- ✅ Cálculo de totais
- ✅ Finalização de pedidos
- ✅ Design responsivo

### Navegação
- ✅ Header com logo e menu
- ✅ Footer com informações
- ✅ Roteamento entre páginas
- ✅ Estados ativos nos links

## 🔄 Conversão do HTML Original

A conversão manteve a estrutura e funcionalidades dos arquivos HTML originais:

1. **Boasvindas｜DONVITTORIOComidadefogo.html** → `Home.vue`
2. **Cardápio-Sudoeste｜DonvittorioSite.html** → `Menu.vue`
3. Estrutura geral → `App.vue`, `Header.vue`, `Footer.vue`

## 🎯 Melhorias Implementadas

- **Reatividade**: Sistema reativo do Vue.js para atualizações automáticas
- **Componentização**: Código modular e reutilizável
- **Roteamento**: Navegação SPA sem recarregamento de página
- **Estado Local**: Gerenciamento de estado do carrinho
- **Responsividade**: Design adaptado para todos os dispositivos
- **Performance**: Build otimizado com Vite

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos canais do restaurante Don Vittorio.

---

**Desenvolvido com ❤️ usando Vue.js**

