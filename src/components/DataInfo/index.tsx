import { NumericListItem } from "../../types/custom-types";

export function DataInfo({ list }: NumericListItem) {
  function somarValores(): number {
    const somatorio = list.reduce(
      (total, item) => total + item.quantity * item.value,
      0
    );
    return somatorio;
  }

  function somarQuantidade(): number {
    const quantidade = list.reduce((total, item) => total + item.quantity, 0);
    return quantidade;
  }

  const calcularMedia = () => {
    const soma = somarValores();
    if (somarQuantidade() === 0) {
      return 0; // Evita divisão por zero
    }
    const media = soma / somarQuantidade();
    return media;
  };

  function desvioPadrao() {
    const media = calcularMedia();
    let somaQuadrados = 0.0;
    let quantidade = 0.0;
    list.map((obj) => {
      somaQuadrados += Math.pow(obj.value - media, 2.0) * obj.quantity;
      quantidade += obj.quantity;
    });

    const desvio = Math.sqrt(somaQuadrados / quantidade);
    return desvio;
  }

  if (list.length != 0) {
    return (
      <>
        <h3>Análise dos dados obtidos</h3>
        <p>Soma {somarValores().toFixed(4)}</p>
        <p>Quantidade adicionada {somarQuantidade()}</p>
        <p>Média {calcularMedia().toFixed(4)}</p>
        <p>Desvio padrão {desvioPadrao().toFixed(4)}</p>
      </>
    );
  }
}
