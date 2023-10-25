import { NumericItem, NumericListItem } from "../types/custom-types";

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

//const lista = agruparSemelhantes(data);
//lista.map(x => console.log(x));

