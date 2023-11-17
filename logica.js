var button = document.querySelector("button");
button.addEventListener("click", verifica);

var numeroSecreto = Math.floor(Math.random() * 50) + 1; // Gera um número aleatório de 1 a 50
var input = document.querySelector("input");

// Adiciona um listener para o evento "input" que valida o conteúdo do input
input.addEventListener("input", function () {
  var valor = parseInt(this.value.replace(/\D/g, '')); // Remove caracteres não numéricos
  input.focus();

  // Limita o valor ao intervalo de 1 a 50
  valor = Math.min(Math.max(valor, 1), 50);

  // Atualiza o valor do input
  this.value = valor;
});

function verifica() {
  var palpite = parseInt(input.value);

  if (palpite === numeroSecreto) {
    alert('Acertou! O número secreto era: ' + numeroSecreto);
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
