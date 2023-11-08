import { HistogramTable } from "../../components/HistogramTable";
import { Intervalo } from "../../types/custom-types";

export const MockHistogram = () => {
    const list: Intervalo[] = [
        {
            inicial: 1,
            final: 5,
            amount: 3
        },
        {
            inicial: 5,
            final: 10,
            amount: 4
        },
        {
            inicial: 10,
            final: 15,
            amount: 5
        },
        {
            inicial: 15,
            final: 20,
            amount: 3
        },
        {
            inicial: 20,
            final: 25,
            amount: 5
        }
    ];
    return (
        <>
            <HistogramTable list={list} />
        </>
    );
}