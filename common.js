// Função para pegar o valor de uma variável CSS
const getCSS = (variavel) => {
    const valor = getComputedStyle(document.body).getPropertyValue(variavel);
    return valor ? valor.trim() : '';  // Garante que o valor não seja undefined ou vazio
}

// Configuração do estilo para os ticks
const tickConfig = {
    color: getCSS('--primary-color') || '#000000',  // Valor padrão se a variável não estiver definida
    size: 16,
    family: getCSS('--font') || 'Arial, sans-serif'  // Valor padrão de fonte se a variável não estiver definida
}

// Exportando as funções e configurações
export { getCSS, tickConfig }
