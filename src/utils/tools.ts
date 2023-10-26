import { NumericItem, NumericListItem, TableValues } from "../types/custom-types";

let data: NumericListItem = {
    list: [
        {
            quantity: 5,
            value: 7,
        },
        {
            quantity: 3,
            value: 6,
        },
        {
            quantity: 2,
            value: 8,
        },
        {
            quantity: 10,
            value: 8,
        },
        {
            quantity: 3,
            value: 5,
        },

    ]
}

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
    objetoAgrupadoESomadoArray.map(x => {
        listaAgrupada.push({
            value: x.grupo,
            quantity: x.soma
        })
    });

    return listaAgrupada;

}

export function ordenarLista(data: NumericItem[]): NumericItem[] {
    const minhaLista = data.sort((a, b) => a.value - b.value);
    let lista: NumericItem[] = [];
    minhaLista.map(obj => {
        lista.push({
            value: obj.value,
            quantity: obj.quantity
        })
    });
    return lista;
}

export function mediaPonderada(data: NumericItem[]): number {
    let soma = 0.0;
    let quantidade = 0.0;
    data.map(item => {
        soma += item.quantity * item.value;
        quantidade += item.quantity;
    });
    const media: number = soma / quantidade;
    return media;
}

export function generateTableValues(data: NumericItem[]): TableValues[] {
    const media: number = mediaPonderada(data);
    const quantidade = quantidadeTotalElementos(data);
    let valores: TableValues[] = [];

    data.map(item => {
        valores.push({
            quantity: item.quantity,
            value: item.value,
            quadDif: Math.pow(media - item.value, 2) * item.quantity,
            percentual: item.quantity * 100.0 / quantidade,
            angle: item.quantity * 360.0 / quantidade,
        })
    })

    return valores;
}

function quantidadeTotalElementos(data: NumericItem[]) {
    let quantidade = 0.0;
    data.map(item => {
        quantidade += item.quantity;
    });
    return quantidade;
}
