import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = (props) => {
  const { type } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels: props.dataY,
    datasets: [
      {
        fill: true,
        data: props.dataX,
        borderColor: props.border || "rgb(53, 162, 235)",
        backgroundColor: props.bg || "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "Line":
        return <Line options={options} data={data} />;
      case "bar":
        return <Bar options={options} data={data} />;
      default:
        return <Line options={options} data={data} />;
    }
  };

  return <>{renderSwitch(type)}</>;
};

export default Chart;
