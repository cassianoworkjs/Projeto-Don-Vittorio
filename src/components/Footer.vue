<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>DON VITTORIO</h3>
          <p>Comida de Fogo</p>
          <p>Sabores autênticos que aquecem o coração</p>
        </div>
        <div class="footer-section">
          <h4>Contato</h4>
          <p>📍 Endereço: Logradouro: Quadra Clsw 100 Bloco A Loja, 21</p> 
          <p>CEP:70670-051</p>
          <p>📞 Telefone: (61) 99317-3292</p>
          <p>✉️ Email: donvitorios@outlook.com</p>
        </div>
        <div class="footer-section">
          <h4>Horários</h4>
          <p>Segunda a Quinta: 18h às 23h</p>
          <p>Sexta e Sábado: 18h às 00h</p>
          <p>Domingo: 18h às 22h</p>
        </div>
      </div>
      <div class="footer-bottom">
         <p> &copy; 2025 GCG Tech. Todos os direitos reservados.</p>
         <img src="/icon/gcgwb.ico" style="width:15px; height:15px; margin-top:10px;" alt="GCG Tech Icon">
</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.site-footer {
  background-color: #1a1a1a;
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
}
.footer-bottom {
  color: #fff; 
  padding: 20px 0; 
  text-align: center; 
  font-size: 14px;
}


.footer-bottom p {
  margin: 0; 
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.footer-section h4 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.footer-section p {
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 1rem;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 1rem;
  text-align: center;
  color: #ccc;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
