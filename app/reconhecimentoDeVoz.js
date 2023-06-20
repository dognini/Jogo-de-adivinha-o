const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognitionResult || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const chute = e.results[0][0].transcript;

    mostrarMansagemNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);

    if (validarGameOver(chute)) {
        document.body.innerHTML =
            `
                    <h2>Game Over!!!</h2>
                    <h3 class="game-over">Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
        document.body.style.backgroundColor = "red";

    } else {
        mostrarMansagemNaTela(chute)
    }

}

function mostrarMansagemNaTela(chute) {

    elementoChute.innerHTML =
        `
            <div>Você disse: </div>
            <span class="box"> ${chute} </span>
        `

}

function validarNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function validarGameOver(string) {
    const padrao = /game over/i; // "i" torna a expressão regular insensível a maiúsculas/minúsculas
    return padrao.test(string);
}

recognition.addEventListener('end', () => recognition.start());