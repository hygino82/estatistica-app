import Chart from "react-apexcharts";
import { NumericListItem } from "../../types/custom-types";

type ChartData = {
  labels: string[];
  series: number[];
};

export const PieChart = ({ list }: NumericListItem) => {
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

  if (list.length != 0) {
    return (
      <Chart
        options={{ ...options, labels: chartData.labels }}
        series={chartData.series}
        type="pie"
        height="240"
      />
    );
  }
};
