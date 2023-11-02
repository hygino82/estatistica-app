import { TableValuesList } from "../../types/custom-types";

export function DescriptiveTable({ list }: TableValuesList) {

    if (list.length != 0) {
        return (
            <>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Descrição</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Percentual</th>
                            <th scope="col">Graus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(item => {
                            return (
                                <tr key={item.value}>
                                    <th scope="row">{item.value}</th>
                                    <td>{item.quantity}</td>
                                    <td>{item.percentual.toFixed(2)}%</td>
                                    <td>{item.angle.toFixed(2)}º</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}
