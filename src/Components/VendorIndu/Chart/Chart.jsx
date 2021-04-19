import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./Chart.css";

function Chart() {
    const chartData = {
        labels: ['november','december','january', 'fabruary', 'march', 'april'],
        datasets: [
          {
            label: 'Dairy Product',
            data: [12, 19, 3, 5, 2, 3, 8],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Stationary',
            data: [2, 3, 20, 5, 1, 4, 7],
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Grocesry',
            data: [3, 10, 13, 15, 22, 30, 40],
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      }
    return (
        <div className="chart_con">
          <div className="chart_head">
              Monthly Selling in %
          </div>
          <div className="chart_body">
              <Bar data={chartData} options={{ maintainAspectRatio: false, responsive: true }}/>
          </div>
        </div>
    )
}

export default Chart
