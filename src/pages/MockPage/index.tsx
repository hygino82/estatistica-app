import { BarChart } from "../../components/BarChart";
import { DataInfo } from "../../components/DataInfo";
import { PieChart } from "../../components/PieChart";
import { NumericTable } from "../../components/NumericTable";
import { NumericItem } from "../../types/custom-types";
import { agruparSemelhantes, ordenarLista } from "../../utils/tools";

export function MockPage() {
  const mockList: NumericItem[] = [
    {
      quantity: 5,
      value: 7,
    },
    {
      quantity: 3,
      value: 6,
    },
    {
      quantity: 6,
      value: 8,
    },
    {
      quantity: 5,
      value: 4,
    },
    {
      quantity: 15,
      value: 2,
    },
  ];

  const sortedList = ordenarLista(agruparSemelhantes(mockList));
  return (
    <>
      <DataInfo list={sortedList} />
      <NumericTable list={sortedList} />
      <BarChart list={sortedList} />
      <PieChart list={sortedList} />
    </>
  );
}
