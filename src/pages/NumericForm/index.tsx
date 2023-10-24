import { useEffect, useState } from "react";
import { NumericItem } from "../../types/custom-types";

export function NumericForm() {
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);
  const [atualiza, setAtualiza] = useState<any>();
  const [lista, setLista] = useState<NumericItem[]>([]);
  const [contador, setContador] = useState(0);
  const [soma, setSoma] = useState(0.0);
  const [media, setMedia] = useState(0.0);

  useEffect(() => {}, [atualiza]);

  function handleQuantidade(e: any) {
    e.preventDefault();
    setQuantidade(Number(e.target.value));
  }

  function handleValor(e: any) {
    e.preventDefault();
    setValor(Number(e.target.value));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const item: NumericItem = {
      key: quantidade,
      value: valor,
    };

    const novaLista = [...lista];
    novaLista.push(item);

    setLista(novaLista);

    setContador((contador) => contador + quantidade);

    const somarValores = () => {
      const somatorio = lista.reduce(
        (total, valor) => total + valor.key * valor.value,
        0
      );
      setSoma(somatorio);
    };

    setAtualiza(item.key);
  }

  function clearFields() {
    setQuantidade(0);
    setValor(0);
  }

  function resetValues() {
    setLista([]);
    setMedia(0.0);
    setContador(0);
    setSoma(0.0);
    clearFields();
  }

  return (
    <>
      <form>
        <div className="form-row">
          <div className="col">
            <label>Valor</label>
            <input
              type="number"
              className="form-control"
              placeholder="Valor"
              value={valor}
              onChange={handleValor}
              min={0}
            />
          </div>
          <div className="col">
            <label>Quantidade</label>
            <input
              type="number"
              className="form-control"
              placeholder="Quantidade"
              value={quantidade}
              onChange={handleQuantidade}
              min={0}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Adicionar
          </button>
          <button className="btn btn-warning" onClick={clearFields}>
            Limpar Campos
          </button>
          <button className="btn btn-danger" onClick={resetValues}>
            Limpar dados
          </button>
        </div>
        <p>Quantidade adicionada {contador}</p>
        <p>Soma dos produtos {soma}</p>
        <p>Média {media}</p>
      </form>
    </>
  );
}
