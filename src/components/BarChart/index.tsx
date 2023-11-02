import Chart from "react-apexcharts";
import { DescriptiveItemList, NumericListItem } from "../../types/custom-types";



export function BarChart({ list }: NumericListItem | DescriptiveItemList) {
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
