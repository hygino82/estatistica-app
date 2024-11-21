class Campo {
  constructor(valor, quantidade) {
    this.valor = valor;
    this.quantidade = quantidade;
  }
}

let lista = [];

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

function mostrarTabela(){
  let tabela = document.getElementById("tabela");
  tabela.innerHTML = "";
  const total = totalElementos();
  lista.forEach((x) => {
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
            <button class="btn btn-danger btn-sm">
                        Excluir
            </button>
            <button class="btn btn-warning btn-sm">
                        Alterar
            </button>
            </td> 
         </tr>
        `;
  });
}

function excluir(index) {
  // Remove o elemento pelo índice
  lista.splice(index, 1);
  //atualizarTabela();
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
