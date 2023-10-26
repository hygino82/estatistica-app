import { NumericListItem, TableValues } from "../../types/custom-types";
import { generateTableValues } from "../../utils/tools";

export function NumericTable({ list }: NumericListItem) {
  const data: TableValues[] = generateTableValues(list);
  if (list.length != 0) {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Valor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Produto</th>
              <th scope="col">Quadrado Diferença</th>
              <th scope="col">Perceltual</th>
              <th scope="col">Graus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.quantity}>
                  <th scope="row">{item.value}</th>
                  <td>{item.quantity}</td>
                  <td>{item.value * item.quantity}</td>
                  <td>{item.quadDif}</td>
                  <td>{item.percentual.toFixed(1)}%</td>
                  <td>{item.angle.toFixed(1)}º</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
