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

  return (
    <>
      <h3>Análise dos dados obtidos</h3>
      <p>Soma {somarValores().toFixed(4)}</p>
      <p>Quantidade adicionada {somarQuantidade()}</p>
      <p>Média {calcularMedia().toFixed(4)}</p>
    </>
  );
}
