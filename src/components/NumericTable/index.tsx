import { NumericItem } from "../../types/custom-types";

export function NumericTable(valores: NumericItem[]) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Valor</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Produto</th>
          </tr>
        </thead>
        <tbody>
          {valores.map((item) => {
            return (
              <tr key={item.key}>
                <th scope="row">{item.key}</th>
                <td>{item.value}</td>
                <td>{item.value * item.key}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
