class CampoDescritivo {
    valor: string;
    quantidade: number;

    constructor(valor: string, quantidade: number) {
        this.valor = valor;
        this.quantidade = quantidade;
    }
}


let lista: CampoDescritivo[] = [
    new CampoDescritivo('Banana', 7),
    new CampoDescritivo('Laranja', 3),
    new CampoDescritivo('Melancia', 4),
    new CampoDescritivo('Manga', 6)
];

const adicionarElemento = () => {
    // Captura os valores dos inputs
    let descricao: string = (document.getElementById('descricao') as HTMLInputElement).value;
    let quantidade: number = Number((document.getElementById('quantidade') as HTMLInputElement).value);

    // Verifica se o campo já existe na lista
    // @ts-ignore
    let campoExistente = lista.find((campo) => campo.valor === descricao);

    if (campoExistente) {
        // Atualiza a quantidade do item existente
        campoExistente.quantidade += quantidade;
    } else {
        // Adiciona um novo elemento na lista
        lista.push(new CampoDescritivo(descricao, quantidade));
    }

    // Atualiza a tabela
    gerarTabela();
};


function contarTotalElementos(lista: CampoDescritivo[]): number {
    let soma: number = 0;
    lista.forEach(campo => soma += campo.quantidade);
    return soma;
}

const gerarTabela = () => {
    console.log("Testando chamada de função");
    let corpoTabela: string = '';
    const totalElementos: number = contarTotalElementos(lista);

    lista.forEach(campo => {
        const percentual: number = 100 * campo.quantidade / totalElementos;
        const angulo: number = 360 * campo.quantidade / totalElementos;

        corpoTabela += `
        <tr>
            <th scope="row">${campo.valor}</th>
              <td>${campo.quantidade}</td>
              <td>${percentual.toFixed(2)}%</td>
              <td>${angulo.toFixed(2)}º</td>
        </tr>
        `;
    });

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Descrição</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Percentual</th>
              <th scope="col">Ângulo</th>
            </tr>
          </thead>
          <tbody>
                ${corpoTabela}
          </tbody>
      </table>
    `;
}