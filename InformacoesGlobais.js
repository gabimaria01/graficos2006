const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    // Requisição de dados
    const res = await fetch(url);
    const dados = await res.json();

    // Cálculos para pessoas conectadas e no mundo
    const pessoasConectadas = (dados.total_pessoa_conectadas / 1e9);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
    const horas = parseInt(dados.tempo_medio);  // Conversão de tempo para horas
    const minutos = Math.round((dados.tempo_medio - horas) * 60); // Conversão para minutos

    // Criação do parágrafo com o texto
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container_texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente <span>${pessoasConectadas}</span> bilhões estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.`;

    // Adicionando o parágrafo ao contêiner
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

// Chamando a função
vizualizarInformacoesGlobais();

