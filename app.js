let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        nomeInput.value = '';
        return;
    }

    amigos.push(nome);
    nomeInput.value = '';
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // LÓGICA ADICIONADA AQUI: Troca a visibilidade dos botões
    document.getElementById('botao-sortear').style.display = 'none';
    document.getElementById('botao-reiniciar').style.display = 'block';
}

function reiniciarJogo() {
    amigos = [];
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';

    // Inverte a visibilidade dos botões de volta ao original
    document.getElementById('botao-sortear').style.display = 'flex';
    document.getElementById('botao-reiniciar').style.display = 'none';
}

// Bloco de "preparação" que conecta os botões do HTML às funções do JavaScript
const botaoAdicionar = document.getElementById('botao-adicionar');
const botaoSortear = document.getElementById('botao-sortear');
const botaoReiniciar = document.getElementById('botao-reiniciar');

botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigo);
botaoReiniciar.addEventListener('click', reiniciarJogo);

// Adiciona o "ouvinte" para a tecla Enter no campo de input
const nomeInput = document.getElementById('amigo');
nomeInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});