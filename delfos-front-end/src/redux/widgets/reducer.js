import uuid from "react-uuid";

const initialState = {
  widgets: [
    {
      id: uuid(),
      chart: {
        type: "line",
      },
      title: {
        text: "Gráfico Básico com Highcharts React",
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
      ],
    },
  ],
};

export default function widgetsReducer(state = initialState, action) {
  return state;
}
