const menorValor = 10
const maiorValor = 1000
const numeroSecreto = numeroAleatorio();

function numeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

const ElementoMaiorValor = document.getElementById('maior-valor');
ElementoMaiorValor.innerHTML = maiorValor;

const ElementoMenorValor = document.getElementById('menor-valor');
ElementoMenorValor.innerHTML = menorValor;

console.log(numeroSecreto);