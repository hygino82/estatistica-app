import { BarChart } from "../../components/BarChart";
import { DescriptiveTable } from "../../components/DescriptiveTable";
import { PieChart } from "../../components/PieChart";
import { DescriptiveItem } from "../../types/custom-types";
import { generateDescriptiveTableValues, getTotalElements } from "../../utils/tools";

export function MockDescriptivePage() {
    const data: DescriptiveItem[] = [
        {
            quantity: 7,
            value: 'Banana'
        },
        {
            quantity: 3,
            value: 'Laranja'
        },
        {
            quantity: 5,
            value: 'Maçã'
        },
        {
            quantity: 4,
            value: 'Melancia'
        },
        {
            quantity: 1,
            value: 'Melão'
        },
        {
            quantity: 3,
            value: 'Uva'
        }
    ];

    const tableValues = generateDescriptiveTableValues(data);
    const quantidadeModa = getTotalElements(data);
    return (
        <>
            <p>Total de elementos {quantidadeModa.quantidade}</p>
            <DescriptiveTable list={tableValues} />
            <BarChart list={tableValues} />
            <PieChart list={tableValues} />
        </>
    );
}
