import { useEffect, useState } from "react";
import { NumericItem } from "../../types/custom-types";
import { NumericTable } from "../../components/NumericTable";

export function NumericForm() {
  const mockList: NumericItem[] = [
    {
      key: 7,
      value: 5,
    },
    {
      key: 6,
      value: 3,
    },
    {
      key: 8,
      value: 2,
    },
  ];

  const [quantidade, setQuantidade] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);
  const [atualiza, setAtualiza] = useState<any>();
  const [lista, setLista] = useState<NumericItem[]>([]);
  const [contador, setContador] = useState<number>(0);
  const [soma, setSoma] = useState<number>(0.0);
  const [media, setMedia] = useState<number>(0.0);

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

    console.log(item);

    let novaLista = [...lista];
    novaLista.push(item);

    setLista(novaLista);

    setContador((contador) => contador + item.value);
    setSoma((soma) => soma + quantidade * valor);
    const novaMedia: number = soma / item.value;
    setMedia(novaMedia);

    mockList.map((val) => console.log(val));
  }

  function clearFields(e: any) {
    e.preventDefault();
    setQuantidade(0);
    setValor(0);
  }

  function resetValues(e: any) {
    e.preventDefault();
    setLista([]);
    setMedia(0.0);
    setContador(0);
    setSoma(0.0);
    clearFields(e);
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
          &nbsp;&nbsp;
          <button className="btn btn-warning" onClick={clearFields}>
            Limpar Campos
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-danger" onClick={resetValues}>
            Limpar dados
          </button>
        </div>
        <p>Quantidade adicionada {contador}</p>
        <p>Soma dos produtos {soma}</p>
        <p>Média {media}</p>
      </form>
      <NumericTable list={mockList}/>
    </>
  );
}
