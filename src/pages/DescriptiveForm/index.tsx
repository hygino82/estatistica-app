import { useState } from "react";
import { DescriptiveItem } from "../../types/custom-types";
import { DescriptiveTable } from "../../components/DescriptiveTable";
import { generateDescriptiveTableValues, getTotalElements } from "../../utils/tools";
import { BarChart } from "../../components/BarChart";
import { PieChart } from "../../components/PieChart";

export function DescriptiveForm() {
    const [quantidade, setQuantidade] = useState<number>(0);
    const [valor, setValor] = useState<string>('');
    const [lista, setLista] = useState<DescriptiveItem[]>([]);
    const [titulo, setTitulo] = useState<string>("");


    function handleQuantidade(e: any) {
        e.preventDefault();
        setQuantidade(Number(e.target.value));
    }

    function handleValor(e: any) {
        e.preventDefault();
        setValor(e.target.value);
    }

    function handleTitulo(e: any) {
        e.preventDefault();
        setTitulo(e.target.value);
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        const item: DescriptiveItem = {
            quantity: quantidade,
            value: valor.toUpperCase(),
        };

        setLista([...lista, item]);
    }

    function clearFields(e: any) {
        e.preventDefault();
        setQuantidade(0);
        setValor('');
    }

    function resetValues(e: any) {
        e.preventDefault();
        setLista([]);
        clearFields(e);
    }

    const tableValues = generateDescriptiveTableValues(lista);
    const quantidadeModa = getTotalElements(lista);
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
                            type="text"
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
            <p>Quantidade adicionada {quantidadeModa.quantidade}</p>
            <DescriptiveTable list={tableValues} />
            <BarChart list={tableValues} />
            <PieChart list={tableValues} />
        </>
    )
}