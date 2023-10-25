import { useEffect, useState } from "react";
import { DataInfo } from "../../components/DataInfo";
import { NumericTable } from "../../components/NumericTable";
import { NumericItem } from "../../types/custom-types";

export function NumericForm() {
  const [quantidade, setQuantidade] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);
  const [atualiza, setAtualiza] = useState<any>();
  const [lista, setLista] = useState<NumericItem[]>([]);
  const [titulo, setTitulo] = useState<string>("");

  useEffect(() => {}, [atualiza]);

  function handleQuantidade(e: any) {
    e.preventDefault();
    setQuantidade(Number(e.target.value));
  }

  function handleValor(e: any) {
    e.preventDefault();
    setValor(Number(e.target.value));
  }

  function handleTitulo(e: any) {
    e.preventDefault();
    setTitulo(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const item: NumericItem = {
      key: quantidade,
      value: valor,
    };

    setLista([...lista, item]);
  }

  function clearFields(e: any) {
    e.preventDefault();
    setQuantidade(0);
    setValor(0);
  }

  function resetValues(e: any) {
    e.preventDefault();
    setLista([]);
    clearFields(e);
  }

  return (
    <>
      <form>
        <div className="form-row">
          <div className="col">
            <label>Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Título"
              value={titulo}
              onChange={handleTitulo}
              minLength={3}
            />
          </div>
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
          &nbsp;&nbsp;
          <button className="btn btn-warning" onClick={clearFields}>
            Limpar Campos
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-danger" onClick={resetValues}>
            Limpar dados
          </button>
        </div>
      </form>
      <h3>{titulo.toUpperCase()}</h3>
      <DataInfo list={lista} />
      <NumericTable list={lista} />

    </>
  );
}
