function enviarWhatsApp() {
  // Captura os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var empresa = document.getElementById("empresa").value;
  var conheceu = document.getElementById("conheceu").value;
  var mensagem = document.getElementById("mensagem").value;

  // Captura os segmentos selecionados
  var checkboxes = document.querySelectorAll('input[name="segmento[]"]:checked');
  var segmentos = [];
  checkboxes.forEach((checkbox) => {
    segmentos.push(checkbox.value);
  });

  // Captura o orçamento selecionado
  var tamanho = document.querySelector('input[name="tamanho"]:checked');
  tamanho = tamanho ? tamanho.value : "Não informado";

  // Monta a mensagem formatada
  var msg = `📌 *Novo Pedido de Orçamento*\n\n`;
  msg += `👤 *Nome:* ${nome}\n`;
  msg += `📧 *E-mail:* ${email}\n`;
  msg += `📞 *Telefone:* ${telefone}\n`;
  msg += `🏢 *Empresa:* ${empresa}\n`;
  msg += `📌 *Como nos conheceu:* ${conheceu}\n`;
  msg += `💰 *Budget:* ${tamanho}\n`;
  msg += `📂 *Segmento:* ${segmentos.length > 0 ? segmentos.join(", ") : "Não informado"}\n`;
  msg += `📝 *Descrição do projeto:*\n${mensagem}\n`;

  // Codifica a mensagem para URL
  msg = encodeURIComponent(msg);

  // Número de WhatsApp (substituir pelo seu número)
  var numeroWhatsApp = "5511975678074"; // Formato internacional

  // URL de envio do WhatsApp
  var url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${msg}`;

  // Abre o WhatsApp Web ou aplicativo no celular
  window.open(url, "_blank");
}
