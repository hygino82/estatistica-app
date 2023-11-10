import { Intervalos, TableData } from "../../types/custom-types";
import { generateFrequencyTableData } from "../../utils/tools";


export function TableHistogram({ lista }: Intervalos) {

    const tableValues: TableData[] = generateFrequencyTableData(lista);
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">F</th>
                        <th scope="col">Fa</th>
                        <th scope="col">Fr</th>
                        <th scope="col">Fp</th>
                        <th scope="col">Fpa</th>
                    </tr>
                </thead>
                <tbody id="corpo-tabela">
                    {tableValues.map(x => {
                        return (
                            <tr>
                                <th scope="row">{`${x.inicial} |-- ${x.final}`}</th>
                                <td>{x.frequencia}</td>
                                <td>{x.frequenciaAcumulada}</td>
                                <td>{x.frequenciaRelativa}</td>
                                <td>{x.frequenciaPercentual}%</td>
                                <td>{x.frequenciaPercentualAcumulada}%</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}