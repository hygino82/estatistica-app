class Campo {
    constructor(valor, quantidade) {
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

let graficoPizza = null;

let lista = [
    new Campo(5, 7),
    new Campo(6, 9),
    new Campo(7, 2)
];

function totalElementos() {
    let totalElementos = 0.0;
    lista.forEach((item) => (totalElementos += item.quantidade));
    return totalElementos;
}

function adicionar() {
    let valor = Number(document.getElementById("valor").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    // Verifica se já existe um campo com o valor
    let campoExistente = lista.find((campo) => campo.valor === valor);

    if (campoExistente) {
        // Aumenta a quantidade do campo existente
        campoExistente.quantidade += quantidade;
    } else {
        // Adiciona um novo campo se não existir
        lista.push(new Campo(valor, quantidade));
    }

    mostrarTabela();
    calcularValores();
}

function mostrarTabela() {
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    const total = totalElementos();
    lista.forEach((x, index) => {
        const percentual = (100 * x.quantidade) / total;
        const angulo = (360 * x.quantidade) / total;
        const produto = x.quantidade * x.valor;
        tabela.innerHTML += `
         <tr>
            <th scope="row">${x.valor}</th>
            <td>${x.quantidade}</td>
            <td>${produto.toFixed(2)}</td>
            <td>${percentual.toFixed(2)}%</td>
            <td>${angulo.toFixed(2)}º</td>
            <td>
                <button class="btn btn-danger btn-sm" data-id="${index}">
                    Excluir
                </button>
                <button class="btn btn-warning btn-sm" data-id="${index}">
                    Alterar
                </button>
            </td> 
         </tr>
        `;
    });

    // Adicionar eventos aos botões
    document.querySelectorAll(".btn-danger").forEach((button) => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            excluirItem(id);
        });
    });

    document.querySelectorAll(".btn-warning").forEach((button) => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            alterarQuantidade(id);
        });
    });

    gerarGrafico();
}

function excluirItem(id) {
    const confirmacao = confirm("Tem certeza de que deseja excluir este item?");
    if (confirmacao) {
        lista.splice(id, 1); // Remove o item da lista
        mostrarTabela();     // Atualiza a tabela
    }
}

function alterarQuantidade(id) {
    const novaQuantidade = prompt("Digite a nova quantidade:");
    if (novaQuantidade !== null && !isNaN(novaQuantidade) && novaQuantidade > 0) {
        lista[id].quantidade = parseInt(novaQuantidade, 10);
        mostrarTabela(); // Atualiza a tabela
    } else {
        alert("Quantidade inválida!");
    }
}


const calcularValores = () => {
    let somaProdutos = 0.0;
    lista.forEach((x) => (somaProdutos += x.quantidade * x.valor));
    const media = somaProdutos / totalElementos();
    let somaDiferencaQuadrados = 0.0;

    lista.forEach(
        (x) =>
            (somaDiferencaQuadrados += Math.pow(media - x.valor, 2) * x.quantidade)
    );

    const variancia = somaDiferencaQuadrados / totalElementos();
    const desvioPadrao = Math.sqrt(variancia);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `
   <p>Média ${media.toFixed(4)}</p>
   <p>Variância ${variancia.toFixed(4)}</p>
   <p>Desvio padrão ${desvioPadrao.toFixed(4)}</p>
  `;
};

function gerarGrafico() {
    const labels = lista.map((item) => item.valor);
    const data = lista.map((item) => item.quantidade);
    const cores = [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
    ];

    // Destrói o gráfico existente, se houver
    if (graficoPizza) {
        graficoPizza.destroy();
    }

    const ctx = document.getElementById("graficoPizza").getContext("2d");
    graficoPizza = new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Quantidade",
                    data: data,
                    backgroundColor: cores,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
        },
    });
}