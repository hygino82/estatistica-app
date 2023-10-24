import { NumericListItem } from "../../types/custom-types";

export function NumericTable({ list }: NumericListItem) {
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
          {list.map((item) => {
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
