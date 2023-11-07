import { Intervalo } from "../../types/custom-types";

type TableData = {
    frequencia: number;
    frequenciaAcumulada: number;
    frequenciaRelativa: number;
    frequenciaPercentual: number;
    frequenciaPercentualAcumulada: number;
}

export function TableHistogram({ lista }: Intervalo[]) {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pesquisa</th>
                        <th scope="col">F</th>
                        <th scope="col">Fa</th>
                        <th scope="col">Fr</th>
                        <th scope="col">Fp</th>
                        <th scope="col">Fpa</th>
                    </tr>
                </thead>
                <tbody id="corpo-tabela">
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}