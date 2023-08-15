import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "highcharts/css/highcharts.css";

export default function BoxChart({ options }) {
  console.log("OPTIONS", options);

  const optionsChart = {
    chart: {
      type: options.type,
    },
    title: {
      text: options.text,
    },
    xAxis: {
      categories: options.categories,
    },
    yAxis: {
      title: {
        text: options.textY,
      },
    },
    series: options.series,
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsChart} />
    </div>
  );
}
