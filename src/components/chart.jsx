import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = props => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false,
        },
      },
    };

    // console.log(props.dataY)
    
  //   var dataXProps =[],dataYProps =[];
  //   props.data.map(data=>{
  //     dataXProps.push(data.descripcion)
  //     dataYProps.push(data.cantidad)
  //   }); 

    const labels = props.dataY;
    console.log(labels)
      
    const data = {
      labels,
      datasets: [
        {
          fill: true,
          data: props.dataX,
          borderColor: props.border || 'rgb(53, 162, 235)' ,
          backgroundColor:props.bg || 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  return <Line options={options} data={data} />;
}

export default Chart