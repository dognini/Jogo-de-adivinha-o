function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += ` <div> Valor Inválido </div>`;
    }

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }


    if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += ` <div> Número Inválido, o Número precisa estar entre ${maiorValor} e ${menorValor} </div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML =
            `
                <h2>Você Acertou!</h2>
                <h3>O número secreto era ${numeroSecreto}</h3>
                <button id="jogar-novamente" class="btn-jogar" > Jogar Novamente! </button>
                <div class="loader"> </div>
            `
    }

    if (numero > numeroSecreto) {
        elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div> `

    } else {
        elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div> `

    }

}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {

    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }

})