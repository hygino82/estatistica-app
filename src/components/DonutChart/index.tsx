import Chart from "react-apexcharts";
import { NumericListItem } from "../../types/custom-types";

type ChartData = {
  labels: string[];
  series: number[];
};

export const DonutChart = ({ list }: NumericListItem) => {
  const myLabels = list.map((x) => x.value.toString());
  const mySeries = list.map((x) => x.quantity);

  const chartData: ChartData = {
    labels: myLabels,
    series: mySeries,
  };

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};
