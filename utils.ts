class CampoDescritivo {
    constructor(readonly valor: string, readonly quantidade: number) {
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