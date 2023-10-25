import { BarChart } from "../../components/BarChart";
import { DataInfo } from "../../components/DataInfo";
import { NumericTable } from "../../components/NumericTable";
import { NumericItem } from "../../types/custom-types";

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
  ];

  return (
    <>
      <DataInfo list={mockList} />
      <NumericTable list={mockList} />
      <BarChart list={mockList} />
    </>
  );
}
