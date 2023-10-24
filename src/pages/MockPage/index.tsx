import { DataInfo } from "../../components/DataInfo";
import { NumericTable } from "../../components/NumericTable";
import { NumericItem } from "../../types/custom-types";

export function MockPage() {
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

  return (
    <>
      <DataInfo list={mockList} />
      <NumericTable list={mockList} />
    </>
  );
}
