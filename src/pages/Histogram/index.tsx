import { useState } from "react";
import { Intervalo } from "../../types/custom-types";
import { gerarIntervalos } from "../../utils/tools";
import { HistogramTable } from "../../components/HistogramTable";

export function Histogram() {

    const [limiteInferior, setLimiteInferior] = useState<number>(1);
    const [limiteSuperior, setLimiteSuperior] = useState<number>(20);
    const [tamanhoIntervalo, setTamanhoIntervalo] = useState<number>(5);
    const [intervalos, setIntervalos] = useState<Intervalo[]>([]);
    const [quantidade, setQuantidade] = useState<number>(5);
    const [total, setTotal] = useState(0.0);
    const [valor, setValor] = useState<number>(7);
    const [valores, setValores] = useState<number[]>([]);

    function handleLimiteInferior(e: any) {
        e.preventDefault();
        setLimiteInferior(Number(e.target.value));
    }

    function handleLimiteSuperior(e: any) {
        e.preventDefault();
        setLimiteSuperior(Number(e.target.value));
    }

    function handleTamanhoIntervalo(e: any) {
        e.preventDefault();
        setTamanhoIntervalo(Number(e.target.value));
    }

    function handleAdicionarLista(valor: number, x: number) {
        //e.preventDefault();
        let inserirValores: number[] = [];

        for (let i = 0; i < x; i++) {
            inserirValores.push(valor);
        }
        setValores([...valores, ...inserirValores]);
        setTotal(total + quantidade);
        console.log(`Total = ${total}`);
    }


    function handleQuantidade(e: any) {
        e.preventDefault();
        setQuantidade(Number(e.target.value));
    }

    function handleValor(e: any) {
        e.preventDefault();
        setValor(Number(e.target.value));
    }

    function handleIntervalos(e: any) {
        e.preventDefault();

        if (valores.length != 0) {
            const lista = gerarIntervalos(limiteInferior, limiteSuperior, tamanhoIntervalo, valores);
            setIntervalos([...intervalos, ...lista]);
        }
        console.log('Intervalos criados');
    }

    return (
        <div className="container">
            <h3>Histograma</h3>
            <form>
                <div className="container">

                    <label htmlFor="limite-inferior">Limite Inferior</label><br />
                    <input type="number" id="limite-inferior" placeholder="Limite Inferior" value={limiteInferior} onChange={handleLimiteInferior} /><br />
                    <label htmlFor="limite-superior">Limite Superior</label><br />
                    <input type="number" id="limite-superior" placeholder="Limite Superior" value={limiteSuperior} onChange={handleLimiteSuperior} /><br />
                    <label htmlFor="tamanho-intervalo">Tamanho Intervalo</label><br />
                    <input type="number" id="tamanho-intervalo" placeholder="Tamanho do Intervalo" value={tamanhoIntervalo} onChange={handleTamanhoIntervalo} /><br />
                    <button type="submit" className="btn btn-primary" onClick={handleIntervalos}>Criar Intervalos</button><br />
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
                <button className="btn btn-success" onClick={() => handleAdicionarLista(valor, quantidade)}>Adicionar Valores</button>
                <p>Quantidade adicionada {total}</p>
            </form>
            <HistogramTable list={intervalos} />
        </div>
    );
}