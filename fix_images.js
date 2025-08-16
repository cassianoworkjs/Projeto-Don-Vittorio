const fs = require('fs');
const path = require('path');

// Lê o arquivo Menu.vue
const filePath = path.join(__dirname, 'src', 'views', 'Menu.vue');
let content = fs.readFileSync(filePath, 'utf8');

// Substitui todos os caminhos incorretos
content = content.replace(/\/src\/public\/images\//g, '/images/');

// Escreve o arquivo de volta
fs.writeFileSync(filePath, content, 'utf8');

console.log('Caminhos das imagens corrigidos com sucesso!');
