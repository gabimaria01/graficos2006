import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuarios() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json";  // Corrigido

    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadesUsuarios = Object.values(dados);

    const data = [
        {
            x: nomeDasRedes,  // Corrigido de 'X' para 'x' (minúsculo)
            y: quantidadesUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30  // Corrigido de 'sise' para 'size'
            }
        },
        xaxis: {
            tickfont: {  // Corrigido de 'tickfront' para 'tickfont'
                color: getCSS('--primary-color'),
                size: 16,
                family: getCSS('--font')
            },
            title: {
                text: 'Nome das redes sociais',
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,  // Usando a configuração 'tickConfig' corretamente
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        }
    };

    // Renderizar o gráfico usando Plotly
    Plotly.newPlot('graficos-container', data, layout);  // 'graficos-container' é o ID do contêiner HTML onde o gráfico será exibido
}


   const graficos = document.createElement('div')
   graficos.className = 'grafico'
   document.getElementById('graficos-container').appendChild(grafico) 
   Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()