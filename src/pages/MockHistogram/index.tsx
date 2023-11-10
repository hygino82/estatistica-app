import { BarChart } from "../../components/BarChart";
import { PieChart } from "../../components/PieChart";
import { TableHistogram } from "../../components/TableHistogram";
import { DescriptiveItem, Intervalo } from "../../types/custom-types";
import { generateHistogramValues } from "../../utils/tools";

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

    const tableValues: DescriptiveItem[] = generateHistogramValues(list);

    return (
        <>
            <TableHistogram lista={list} />
            <BarChart list={tableValues} />
            <PieChart list={tableValues} />
        </>
    );
}

