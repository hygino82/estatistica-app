import Chart from "react-apexcharts";
import { NumericListItem } from "../../types/custom-types";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: number[];
  };
  series: SeriesData[];
};

export function BarChart({ list }: NumericListItem) {
  const myLabels = list.map((x) => x.value);
  const mySeries = list.map((x) => x.quantity);

  const chartData = {
    labels: {
      categories: myLabels,
    },
    series: [
      {
        name: "Quantidade",
        data: mySeries,
      },
    ],
  };

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };
  console.log(`Elementos na lista :${list.length}`);
  if (list.length != 0) {
    return (
      <Chart
        options={{ ...options, xaxis: chartData.labels }}
        series={chartData.series}
        type="bar"
        height="240"
      />
    );
  }
}

//export default BarChart;
