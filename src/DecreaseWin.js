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
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    title: {
      display: false, // turn on for default title
      text: "Factors Decreasing Win"
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
        reverse: true
      }
    }
  }
};


export default function DecreaseWin(props) {
const factors = props.decrease.map((item) => ({
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
        // backgroundColor is where the color gets changed
        backgroundColor: "#74AEFA",
        barThickness: 6
      }
    ]
  };

   return (
    <div>
      <h3>Factors Decreasing Win</h3>
     <Bar options={options} data={data} />
    </div>
  ) 
}

