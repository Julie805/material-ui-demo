import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  // barPercentage: .8, seems to have no effect
  maintainAspectRadio: false,
  height: 300,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    title: {
      display: false, // turn this on for chart's title
      text: "Factors Increasing Win"
    }
  },

  scales: {
    y: {
      ticks: {
        autoSkip: false
      }
    },
    x: {
      ticks: {
        autoSkip: false,
        beginAtZero: true,
        stepSize: 1,
        // max: 3,
        // min: 0,
        // callback: function (value, index, values) {
        // if (value <= 3) {
        //   return value;
        // }
        // }
      }
    }
  }
};

export default function IncreaseWin(props) {
  const factors = props.increase.map((item) => ({
    name: item.name,
    message: item.message,
    weight: item.weight,
    key: uuidv4()
  }));

  const labels = factors.map((item) => item.name);

  const data = {
    factors,
    labels,
    datasets: [
      {
        label: "Weight",
        data: factors.map((item) => parseInt(item.weight.value, 10)),
        borderColor: "#74AEFA",
        backgroundColor: "#74AEFA",
        barThickness: 8
      }
    ]
  };

  return (
    <div>
      <h3>Factors Increasing Win</h3>
     <Bar options={options} data={data} />
    </div>
  ) 
}
