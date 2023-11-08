import {
  DescriptiveElement,
  DescriptiveItem,
  Intervalo,
  NumericItem,
  TableValues,
} from "../types/custom-types";

export function agruparSemelhantes(data: NumericItem[]): NumericItem[] {
  let listaAgrupada: NumericItem[] = [];

  const objetoAgrupadoESomado = data.reduce((agrupado, objeto) => {
    const grupo = objeto.value;

    if (!agrupado[grupo]) {
      agrupado[grupo] = { grupo, soma: 0 };
    }

    agrupado[grupo].soma += objeto.quantity;
    return agrupado;
  }, {} as Record<number, { grupo: number; soma: number }>);

  const objetoAgrupadoESomadoArray = Object.values(objetoAgrupadoESomado);
  objetoAgrupadoESomadoArray.map((x) => {
    listaAgrupada.push({
      value: x.grupo,
      quantity: x.soma,
    });
  });

  return listaAgrupada;
}

export function ordenarLista(data: NumericItem[]): NumericItem[] {
  const minhaLista = data.sort((a, b) => a.value - b.value);
  let lista: NumericItem[] = [];
  minhaLista.map((obj) => {
    lista.push({
      value: obj.value,
      quantity: obj.quantity,
    });
  });
  return lista;
}

export function mediaPonderada(data: NumericItem[]): number {
  let soma = 0.0;
  let quantidade = 0.0;
  data.map((item) => {
    soma += item.quantity * item.value;
    quantidade += item.quantity;
  });
  const media: number = soma / quantidade;
  return media;
}

export function generateDescriptiveTableValues(
  data: DescriptiveItem[]
): DescriptiveElement[] {
  const amount: number = getTotalElements(data).quantidade;
  let elements: DescriptiveElement[] = [];

  data.map((item) => {
    elements.push({
      quantity: item.quantity,
      value: item.value,
      percentual: (item.quantity * 100.0) / amount,
      angle: (item.quantity * 360.0) / amount,
    });
  });

  return elements;
}

export function generateTableValues(
  data: NumericItem[],
  descriptive: boolean
): TableValues[] {
  const media: number = mediaPonderada(data);
  const quantidade = getTotalElements(data).quantidade;
  let valores: TableValues[] = [];

  data.map((item) => {
    valores.push({
      quantity: item.quantity,
      value: item.value,
      quadDif: !descriptive
        ? Math.pow(media - item.value, 2) * item.quantity
        : undefined,
      percentual: (item.quantity * 100.0) / quantidade,
      angle: (item.quantity * 360.0) / quantidade,
    });
  });

  return valores;
}

export function getTotalElements(
  data: NumericItem[] | DescriptiveItem[]
): QuantidadeModa {
  let maior = 1;
  let moda: string[] = [];
  let quantidade = 0.0;

  data.map((item) => {
    quantidade += item.quantity;
    if (item.quantity > maior) {
      maior = item.quantity;
    }
  });

  data.map((item) => {
    if (item.quantity == maior) {
      moda.push(item.value.toString());
    }
  });
  return {
    quantidade: quantidade,
    moda: moda,
  };
}

type QuantidadeModa = {
  quantidade: number;
  moda: string[];
};

export function gerarIntervalos(
  min: number,
  max: number,
  intervalo: number,
  listaElementos: number[]
): Intervalo[] {
  let lista: Intervalo[] = [];
  let a = min;
  let b = min;
  if (a < b) {
    while (b <= max) {
      a = b;
      b = a + intervalo;
      let amount = listaElementos.filter((x) => x >= a && x < b); //filtra os elementos que estejam no intervalo
      if (amount.length !== 0) {
        lista.push({
          inicial: a,
          final: b,
          amount: amount.length,
        });
      }
    }
    return lista;
  } else {
    alert("O valor inicial deve ser menor que o final");
    return [];
  }
}

export function generateHistogramValues(list: Intervalo[]):DescriptiveItem[]{
  let values: DescriptiveItem[] = [];
  list.map(element => {
    const item: DescriptiveItem = {
      value: `${element.inicial} |-- ${element.final}`,
      quantity: element.amount
    };
    values.push(item);
  });

  return values;
}
