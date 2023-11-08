import { Intervalo } from "../../types/custom-types";

type Intervalos = {
    list: Intervalo[];
}

export function HistogramTable({ list }: Intervalos) {
    let totalElements = 0;
    list.forEach(item => totalElements += item.amount);
    if (list.length != 0) {
        return (
            <>
                <p><strong>Total de elementos adicionados {totalElements}</strong></p>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Intervalo</th>
                            <th scope="col">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(item => {
                            return (
                                <tr>
                                    <td>{item.inicial + ' |-- ' + item.final}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </>

        );
    }

    else {
        return (
            <h3>A lista não possui elementos</h3>
        );
    }
}