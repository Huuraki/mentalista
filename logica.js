var numeroSecreto = geraNumeroSecreto(); // Inicializa o número secreto
var input = document.querySelector("input");

// Adiciona um listener para o evento "input" que valida o conteúdo do input
input.addEventListener("input", function () {
  var valor = this.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

  // Limita o valor ao intervalo de 1 a 50
  valor = Math.min(Math.max(parseInt(valor, 10) || 1, 1), 50);

  // Atualiza o valor do input
  this.value = valor;
});

function geraNumeroSecreto() {
  return Math.floor(Math.random() * 50) + 1;
}

function verifica() {
  var palpite = parseInt(input.value, 10);

  if (palpite === numeroSecreto) {
    alert('Acertou! O número secreto era: ' + numeroSecreto);
    numeroSecreto = geraNumeroSecreto(); // Gera um novo número secreto
  } else if (palpite > numeroSecreto) {
    alert('Errou... o número secreto é menor que ' + palpite);
  } else if (palpite < numeroSecreto) {
    alert('Errou... o número secreto é maior que ' + palpite);
  }

  input.value = "";
  input.focus();
}

var button = document.querySelector("button");
button.addEventListener("click", verifica);
