import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Abdullah and Shefa's Weight Chart",
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Abdullah',
      data: [5, 3, 6, 8, 7, 6, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Shefa',
      data: [3, 7, 5, 9, 4, 2, 5],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
