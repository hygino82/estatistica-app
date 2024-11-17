class Campo {
    constructor(valor, quantidade) {
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

let txtValor = document.getElementById('valor');
let txtQuantidade = document.getElementById('quantidade');
let btnAcicionar = document.getElementById('btn-adicionar');
let tabela = document.getElementById('tabela');
let resultado = document.getElementById('resultado');
let chartInstance = null;

let listaCampos = [
    new Campo(5, 2),
    new Campo(7, 3),
    new Campo(8, 4),
];


const adicionarCampo = () => {
    const valor = Number(txtValor.value);
    const quantidade = Number(txtQuantidade.value);
    let valorExistente = false;

    for (let x of listaCampos) {
        if (x.valor === valor) {
            valorExistente = true;
            x.quantidade += quantidade;
            break;
        }
    }

    if (!valorExistente) {
        listaCampos.push(new Campo(valor, quantidade));
    }
    txtValor.value = '';
    txtQuantidade.value = '';

    mostrarTabela();
    calcularValores();

    const labels = listaCampos.map(campo => campo.valor); // Rótulos (valores)
    const dataValues = listaCampos.map(campo => campo.quantidade); // Dados (quantidades)

    const ctx = document.getElementById('myChart').getContext('2d');

    // Destroi o gráfico existente se houver um
    if (chartInstance !== null) {
        chartInstance.destroy();
    }

    // Cria um novo gráfico
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels, // Rótulos extraídos do campo "valor"
            datasets: [{
                data: dataValues, // Quantidades extraídas do campo "quantidade"
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

const removerCampo = (valor) => {
    listaCampos = listaCampos.filter(campo => campo.valor !== valor);
    mostrarTabela();
}

const mostrarTabela = () => {
    let totalElementos = 0;

    for (let x of listaCampos) {
        totalElementos += x.quantidade;
    }

    if (listaCampos.length > 0) {
        tabela.innerHTML = '';
        for (let x of listaCampos) {
            const percentual = 100 * x.quantidade / totalElementos;
            const angulo = 360 * x.quantidade / totalElementos;
            tabela.innerHTML += `
            <tr>
                <th scope="row">${x.valor}</th>
                <td>${x.quantidade}</td>
                <td>${percentual.toFixed(4)}%</td>
                 <td>${angulo.toFixed(4)}º</td>
                <td><button class="btn btn-danger" onclick="removerCampo(${x.valor})">Remover</button></td>
            </tr>
        `;
        }
    } else {
        alert("Lista Vazia");
    }
}

btnAcicionar.addEventListener('click', adicionarCampo, false);

function limparCampos() {
    listaCampos.clear();
    tabela.innerHTML = '';
}

function calcularValores() {
    if (listaCampos.length !== 0) {
        let somaValores = 0.0;
        let somaQuantidades = 0.0;

        listaCampos.forEach(campo => {
            const produto = campo.valor * campo.quantidade;
            somaValores += produto;
            somaQuantidades += campo.quantidade;
        });

        const media = somaValores / somaQuantidades;

        let somaQuadDif = 0.0;

        for (let x of listaCampos) {
            const quadDif = Math.pow(media - x.valor, 2) * x.quantidade;
            somaQuadDif += quadDif;
        }

        const variancia = somaQuadDif / somaQuantidades;
        const desvioPadrao = Math.sqrt(variancia);

        resultado.innerHTML = `
                            <p><strong>Média</strong> = ${media.toFixed(5)}</p>
                            <p><strong>Variância</strong> = ${variancia.toFixed(5)}</p>
                            <p><strong>Desvio padrão </strong>= ${desvioPadrao.toFixed(5)}</p>
    `;

    } else {
        alert("A lista está vazia");
    }
}
