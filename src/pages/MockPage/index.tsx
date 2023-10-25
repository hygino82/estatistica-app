import { BarChart } from "../../components/BarChart";
import { DataInfo } from "../../components/DataInfo";
import { NumericTable } from "../../components/NumericTable";
import { NumericItem } from "../../types/custom-types";
import { agruparSemelhantes } from "../../utils/tools";

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
      quantity: 2,
      value: 8,
    },
    {
      quantity: 10,
      value: 8,
    },
    {
      quantity: 5,
      value: 4,
    },
  ];

  const sortedList = agruparSemelhantes(mockList);
  return (
    <>
      <DataInfo list={sortedList} />
      <NumericTable list={sortedList} />
      <BarChart list={sortedList} />
    </>
  );
}
