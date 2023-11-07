import { useState } from "react";
import { Intervalo } from "../../types/custom-types";

export function Histogram() {

    const [limiteInferior, setLimiteInferior] = useState<number>(0);
    const [limiteSuperior, setLimiteSuperior] = useState<number>(0);
    const [tamanhoIntervalo, setTamanhoIntervalo] = useState<number>(0);
    const [intervalos, setIntervalos] = useState<Intervalo[]>([]);

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

    function handleIntervalos(e: any) {
        e.preventDefault();
        const valores = {
            inferior: limiteInferior,
            superior: limiteSuperior,
            tamanho: tamanhoIntervalo
        };

        console.log(valores);
        let lista: Intervalo[] = [];
        for (let i = limiteInferior; i < limiteSuperior; i += tamanhoIntervalo) {
            const intervalo: Intervalo = {
                inicial: i,
                final: i + tamanhoIntervalo
            };
            lista.push(intervalo);
        }
        setIntervalos(lista);

        intervalos.map(x => console.log(x));
    }

    return (
        <div className="container">
            <h3>Histograma</h3>
            <form>
                <label htmlFor="limite-inferior">Limite Inferior</label><br />
                <input type="number" id="limite-inferior" placeholder="Limite Inferior" value={limiteInferior} onChange={handleLimiteInferior} /><br />
                <label htmlFor="limite-superior">Limite Superior</label><br />
                <input type="number" id="limite-superior" placeholder="Limite Superior" value={limiteSuperior} onChange={handleLimiteSuperior} /><br />
                <label htmlFor="tamanho-intervalo">Tamanho Intervalo</label><br />
                <input type="number" id="tamanho-intervalo" placeholder="Tamanho do Intervalo" value={tamanhoIntervalo} onChange={handleTamanhoIntervalo} /><br />
                <button type="submit" className="btn btn-primary" onClick={handleIntervalos}>Criar Intervalos</button><br />
            </form>
        </div>
    );
}