import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "highcharts/css/highcharts.css";

export default function BoxChart() {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Valores Semestrais",
    },
    xAxis: {
      categories: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    },
    yAxis: {
      title: {
        text: "Valores",
      },
    },
    series: [
      {
        name: "Série 1",
        data: [10, 20, 30, 40, 50, 60],
      },
      {
        name: "Série 2",
        data: [10, 30, 30, 60, 50, 60],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
