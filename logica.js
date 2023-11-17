
var numeroSecreto = Math.floor(Math.random() * 50) + 1; // Gera um número aleatório de 1 a 50
var input = document.querySelector("input");

// Adiciona um listener para o evento "input" que valida o conteúdo do input
input.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
});

input.focus();

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
